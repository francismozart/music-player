import { ChangeEvent } from "react";
import Search from "@mui/icons-material/Search";
import s from "./searchinput.module.css";

interface ISearchInput {
  value: string;
  width?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const INITIAL_WIDTH = "254px";

export function SearchInput({
  value,
  width = INITIAL_WIDTH,
  onChange,
}: ISearchInput) {
  return (
    <div className={s.searchinputContainer} style={{ width }}>
      <Search />
      <input
        className={s.searchInput}
        placeholder={"Search in your library"}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
