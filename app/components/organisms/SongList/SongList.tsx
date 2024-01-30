"use client";

import Card from "@atoms/Card";
import { SongData } from "@/types/Song";
import s from "./songlist.module.css";
import { useRouter } from "next/navigation";
import useFavoriteSongs from "@hooks/useFavoriteSongs";
import useFavoriteSongsStore from "@store/useFavoriteSongsStore";
import useSortSongsStore from "@store/useSortSongsStore";
import { compareSongs } from "@lib/sortSong";

interface ISongList {
  songs: SongData[];
}

export function SongList({ songs }: ISongList) {
  let filteredSongs = [...songs];

  const router = useRouter();
  const { isFavorite, addFavoriteSong, removeFavoriteSong } =
    useFavoriteSongs();

  const { showOnlyFavorites } = useFavoriteSongsStore();
  const { sortSongs } = useSortSongsStore();

  const handleCardClick = (songId: number) => {
    router.push(`/play/${songId}`);
  };

  const handleFavoriteClick = (songId: number) => {
    if (isFavorite(songId)) removeFavoriteSong(songId);
    else addFavoriteSong(songId);
  };

  if (sortSongs) {
    filteredSongs = [...filteredSongs.sort(compareSongs)];
  }

  if (showOnlyFavorites) {
    filteredSongs = filteredSongs.filter((item) => isFavorite(item.id));
  }

  return (
    <div className={s.songListContainer}>
      {filteredSongs.map((item: SongData) => (
        <Card
          key={item.id}
          title={item.song.title}
          description={item.song.artist}
          imgSrc={`/assets/images/${item.song.files.coverArt}`}
          favorite={isFavorite(item.id)}
          favoriteClick={() => handleFavoriteClick(item.id)}
          onClick={() => handleCardClick(item.id)}
        />
      ))}
    </div>
  );
}
