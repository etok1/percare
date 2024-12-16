import { ReactNode } from "react";
import style from "./style.module.css";

interface StepProps {
  icon: ReactNode;
  title: string;
  text: string;
}

export default function Step({ icon, title, text }: StepProps) {
  return (
    <div className={style.step}>
      <div className={style.icon}>{icon}</div>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
}
