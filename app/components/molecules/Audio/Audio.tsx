"use client";

import React, { useEffect, forwardRef, SyntheticEvent } from "react";

interface IAudio {
  track: string;
  playing: boolean;
  handleDuration: (duration: number) => void;
  handleCurrentTime: (currentTime: number) => void;
}

export function Audio({
  track,
  handleDuration,
  handleCurrentTime,
  playing,
}: IAudio) {
  useEffect(() => {
    const audio = document.querySelector("audio");

    if (audio) {
      handleDuration(audio.duration);

      audio.addEventListener("timeupdate", () => {
        handleCurrentTime(audio.currentTime);
      });

      if (playing) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [playing, handleDuration, handleCurrentTime]);

  return <audio preload="metadata" src={`/assets/audio/${track}`} />;
}
