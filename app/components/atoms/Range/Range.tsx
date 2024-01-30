import React, { useState, ChangeEvent } from "react";
import s from "./range.module.css";

interface IRange {
  min: number;
  max: number;
  value: number;
}

export function Range({ min, max, value }: IRange) {
  return (
    <input
      className={s.range}
      max={max}
      min={min}
      step="0.01"
      type="range"
      value={value}
      readOnly
    />
  );
}
