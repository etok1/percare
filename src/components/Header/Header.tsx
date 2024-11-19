import { NavLink } from "react-router-dom";
import style from "./style.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <NavLink to="/">
        <img src="/logo.png" alt="logo" />
      </NavLink>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              О нас
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pets"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Животные
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              FAQ
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={style.btns}>
        <button className="button">Instagram</button>
        <button className="button">Поиск питомцев</button>
      </div>
    </header>
  );
}
