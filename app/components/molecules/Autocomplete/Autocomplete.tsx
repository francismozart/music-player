"use client";

import { ChangeEvent, useState } from "react";
import SearchInput from "@atoms/SearchInput";
import Link from "next/link";
import { SongData } from "@/types/Song";
import { isEmptyOrWhitespaces } from "@lib/util";
import s from "./autocomplete.module.css";

interface ISearchInput {
  allSongs: SongData[];
  width?: string;
}

export function Autocomplete({ allSongs, width }: ISearchInput) {
  const [search, setSearch] = useState("");

  const filteredSongs = allSongs.filter((item) =>
    item.song.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <div className={s.autocomplete}>
      <SearchInput width={width} onChange={handleSearch} value={search} />
      {!isEmptyOrWhitespaces(search) ? (
        <div className={s.autocompleteBox}>
          <ul>
            {filteredSongs.map((item) => (
              <Link href={`/play/${item.id}`} key={item.id}>
                <li>{item.song.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
