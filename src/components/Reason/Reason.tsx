import { ReactElement } from "react";
import style from "./style.module.css";

interface ReasonProp {
  color: string;
  head: string;
  text: string;
  img: ReactElement;
}

export default function Reason({ color, head, text, img }: ReasonProp) {
  return (
    <div className={style.card} style={{ border: `3px solid ${color}` }}>
      <div>{img}</div>
      <div className={style.content}>
        <h3>{head}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
