type Album = {
  title: string;
  year: number;
};

type Files = {
  coverArt: string;
  poster: string;
  audio: string;
};

export type Song = {
  album: Album;
  artist: string;
  title: string;
  files: Files;
};

export type SongData = {
  id: number;
  song: Song;
  related: number[];
};
