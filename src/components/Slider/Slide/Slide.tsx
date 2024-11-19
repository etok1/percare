import Row from "./Row/Row";
import style from "./style.module.css";

export default function Slide() {
  return (
    <div className={style.slide}>
      <Row /> <Row /> <Row />
    </div>
  );
}
