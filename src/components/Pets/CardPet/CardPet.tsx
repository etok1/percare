// import { useEffect, useState } from "react";

// interface AnimalsProps {
//   adopted: boolean;
//   age: string;
//   description: string;
//   name: string;
// }

// interface ItemProps {
//   record: {
//     animals: AnimalsProps[];
//   };
// }

// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://api.jsonbin.io/v3/b/672c800facd3cb34a8a43ea9 ",
//       {
//         headers: {
//           "X-Master-Key":
//             "$2a$10$Q/IU1OFx4l3BNiaWdjGL0uOPSpQ5cRDL1oVURg94nrEScXjpEWA/u",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
//     }

//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed fetching data");
//   }
// }

import { Link } from "react-router-dom";
import style from "./style.module.css";

export default function CardPet() {
  //   const [items, setItems] = useState<ItemProps | null>(null);

  //   useEffect(() => {
  //     const fetchItems = async () => {
  //       const fetchedData = await fetchData();
  //       setItems(fetchedData);
  //     };

  //     fetchItems();
  //   }, []);

  // if (!items || !items.record.animals.length) {
  //   return <div>No animals found</div>;
  // }

  return (
    <div className={style.card}>
      <div className={style.img}>
        <img src="/images/card1.png" alt="card1" />
      </div>
      <div className={style.info}>
        <h2>Белла</h2>
        <p>
          Спокойная собака, подходит для семьи с детьми. подходит для семьи с
          детьми
        </p>
        <ul>
          <li>
            <span>📅</span>3 года
          </li>
          <li>
            <span>📏</span>Средний размер
          </li>
          <li>
            <span>⚢</span>Женский
          </li>
        </ul>
        <div className={style.qualities}>
          <h3>Особенности:</h3>
          <ol>
            <li>Стерилизована</li>
            <li>Привита</li>
            <li>Приучена к поводку</li>
          </ol>
        </div>
        <button className={style.booking}>
          <Link to={"/form"}>Записаться на знакомство</Link>
        </button>
      </div>
    </div>
  );
}
