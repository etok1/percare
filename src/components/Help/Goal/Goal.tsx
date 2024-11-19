import style from "./style.module.css";

interface GoalProps {
  svg: JSX.Element;
  text: string;
}

export default function Goal({ svg, text }: GoalProps) {
  return (
    <div className={style.container}>
      <div className={style.svgContainer}>{svg}</div>
      <p>{text}</p>
    </div>
  );
}
