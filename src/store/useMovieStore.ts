import { create } from "zustand";

export const useMovieStore = create((set) => ({
  movieTitle: "",
  setMovieTitle: () => set((state) => ({ movieTitle: state })),
}));
