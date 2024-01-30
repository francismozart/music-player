"use client";

import { Stack } from "@mui/material";
import Title from "@atoms/Title";
import Subtitle from "@atoms/Subtitle";
import Favorite from "@atoms/Favorite";
import useFavoriteSongs from "@hooks/useFavoriteSongs";

interface ISongInfo {
  songId: number;
  songTitle: string;
  artist: string;
  albumTitle: string;
  year: number;
  favorite?: boolean;
}

export function SongInfo({
  songId,
  songTitle,
  artist,
  albumTitle,
  year,
  favorite = false,
}: ISongInfo) {
  const { isFavorite, addFavoriteSong, removeFavoriteSong } =
    useFavoriteSongs();

  const customSubtitleStyle = {
    color: "rgba(255, 255, 255, 0.90)",
    marginTop: "12px",
  };

  const handleFavoriteClick = (songId: number) => {
    if (isFavorite(songId)) removeFavoriteSong(songId);
    else addFavoriteSong(songId);
  };

  return (
    <Stack flexDirection={"column"} alignItems={"start"}>
      <Stack flexDirection={"row"} alignItems={"center"} gap={"22px"}>
        <Title>{songTitle}</Title>
        <Favorite
          favorite={favorite}
          onClick={() => handleFavoriteClick(songId)}
        />
      </Stack>
      <Subtitle
        customStyle={customSubtitleStyle}
      >{`${artist} | ${albumTitle} | ${year}`}</Subtitle>
    </Stack>
  );
}
