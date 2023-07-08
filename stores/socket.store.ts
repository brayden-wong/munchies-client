import { create } from "zustand";
import { combine } from "zustand/middleware";
import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { API_URL } from "@env";

type SocketStore = {
  socket: Socket | null;
  connect: () => Promise<Socket>;
  disconnect: () => void;
};

export const useSocketStore = create<SocketStore>((set, get) => ({
  socket: null,
  connect: async () => {
    const token = await AsyncStorage.getItem("at");
    const socket = io(API_URL, {
      extraHeaders: {
        authorization: `${token}`,
      },
    });

    socket.emit("join");

    set({ socket });

    return socket;
  },
  disconnect: () => {
    const { socket } = get();

    if (socket) socket.disconnect();
  },
}));
