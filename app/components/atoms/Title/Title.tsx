import s from "./title.module.css";

interface ITitle {
  children: string;
}

export function Title({ children }: ITitle) {
  return <h2 className={s.title}>{children}</h2>;
}
