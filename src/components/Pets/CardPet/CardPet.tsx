import { Link } from 'react-router-dom';
import style from './style.module.css'

interface Pet {
  name: string;
  species: string;
  sex: string;
  age: string;
  description: string;
  shelter: string;
  features: string[];
  vaccinated: boolean;
}

interface CardPetProps {
  item: Pet; 
  img: string;
}

export default function CardPet({item, img}: CardPetProps) {


  return (
    <div className={style.card}>
    <div className={style.img}>
      <img src={img} loading="lazy" alt={item.name} />
    </div>
    <div className={style.info}>
      <h2>{item.name}</h2>
      <p>
      {item.description}
      </p>
      <ul>
        <li>
          <span>📅</span>{item.age}
        </li>
        <li>
          <span>📏</span>{item.vaccinated ? 'Вакцинирован' :'Невакцинирован'}
        </li>
        <li>
          <span>⚢</span>{item.sex}
        </li>
      </ul>
      <div className={style.qualities}>
        <h3>Особенности:</h3>
        <ol>
       {item.features.map((feature) => (
        <li key={feature}>{feature}</li>
       ))}
        </ol>
      </div>
      <button className={style.booking}>
        <Link to={"/form"}>Записаться на знакомство</Link>
      </button>
    </div>
  </div>
  );
}


