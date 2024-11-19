import style from "./style.module.css";

export default function Filter() {
  return (
    <div className={style.filter}>
      <h2>Фильтр поиска</h2>
      <div className={style.category}>
        <h3>Категория</h3>
        <div className={style.btns}>
          <button className={`${style.btn} ${style.btnActive}`}>Все</button>
          <button className={`${style.btn}`}>Кошки</button>
          <button className={`${style.btn}`}>Собаки</button>
        </div>
      </div>
      <div className={style.category}>
        <h3>Пол</h3>{" "}
        <div className={style.btns}>
          <button className={`${style.btn}`}>Все</button>
          <button className={`${style.btn} ${style.btnActive}`}>М</button>
          <button className={`${style.btn}`}>Ж</button>{" "}
        </div>
      </div>
      <div className={style.category}>
        <h3>Возраст</h3>
        <input type="number" max={25} min={0} className={style.input} />
      </div>
      <div className={style.category}>
        <h3>Размер</h3>{" "}
        <div className={style.btns}>
          <button className={`${style.btn}`}>Все</button>
          <button className={`${style.btn}`}>Маленькие</button>
          <button className={`${style.btn}`}>Средние</button>
          <button className={`${style.btn}`}>Крупные</button>{" "}
        </div>
      </div>
      <div className={style.category}>
        <h3>Приют (Астана)</h3>
        <select name="shelter" id="shelter" className={style.selection}>
          <option value="Приют1" className={style.option}>
            Приют1
          </option>
          <option value="Приют2" className={style.option}>
            Приют2
          </option>
          <option value="Приют3" className={style.option}>
            Приют3
          </option>
        </select>
      </div>
    </div>
  );
}
