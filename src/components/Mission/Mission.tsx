import style from "./style.module.css";

interface MissionProp {
  img: string;
  text: string;
}

export default function Mission({ img, text }: MissionProp) {
  return (
    <div className={style.card}>
      <p>{text}</p>
      <img src={img} alt="animal" width={350} height={227} />
    </div>
  );
}
