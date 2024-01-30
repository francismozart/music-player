import Favorite from "@atoms/Favorite";
import s from "./favoritebutton.module.css";
import useFavoriteSongsStore from "@store/useFavoriteSongsStore";

export function FavoriteButton() {
  const { toggleFavorites, showOnlyFavorites } = useFavoriteSongsStore();

  const handleClick = () => {
    toggleFavorites();
  };

  return (
    <button
      onClick={handleClick}
      className={`${s.favoriteButton} ${showOnlyFavorites ? s.active : ""}`}
    >
      <Favorite favorite={showOnlyFavorites} onClick={handleClick} />{" "}
      <span className={s.favoriteButtonText}>Favorites</span>
    </button>
  );
}
