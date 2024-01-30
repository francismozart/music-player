import { create } from "zustand";

interface IFavoriteSongsStore {
  favoriteSongs: number[];
  showOnlyFavorites: boolean;
  update: (newFavoriteSongs: number[]) => void;
  toggleFavorites: () => void;
}

const useFavoriteSongsStore = create<IFavoriteSongsStore>()((set) => ({
  favoriteSongs: [],
  showOnlyFavorites: false,
  update: (newFavoriteSongs) =>
    set(() => ({
      favoriteSongs: [...newFavoriteSongs],
    })),
  toggleFavorites: () =>
    set((state) => ({ showOnlyFavorites: !state.showOnlyFavorites })),
}));

export default useFavoriteSongsStore;
