import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePlaylistCart = create(
  persist(
    (set) => ({
      tracks: [],
      addTrack: (track) =>
        set((state) => {
          if (state.tracks.find((t) => t.id === track.id)) return state;
          return { tracks: [...state.tracks, track] };
        }),
      removeTrack: (id) =>
        set((state) => ({ tracks: state.tracks.filter((t) => t.id !== id) })),
      clearTracks: () => set({ tracks: [] }),
    }),
    {
      name: "playlistCart",
    }
  )
);
