import { create } from "zustand";
import { API_URL } from "@env";
import axios from "axios";
import type { Login, Response } from "@utils/types";

import AsyncStorage from "@react-native-async-storage/async-storage";

type OAuth = {
  at: string;
  rt: string;
  userId: string;
};

export type AuthStore = {
  at: string;
  rt: string;
  userId: string;
  login: (
    username: string,
    password: string
  ) => Promise<{ success: boolean; message?: string }>;
  oauthLogin: ({ at, rt, userId }: OAuth) => Promise<void>;
  logout: () => Promise<void>;
  refreshTokens: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  at: "",
  rt: "",
  userId: "",
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
      }
    );

    if (data.status === "ok") {
      const { at, rt, userId } = data.data;
      set({
        at,
        rt,
        userId,
      });

      await new Promise((resolve) => {
        AsyncStorage.setItem("at", at);
        AsyncStorage.setItem("rt", rt);
        AsyncStorage.setItem("userId", userId);
        resolve(true);
      });

      return { success: true };
    }

    return { success: false, message: data.message };
  },
  oauthLogin: async ({ at, rt, userId }) => {
    set({
      at,
      rt,
      userId,
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
      }
    );

    if (data.status === "ok") {
      const { oauthLogin } = get();

      oauthLogin({
        ...data.data,
      });
    }
  },
}));
