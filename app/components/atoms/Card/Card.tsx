"use client";

import s from "./card.module.css";
import Image from "next/image";
import Favorite from "@atoms/Favorite";

interface ICard {
  title: string;
  description: string;
  imgSrc: string;
  favorite: boolean;
  favoriteClick: () => void;
  onClick?: () => void;
}

const DEFAULT_WIDTH = 204;
const DEFAULT_HEIGHT = 204;

export function Card({
  title,
  description,
  imgSrc,
  favorite,
  favoriteClick,
  onClick,
}: ICard) {
  return (
    <div className={s.card} onClick={onClick}>
      <Image
        className={s.cover}
        src={imgSrc}
        alt={`${description} - ${title}`}
        width={DEFAULT_WIDTH}
        height={DEFAULT_HEIGHT}
      />
      <div className={s.content}>
        <h3 className={s.title} title={title}>
          {title}
        </h3>
        <div className={s.flexWrapper}>
          <p className={s.description} title={description}>
            {description}
          </p>
          <Favorite favorite={favorite} onClick={favoriteClick} />
        </div>
      </div>
    </div>
  );
}
