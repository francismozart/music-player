import { MouseEvent } from "react";
import { FavoriteRounded, FavoriteBorderRounded } from "@mui/icons-material";

interface IFavorite {
  favorite: boolean;
  onClick?: () => void;
}

export function Favorite({ favorite, onClick }: IFavorite) {
  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();

    if (typeof onClick === "function") onClick();
  };

  return (
    <>
      {favorite ? (
        <FavoriteRounded
          width={20}
          height={20}
          sx={{ color: "#F8594E" }}
          onClick={handleClick}
        />
      ) : (
        <FavoriteBorderRounded width={20} height={20} onClick={handleClick} />
      )}
    </>
  );
}
