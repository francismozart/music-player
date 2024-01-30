"use client";

import Title from "@atoms/Title";
import Subtitle from "@atoms/Subtitle";
import FavoriteButton from "@molecules/FavoriteButton";
import s from "./library.module.css";

interface ILibraryTitle {
  qtyOfSongs: number;
}

export function LibraryTitle({ qtyOfSongs }: ILibraryTitle) {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Title>Your Library</Title>
        <FavoriteButton />
      </div>
      <Subtitle>{`You have ${qtyOfSongs} songs in your library`}</Subtitle>
    </div>
  );
}
