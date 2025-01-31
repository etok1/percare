import Mission from "../Mission/Mission";
import Reason from "../Reason/Reason";
import style from "./style.module.css";
import { ChartNoAxesCombined, Dog, Users } from "lucide-react";

const missions = [
  {
    img: "/images/home2.png",
    text: "Мы стремимся предоставить бездомным животным заботу, любовь и защиту, которых они заслуживают. Наша цель — создать безопасную и комфортную среду для животных, находящихся в приютах.",
  },
  {
    img: "/images/home3.png",
    text: "Мы работаем над тем, чтобы привлечь внимание к проблемам бездомных животных и важности их усыновления, стерилизации и ответственного отношения к ним. Образовательные программы и мероприятия помогают людям понять, как они могут помочь.",
  },
  {
    img: "/images/home4.png",
    text: "Мы вдохновляем людей становиться волонтерами в приютах, предоставляя им возможности для участия в уходе за животными, организации мероприятий и продвижении нашей миссии. Мы верим, что каждый может внести свой вклад.",
  },
];

const reasons = [
  {
    color: "#FF7700",
    head: "Помощь тем, кто в ней нуждается",
    text: "Волонтёрство позволяет поддерживать тех, кто оказался в сложной жизненной ситуации, будь то животные, люди или природа. Ваш вклад может изменить чью-то жизнь к лучшему, подарить надежду и возможность на новый старт.",
    img: <Dog size={64} color="#ff7700" />,
  },
  {
    color: "#059669",
    head: "Личностный рост и новые навыки",
    text: "Участие в волонтёрских проектах развивает коммуникацию, организаторские способности и эмпатию. Это отличная возможность изучить что-то новое, стать увереннее в себе и научиться работать в команде.",
    img: <ChartNoAxesCombined size={64} color="#059669" />,
  },
  {
    color: "#FF0004",
    head: "Изменения в обществе",
    text: "Волонтёры — это те, кто делает мир добрее и справедливее. Через совместные усилия можно улучшить экологию, поддержать бездомных животных, помочь малообеспеченным семьям или решить проблемы, которые важны для всех.",
    img: <Users size={64} color="#FF0004" />,
  },
];

export default function Home() {
  return (
    <div className={style.home}>
      <section className={style.heading}>
        <div className={style.header}>
          <h1>
            Добро пожаловать <br /> в Petcare
          </h1>
          <p>
            Волонтерство в приютах — это не только помощь животным, но и вклад в
            улучшение общества и развитие самих волонтеров. Мы верим, что каждый
            животное имеет право на любовь и заботу, и наша миссия — помочь им
            найти свой дом и обеспечить будущее.
          </p>
          <button className={`button ${style.btn}`}>Приютить пушистика</button>
        </div>
      </section>
      <section className={style.missions}>
        <h2>Наша миссия</h2>
        <div className={style.missionsContainer}>
          {missions.map((mission) => (
            <Mission img={mission.img} text={mission.text} />
          ))}
        </div>
      </section>{" "}
      <section className={style.reasons}>
        <h2>Важность волонтерства</h2>
        <div className={style.reasonsContainer}>
          {reasons.map((reason) => (
            <Reason
              color={reason.color}
              head={reason.head}
              text={reason.text}
              img={reason.img}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
