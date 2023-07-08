import { create } from "zustand";

export type Room = {
  roomId: string;
  users: Array<string>;
};

export type Rooms = Array<Room>;

type RoomStore = {
  selectedRoom: string;
  rooms: Rooms;
  setRooms: (rooms: Rooms) => void;
  selectRoom: (roomId: string) => void;
};

export const useRoomStore = create<RoomStore>((set) => ({
  selectedRoom: "",
  rooms: [],
  setRooms: (rooms) => set({ rooms }),
  selectRoom: (roomId) => set({ selectedRoom: roomId }),
}));
