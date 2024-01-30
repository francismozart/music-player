import Link from "next/link";
import { Grid, Container } from "@mui/material";
import Logo from "@atoms/Logo";
import s from "./menu.module.css";

interface IMenu {
  children?: JSX.Element;
}

export function Menu({ children }: IMenu) {
  return (
    <div className={s.menu}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={s.logoChildrenWrapper}>
              <Link href="/">
                <Logo />
              </Link>
              {children}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
