"use client";

import { Switch } from "@mui/material";
import useSortSongsStore from "@store/useSortSongsStore";
import "./alphabeticsort.css";

export function AlphabeticSort() {
  const { toggleSort } = useSortSongsStore();

  return (
    <div className="alphabeticSortContainer">
      <p className="text">Sort from A-Z</p>{" "}
      <Switch onClick={() => toggleSort()} />
    </div>
  );
}
