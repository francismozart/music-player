"use client";

import React from "react";
import Range from "@atoms/Range";

import s from "./songprogress.module.css";
import { Stack } from "@mui/material";

interface ISongProgress {
  currentTime: number;
  duration: number;
}

function convertTime(time: number): string {
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.floor(time % 60);
  let sec = `${seconds}`;

  if (seconds < 10) {
    sec = `0${seconds}`;
  }

  return isNaN(time) ? "0:00" : `${minutes}:${sec}`;
}

export function SongProgress({ currentTime, duration = 0 }: ISongProgress) {
  const regressiveCount = convertTime(duration - currentTime);
  return (
    <Stack
      flexDirection={"column"}
      alignItems={"center"}
      sx={{ marginTop: "38px" }}
    >
      <Range max={duration} min={0} value={currentTime} />
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        sx={{ width: "100%" }}
      >
        <span className={s.time}>{convertTime(currentTime)}</span>
        <span className={s.time}>{`-${regressiveCount}`}</span>
      </Stack>
    </Stack>
  );
}
