// import CardPet from "./CardPet/CardPet";

import Filter from "../Filter/Filter";
import CardPet from "./CardPet/CardPet";
import style from "./style.module.css";

export default function Pets() {
  return (
    <div className={style.container}>
      <h1>Забери пушистого друга домой!</h1>
      <div className={style.content}>
        <aside>
          <Filter />
        </aside>
        <div className={style.cards}>
          <CardPet /> <CardPet />
          <CardPet /> <CardPet />
        </div>
      </div>
    </div>
  );
}
