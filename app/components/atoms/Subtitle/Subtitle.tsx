import { CSSProperties } from "react";
import s from "./subtitle.module.css";

interface ISubtitle {
  children: string;
  customStyle?: CSSProperties;
}

export function Subtitle({ children, customStyle }: ISubtitle) {
  return (
    <h3 className={s.subtitle} style={customStyle}>
      {children}
    </h3>
  );
}
