import { create } from "zustand";

export const useVideoStore = create((set) => ({
  stopVideo: false,
  readyVideo: false,
  readyDetailVide: false,
  toggleStopVideo: (state) => set(() => ({ stopVideo: state })),
  toggleReadyVideo: (state) => set(() => ({ readyVideo: state })),
  toggleReadyDetailVide: (state) => set(() => ({ readyDetailVide: state })),
}));
