"use client";

import { isEmptyOrWhitespaces } from "@lib/util";

const STORAGE_NAME = "favoriteSongs";

export const setToLocalStorage = (favoriteSongs: number[]) => {
  localStorage.setItem(STORAGE_NAME, favoriteSongs.join(":"));
};

export const getFromLocalStorage = (): number[] | undefined => {
  if (typeof window === "undefined") return [];

  const storageFavorites = localStorage.getItem(STORAGE_NAME);

  if (isEmptyOrWhitespaces(storageFavorites)) return [];

  const storageArr = storageFavorites?.split(":");
  return storageArr?.map((item) => parseInt(item));
};
