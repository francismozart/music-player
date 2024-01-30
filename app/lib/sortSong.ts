import { SongData } from "@/types/Song";

export const compareSongs = (a: SongData, b: SongData) => {
  if (a.song.title < b.song.title) {
    return -1;
  }
  if (a.song.title > b.song.title) {
    return 1;
  }
  return 0;
};
