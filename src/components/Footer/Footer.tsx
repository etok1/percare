import { Link } from "react-router-dom";
import style from "./style.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "25px",
        }}
      >
        <h2>
          С любовью к каждому <br /> хвостику!
        </h2>
        <p>
          Наша миссия — создать идеальные условия для жизни ваших питомцев, где
          они будут счастливы, здоровы и любимы. Давайте вместе заботиться о
          ваших любимцах!
        </p>
        <button className={style.btn}>Напишите нам</button>
        <span>© 2024 petcare kz, jardem</span>
        <div className={style.navigation}>
          <img src="/logo.png" alt="" />
          <nav className={style.nav}>
            <ul className={style.list}>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/help">О нас</Link>
              </li>
              <li>
                <Link to="/pets">Животные</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/form">Написать</Link>
              </li>
            </ul>
          </nav>
          <a href="https://www.instagram.com/petcare.jardem?igsh=MWV1M2psanpyY2g2dQ%3D%3D&utm_source=qr">
            <img src="/images/inst.svg" alt="inst" />
          </a>
        </div>
      </div>
    </footer>
  );
}
