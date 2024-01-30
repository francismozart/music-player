import { create } from "zustand";

interface ISortSongsStore {
  sortSongs: boolean;
  toggleSort: () => void;
}

const useSortSongsStore = create<ISortSongsStore>()((set) => ({
  sortSongs: false,
  toggleSort: () => set((state) => ({ sortSongs: !state.sortSongs })),
}));

export default useSortSongsStore;
