import { Ham } from "lucide-react";
import style from "./style.module.css";

export default function Row() {
  return (
    <div className={style.card}>
      <div className={style.icon}>
        <Ham size={32} color="#FF0004" />
      </div>
      <div className={style.content}>
        <div className={style.title}>
          <h2>Корм и лакомства</h2>
          <p className={style.urge}>Срочно</p>
        </div>
        <p>Сухой и влажный корм, витамины, лекарства </p>
      </div>
    </div>
  );
}
