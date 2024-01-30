"use client";

import React, { useRef, useState } from "react";
import PlayButton from "@atoms/PlayButton";
import Audio from "@molecules/Audio";
import SongProgress from "@molecules/SongProgress";
import SongInfo from "@molecules/SongInfo";
import s from "./player.module.css";
import { SongData } from "@/types/Song";
import useFavoriteSongs from "@hooks/useFavoriteSongs";

interface IPlayer {
  songData: SongData;
}

export function Player({ songData }: IPlayer) {
  const { id, song } = songData;
  const { files, title, artist, album } = song;
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { isFavorite } = useFavoriteSongs();

  const favorite = isFavorite(id);

  return (
    <div className={s.player}>
      <div className={s.playInfoWrapper}>
        <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <SongInfo
          songTitle={title}
          artist={artist}
          albumTitle={album.title}
          year={2007}
          songId={id}
          favorite={favorite}
        />
      </div>
      <SongProgress currentTime={currentTime} duration={duration} />
      <Audio
        playing={isPlaying}
        track={files.audio}
        handleDuration={setDuration}
        handleCurrentTime={setCurrentTime}
      />
    </div>
  );
}
