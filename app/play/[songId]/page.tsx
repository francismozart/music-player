import { Grid, Container } from "@mui/material";
import Autocomplete from "@molecules/Autocomplete";
import MusicPlayer from "@organisms/MusicPlayer";
import RelatedSongs from "@organisms/RelatedSongs";
import Menu from "@molecules/Menu";
import { isEmptyArray } from "@lib/util";
import { requestSong, requestRelated } from "@client/index";
import { SongData } from "@/types/Song";
import { requestSongs } from "@client/index";
import s from "./play.module.css";

export default async function Play({ params }: { params: { songId: string } }) {
  const result = await requestSongs();
  const allSongs = result.songs;

  const songData: SongData = await requestSong(params.songId);
  const showRelatedSongs = !isEmptyArray(songData.related);
  const relatedSongs: SongData[] = showRelatedSongs
    ? await requestRelated(songData.related.join(":"))
    : [];

  const customBGStyle = {
    backgroundImage: `url(/assets/images/${songData.song.files.poster})`,
  };

  return (
    <div className={s.playContainer}>
      <Menu>
        <Autocomplete width="360px" allSongs={allSongs} />
      </Menu>
      <Container sx={{ height: "100%" }}>
        <Grid
          container
          sx={{
            position: "relative",
            height: showRelatedSongs ? "unset" : "100%",
          }}
        >
          <div className={s.playBg} style={customBGStyle}></div>
          <div className={s.mainWrapper}>
            <MusicPlayer songData={songData} />

            {showRelatedSongs ? (
              <RelatedSongs relatedSongs={relatedSongs} />
            ) : (
              <></>
            )}
          </div>
        </Grid>
      </Container>
    </div>
  );
}
