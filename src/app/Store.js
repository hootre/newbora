import { create } from "zustand";

export const useVideoStore = create((set) => ({
  stopVideo: true,
  readyVideo: false,
  toggleStopVideo: (state) => set(() => ({ stopVideo: state })),
  toggleReadyVideo: (state) => set(() => ({ readyVideo: state })),
}));
