import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  const breeds = [
    {
      id: 1,
      breed: "Affenpinscher",
      image: "BJa4kxc4X",
      min_height: 23,
      max_height: 29,
      min_weight: 3,
      max_weight: 6,
      life_span: "10 - 12 years",
      createdInDb: false,
    },
    {
      id: 2,
      breed: "Afghan Hound",
      image: "hMyT4CDXR",
      min_height: 64,
      max_height: 69,
      min_weight: 23,
      max_weight: 27,
      life_span: "10 - 13 years",
      createdInDb: false,
    },
    {
      id: 3,
      breed: "African Hunting Dog",
      image: "rkiByec47",
      min_height: 76,
      max_height: null,
      min_weight: 20,
      max_weight: 30,
      life_span: "11 years",
      createdInDb: false,
    },
    {
      id: 4,
      breed: "Airedale Terrier",
      image: "1-7cgoZSh",
      min_height: 53,
      max_height: 58,
      min_weight: 18,
      max_weight: 29,
      life_span: "10 - 13 years",
      createdInDb: false,
    },
    {
      id: 5,
      breed: "Akbash Dog",
      image: "26pHT3Qk7",
      min_height: 71,
      max_height: 86,
      min_weight: 41,
      max_weight: 54,
      life_span: "10 - 12 years",
      createdInDb: false,
    },
    {
      id: 6,
      breed: "Akita",
      image: "BFRYBufpm",
      min_height: 61,
      max_height: 71,
      min_weight: 29,
      max_weight: 52,
      life_span: "10 - 14 years",
      createdInDb: false,
    },
    {
      id: 7,
      breed: "Alapaha Blue Blood Bulldog",
      image: "33mJ-V3RX",
      min_height: 46,
      max_height: 61,
      min_weight: 25,
      max_weight: 41,
      life_span: "12 - 13 years",
      createdInDb: false,
    },
    {
      id: 8,
      breed: "Alaskan Husky",
      image: "-HgpNnGXl",
      min_height: 58,
      max_height: 66,
      min_weight: 17,
      max_weight: 23,
      life_span: "10 - 13 years",
      createdInDb: false,
    },
  ];

  return (
    <div className={style.container}>
      {breeds.map((breed) => {
        return (
          <Card
            image={breed.image}
            name={breed.breed}
            temperaments={breed.temperament}
            max_weight={breed.max_weight}
            min_weight={breed.min_weight}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;

// Imagen.
// Nombre.
// Temperamentos.
// Peso.
// 8 perros por pag.
