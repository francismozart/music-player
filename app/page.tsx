import { Suspense } from "react";
import { Grid, Container, Stack } from "@mui/material";
import SongList from "@organisms/SongList";
import Menu from "@molecules/Menu";
import AlphabeticSort from "@molecules/AlphabeticSort";
import Autocomplete from "@molecules/Autocomplete";
import LibraryTitle from "@organisms/LibraryTitle";
import { requestSongs } from "@client/index";
import s from "./home.module.css";

export default async function Home() {
  const result = await requestSongs();
  const allSongs = result.songs;

  return (
    <div className={s.homeContainer}>
      <Menu />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={s.titleActionsWrapper}>
              <LibraryTitle qtyOfSongs={allSongs.length} />

              <div>
                <div className={s.actionsWrapper}>
                  <AlphabeticSort />
                  <div>
                    <Autocomplete allSongs={allSongs} />
                  </div>
                </div>
              </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <SongList songs={allSongs} />
            </Suspense>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
