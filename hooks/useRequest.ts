import axios, { type AxiosRequestConfig } from "axios";
import type { Response } from "@utils/types";
import { useEffect, useState } from "react";
import { useAuthStore } from "@stores/auth.store";

type UseRequestParams = GetRequest | AnyRequest;

type GetRequest = {
  method: "GET";
  options?: AxiosRequestConfig;
};

type AnyRequest = {
  method: "POST" | "PATCH" | "DELETE";
  data?: any;
  options?: AxiosRequestConfig;
};

export function useRequest<T>(url: string, options: UseRequestParams) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { at, refreshTokens } = useAuthStore();
  const authToken = at();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      await refreshTokens();
      setLoading(true);

      if (options.method === "GET") {
        const response = await axios.get<Response<T>>(url, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          ...options?.options,
        });

        response.data.status === "ok"
          ? setData(response.data.data)
          : setError(response.data.message);
        setLoading(false);

        return;
      }
      const { method, data, options: config } = options;

      const response = await axios<Response<T>>({
        url,
        method,
        data,
        ...config,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      response.data.status === "ok"
        ? setData(response.data.data)
        : setError(response.data.message);
      setLoading(false);
      return;
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, error, loading };
}
