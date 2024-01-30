import Image from "next/image";
import s from "./albumcover.module.css";

interface IAlbumCover {
  imgSrc: string;
  artist: string;
  albumTitle: string;
}

const DEFAULT_WIDTH = 204;
const DEFAULT_HEIGHT = 204;

export function AlbumCover({ imgSrc, artist, albumTitle }: IAlbumCover) {
  return (
    <Image
      className={s.albumCover}
      src={`/assets/images/${imgSrc}`}
      alt={`${albumTitle} - ${artist}`}
      width={DEFAULT_WIDTH}
      height={DEFAULT_HEIGHT}
    />
  );
}
