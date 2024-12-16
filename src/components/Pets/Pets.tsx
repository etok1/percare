// import CardPet from "./CardPet/CardPet";

import Filter from "../Filter/Filter";
import CardPet from "./CardPet/CardPet";
import Step from "./Step/Step";
import style from "./style.module.css";
import { Search, PawPrint, CalendarDays, Handshake } from "lucide-react";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db, fetchImages } from "../../firebaseConfig";
import { getDownloadURL, getStorage, listAll, ref } from "@firebase/storage";


const steps = [
  {
    icon: <Search size={32} color="#059669" />,
    title: "Выберите питомца",
    text: "Используйте фильтры чтобы найти идеального компаньона",
  },
  {
    icon: <CalendarDays size={32} color="#059669" />,
    title: "Выберите питомца",
    text: "Познакомьтесь с питомцем лично в приюте",
  },
  {
    icon: <Handshake size={32} color="#059669" />,
    title: "Выберите питомца",
    text: "Получите советы от наших специалистов по уходу",
  },
  {
    icon: <PawPrint size={32} color="#059669" />,
    title: "Выберите питомца",
    text: "Используйте фильтры чтобы найти идеального компаньона",
  },
];


interface Pet {
  id: number;
  image: string;
  name: string;
  species: string;
  sex: string;
  age: string;
  description: string;
  shelter: string;
  features: string[];
  vaccinated: boolean;
}

export default function Pets() {
  const [items, setItems] = useState<any[]>([]);  
  const [images, setImages] = useState<string[]>([]);
  const storage = getStorage();
  
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "pets"));
      const data = querySnapshot.docs.map(doc => doc.data());  console.log(data);
      setItems(data);
    };
    
    const getImages = async () => {
      const images = await fetchImages();
      setImages(images);
    };

    fetchData();
    getImages();
  }, []);

    





  return (
    <div className={style.container}>
      <section className={style.steps}>
        <h1>Как забрать питомца из приюта?</h1>
        <p className={style.subheader}>
          Всего 4 простых шага чтобы найти верного друга
        </p>
        <div className={style.stepsContainer}>
          {steps.map((step, index) => (
            <Step key={index} icon={step.icon} title={step.title} text={step.text} />
          ))}
        </div>
      </section>
      <div className={style.content}>
        <aside>
          <Filter />
        </aside>
        <div className={style.cards}> 
        {images.length > 0 && items.map((item) => (
          item.pets.map((pet: Pet, petIndex: number) => {
            const petImage = images[pet.id - 1]; 
            console.log(pet.id);
            return (
              <CardPet key={petIndex} item={pet} img={petImage} />
            );
          })
        ))}
        </div>
       

    
      </div>
    </div>
  );
}
