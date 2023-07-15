import { create } from "zustand";
import { API_URL } from "@env";
import axios from "axios";
import type { Login, Response } from "@utils/types";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

type OAuth = {
  at: string;
  rt: string;
  user: {
    id: string;
    username: string;
    name: string;
    email?: string;
  };
};

export type AuthStore = {
  at: () => string;
  rt: () => string;
  setAt: (at: string) => Promise<void>;
  setRt: (rt: string) => Promise<void>;
  user?: {
    id: string;
    username: string;
    name: string;
    email?: string;
  } | null;
  login: (username: string, password: string) => Promise<{ success: boolean }>;
  oauthLogin: ({ at, rt, user }: OAuth) => Promise<void>;
  logout: () => Promise<void>;
  refreshTokens: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  at: () => {
    const [at, setAt] = useState("");

    useEffect(() => {
      const getAt = async () => {
        setAt((await AsyncStorage.getItem("at")) ?? "");
      };

      getAt();
    });

    return at;
  },
  rt: () => {
    const [rt, setRt] = useState("");

    useEffect(() => {
      const getRt = async () => {
        setRt((await AsyncStorage.getItem("rt")) ?? "");
      };

      getRt();
    });

    return rt;
  },
  setAt: async (at) => AsyncStorage.setItem("at", at),
  setRt: async (rt) => AsyncStorage.setItem("rt", rt),
  user: null,
  login: async (username, password) => {
    const { data } = await axios.post<Response<Login>>(
      `${API_URL}/auth/login`,
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );

    if (data.status === "ok") {
      const { at, rt, user } = data.data;
      const { setAt, setRt } = get();
      await Promise.all([setAt(at), setRt(rt)]);
      set({
        user,
      });

      await new Promise((resolve) => {
        AsyncStorage.setItem("at", at);
        AsyncStorage.setItem("rt", rt);
        resolve(true);
      });

      return { success: true };
    }

    return { success: false, message: data.message };
  },
  oauthLogin: async ({ at, rt, user: currentUser }) => {
    const { setAt, setRt } = get();
    await Promise.all([setAt(at), setRt(rt)]);
    set({
      user: {
        ...currentUser,
        email: currentUser?.email ?? "",
      },
    });

    await new Promise((resolve) => {
      AsyncStorage.setItem("at", at);
      AsyncStorage.setItem("rt", rt);
      resolve(true);
    });
  },
  logout: async () => {},
  refreshTokens: async () => {
    const rt = await AsyncStorage.getItem("rt");
    const { data } = await axios.patch<Response<Login>>(
      `${API_URL}/auth/refresh`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${rt}`,
        },
      },
    );

    if (data.status === "ok") {
      const { at, rt, user: currentUser } = data.data;
      const { oauthLogin } = get();

      oauthLogin({
        at,
        rt,
        user: {
          ...currentUser,
          email: currentUser?.email ?? "",
        },
      });
    }
  },
}));
