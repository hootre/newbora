import { create } from "zustand";

export const useVideoStore = create((set) => ({
  stopVideo: true,
  toggleStopVideo: (state) => set(() => ({ stopVideo: state })),
}));
