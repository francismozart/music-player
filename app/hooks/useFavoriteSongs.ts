import useFavoriteSongsStore from "@store/useFavoriteSongsStore";
import { setToLocalStorage } from "@lib/localStorage";

//TODO: need to work on retrieving the data from the localStorage, since we may do this from a server component

const useFavoriteSongs = () => {
  const { favoriteSongs, update } = useFavoriteSongsStore();

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
