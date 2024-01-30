import AlbumCover from "@atoms/AlbumCover";
import Player from "@organisms/Player";
import { SongData } from "@/types/Song";
import s from "./musicplayer.module.css";

interface IMusicPlayer {
  songData: SongData;
}

export function MusicPlayer({ songData }: IMusicPlayer) {
  const { files, artist, album } = songData.song;

  return (
    <div className={s.musicPlayer}>
      <div className={s.albumPlayerWrapper}>
        <AlbumCover
          imgSrc={files.coverArt}
          artist={artist}
          albumTitle={album.title}
        />

        <Player songData={songData} />
      </div>
    </div>
  );
}
