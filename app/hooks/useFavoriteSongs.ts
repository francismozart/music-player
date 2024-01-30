import useFavoriteSongsStore from "@store/useFavoriteSongsStore";
import { setToLocalStorage, getFromLocalStorage } from "@lib/localStorage";
import { isEmptyArray } from "@lib/util";
import { useEffect } from "react";

const useFavoriteSongs = () => {
  const { favoriteSongs, update } = useFavoriteSongsStore();

  //TODO ver isso
  // useEffect(() => {
  //   const favoritesFromLocalStorage = getFromLocalStorage() as number[];
  //   // console.log("favoritesFromLocalStorage", favoritesFromLocalStorage);
  //   // if (!isEmptyArray(favoritesFromLocalStorage)) {
  //   //   update([...favoritesFromLocalStorage]);
  //   // }
  // }, [update]);

  const isFavorite = (songId: number) => {
    return favoriteSongs.includes(songId);
  };

  const addFavoriteSong = (songId: number) => {
    const newFavoriteSongs = [...favoriteSongs, songId];
    update(newFavoriteSongs);
    setToLocalStorage(newFavoriteSongs);
  };

  const removeFavoriteSong = (songId: number) => {
    const index = favoriteSongs.indexOf(songId);
    if (index > -1) {
      const newFavoriteSongs = favoriteSongs.toSpliced(index, 1);
      update(newFavoriteSongs);
      setToLocalStorage(newFavoriteSongs);
    }
  };

  return {
    isFavorite,
    addFavoriteSong,
    removeFavoriteSong,
  };
};

export default useFavoriteSongs;
