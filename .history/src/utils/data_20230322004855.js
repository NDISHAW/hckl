import theater from "../img/theater.jpg";
import laborotaryproducts from "../img/laborotaryproducts.jpg";
// import microscope from "../img/microscope.png";
import vetcow from "../img/vetcow.jpg";
import {
  AlipineIcon,
  BugattiIcon,
  FerrariIcon,
  LamborghiniIcon,
  GeometryIcon,
  KarmaIcon,
  TeslaIcon,
} from "../components/Products/assets/picturesExport";

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
  // {
  //   id: 4,
  //   name: "Microscopes",
  //   decp: "All Microscopes, maintenance and support ",
  //   // price: "5.25",
  //   imageSrc: microscope,
  // },
];
export const labEquipment = [
  {
    id: 0,
    name: "Hematology",
    urlParamName: "LE_Hematology",
    logo: AlipineIcon,
    text: `Alpine`,
    width: "150px",
  },
  {
    id: 2,
    name: "Clinichal Chemistry",
    urlParamName: "LE_Clinichal Chemistry",
    logo: FerrariIcon,
    text: `Karma`,
    width: "180px",
  },
  {
    id: 3,
    name: "Molecular Diagnostics",
    urlParamName: "LE_Molecular Diagnostics",
    logo: KarmaIcon,
    text: `Karma`,
    width: "180px",
  },
  {
    id: 4,
    urlParamName: "Immunofluorescent",
    logo: FerrariIcon,
    text: `Karma`,
    width: "180px",
  },
  {
    id: 5,
    urlParamName: "ELISA",
    logo: BugattiIcon,
    text: `Karma`,
    width: "180px",
  },
  {
    id: 6,
    urlParamName: "Chemiluminecents",
    logo: GeometryIcon,
    text: `Geometry`,
    width: "160px",
  },
  {
    id: 7,
    urlParamName: "Immmunoblots",
    logo: LamborghiniIcon,
    text: `Geometry`,
    width: "160px",
  },
  // {
  //   id: 8,
  //   logo: TeslaIcon,
  //   text: `Geometry`,
  //   width: "160px",
  // },
];
export const labReagents = [
  {
    id: 0,
    name:"Rhematology",
    urlParamName: "LE_Rhematology",
    logo: LamborghiniIcon,
    text: `Geometry`,
    width: "160px",
  },
  {
    id: 2,
    urlParamName: "Hepatology",
    logo: KarmaIcon,
    text: `Karma`,
    width: "180px",
  },
  {
    id: 3,
    urlParamName: "Gastroenterology",
    logo: FerrariIcon,
    text: `Ferrari`,
    width: "150px",
  },
  {
    id: 5,
    urlParamName: "Neurology",
    logo: BugattiIcon,
    text: `Bugatti`,
    width: "150px",
  },
  {
    id: 6,
    urlParamName: "Dermatology",
    logo: GeometryIcon,
    text: `Geometry`,
    width: "160px",
  },
  {
    id: 7,
    urlParamName: "ClinicalChemistry",
    logo: LamborghiniIcon,
    text: `Bugatti`,
    width: "150px",
  },
  {
    id: 8,
    urlParamName: "Hematology",
    logo: FerrariIcon,
    text: `Ferrari`,
    width: "150px",
  },
  {
    id: 9,
    urlParamName: "Molecular",
    logo: TeslaIcon,
    text: `Bugatti`,
    width: "150px",
  },
  {
    id: 10,
    urlParamName: "Cytology",
    logo: FerrariIcon,
    text: `Ferrari`,
    width: "150px",
  },
];


// export const labEquipment = [
//   {
//     id: 0,
//     name: "Hematology",
//   },
//   {
//     id: 2,
//     name: "Clinichal Chemistry",
//   },
//   {
//     id:3,
//     name:"Molecular Diagnostics",
//   },
//   {
//     id:4,
//     name:"Immunofluorescent (IFA)",
//   },
//   {
//     id:5,
//     name:"ELISA",
//   },
//   {
//     id:6,
//     name:"Chemiluminecents",
//   },
//   {
//     id:7,
//     name:"Immmunoblots",
//   },
//   {
//     id:8,

//   },
// ];
// export const labReagents = [
//   {
//     id: 0,
//     name: "Rhematology",
//   },
//   {
//     id: 2,
//     name: "Hepatology",
//   },
//   {
//     id: 3,
//     name: "Gastroenterology",
//   },
//   {
//     id: 4,
//     name: "Endocrionology",
//   },
//   {
//     id: 5,
//     name: "Neurology",
//   },
//   {
//     id: 6,
//     name: "Dermatology",
//   },
//   {
//     id: 7,
//     name: "ClinicalChemistry",
//   },
//   {
//     id: 8,
//     name: "Hematology",
//   },
//   {
//     id: 9,
//     name: "Molecular",
//   },
//   {
//     id: 10,
//     name: "Cytology",
//   },
// ];

export const categories = [
  {
    id: 1,
    name: "Hospital Products",
    urlParamName: "hospital",
  },
  {
    id: 2,
    name: "Laborotary Products",
    urlParamName: "lab",
  },
  {
    id: 3,
    name: "Microscopes",
    urlParamName: "microscopes",
  },
  {
    id: 4,
    name: "Veterinary Products",
    urlParamName: "vet",
  },
  {
    id: 5,
    name: "Research Products",
    urlParamName: "research",
  },
  {
    id: 6,
    name: "Common Products",
    urlParamName: "commonproducts",
  },
  {
    id: 7,
    name: "Hematology",
    urlParamName: "LE_Hematology",
  },
  {
    id: 8,
    name: "Hematology",
    urlParamName: "LR_Hematology",
  },
  {
    id: 9,
    name: "Clinichal Chemistry",
    urlParamName: "LE_Clinichal Chemistry",
  },
  {
    id: 10,
    name: "Clinichal Chemistry",
    urlParamName: "LR_Clinichal Chemistry",
  },
  {
    id: 11,
    name: "Rhematology",
    urlParamName: "LE_Rhematology",
  },
  {
    id: 12,
    name: "Rhematology",
    urlParamName: "LR_Rhematology",
  },
  {
    id: 13,
    name: "Molecular Diagnostics",
    urlParamName: "LE_Rhematology",
  },
  {
    id: 14,
    name: "Molecular Diagnostics",
    urlParamName: "LR_Rhematology",
  },
  {
    id: 15,
    name: "Immunofluorescent",
    urlParamName: "LE_Immunofluorescent",
  },
  {
    id: 16,
    name: "Immunofluorescent",
    urlParamName: "LR_Immunofluorescent",
  },
  {
    id: 17,
    name: "ELISA",
    urlParamName: "LELISA",
  },
];

