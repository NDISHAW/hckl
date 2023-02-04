import hosi.jpg from "../img/hosi.jpg";
import laborotaryproducts from "../img/laborotaryproducts.jpg";
import vetprod from "../img/vetprod.png";
import Fi1 from "../img/fi1.png";

export const heroData = [
  {
    id: 1,
    name: "Hospital Products",
    decp: "All products needed for the hospital enviroment.",
    // price: "5.25",
    imageSrc: hosi.jpg,
  },
  {
    id: 2,
    name: "Laborotary Products",
    decp: "All laboratory products and support.",
    price: "10.25",
    imageSrc: laborotaryproducts,
  },
  {
    id: 3,
    name: "Veternary Products",
    decp: "All laboratory Veternary and support",
    price: "8.25",
    imageSrc: vetprod,
  },
  {
    id: 4,
    name: "Microscopes",
    decp: "All Microscopes, maintenance and support ",
    price: "5.25",
    imageSrc: vetprod,
  },
];

export const categories = [
  {
    id: 1,
    name: "Chicken",
    urlParamName: "chicken",
  },
  {
    id: 2,
    name: "Curry",
    urlParamName: "curry",
  },
  {
    id: 3,
    name: "Rice",
    urlParamName: "rice",
  },
  {
    id: 4,
    name: "Fish",
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
