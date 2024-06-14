import { Media } from "@/__generated__/graphql";
import { create } from "zustand";

interface LibralyStoreProps {
  favorites: Partial<Media>[],
  remove: (id: number) => void,
  add: (anime: Partial<Media>) => void,
}

export const useLibralyStore = create<LibralyStoreProps>((set) => ({
  favorites: [],

  add: (anime: Partial<Media>) => set((state) => ({
    favorites: [...state.favorites, anime],
  })),

  remove: (id: number) => set((state) => ({
    favorites: state.favorites?.filter(anime => anime?.id !== id)
  }))
}));

