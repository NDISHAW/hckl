import theater from "../img/theater.jpg";
import laborotaryproducts from "../img/laborotaryproducts.jpg";
import microscope from "../img/microscope.png";
import vetcow from "../img/vetcow.jpg";

export const heroData = [
  {
    id: 1,
    name: "Hospital Products",
    decp: "All products needed for the hospital enviroment.",
    // price: "5.25",
    imageSrc: theater,
  },
  {
    id: 2,
    name: "Laborotary Products",
    decp: "All laboratory products and support.",
    // price: "10.25",
    imageSrc: laborotaryproducts,
  },
  {
    id: 3,
    name: "Veternary Products",
    decp: "All laboratory Veternary and support",
    // price: "8.25",
    imageSrc: vetcow,
  },
  {
    id: 4,
    name: "Microscopes",
    decp: "All Microscopes, maintenance and support ",
    // price: "5.25",
    imageSrc: microscope,
  },
];

export const categories = [
  {
    id: 1,
    name: "Hospital Products",
    urlParamName: "chicken",
  },
  {
    id: 2,
    name: "Laborotary Products",
    urlParamName: "curry",
  },
  {
    id: 3,
    name: "Microscopes",
    urlParamName: "rice",
  },
  {
    id: 4,
    name: "Vete",
    urlParamName: "fish",
  },
  {
    id: 5,
    name: "Fruits",
    urlParamName: "fruits",
  },
  {
    id: 6,
    name: "Icecreams",
    urlParamName: "icecreams",
  },

  {
    id: 7,
    name: "Soft Drinks",
    urlParamName: "drinks",
  },
];
