import { Suspense } from "react";
import { Stack } from "@mui/material";
import Subtitle from "@atoms/Subtitle";
import SongList from "@organisms/SongList";
import { SongData } from "@/types/Song";

interface IRelatedSongs {
  relatedSongs: SongData[];
}

export function RelatedSongs({ relatedSongs }: IRelatedSongs) {
  const customSubtitleStyle = {
    color: "rgba(255,255,255,0.7)",
    marginBottom: "20px",
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Stack flexDirection={"column"}>
        <Subtitle customStyle={customSubtitleStyle}>Other songs</Subtitle>
        <SongList songs={relatedSongs} />
      </Stack>
    </Suspense>
  );
}
