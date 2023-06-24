import theater from "../img/theater.jpg";
import laborotaryproducts from "../img/laborotaryproducts.jpg";
// import microscope from "../img/microscope.png";
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
    
  },
  {
    id: 2,
    name: "Clinichal Chemistry",
    urlParamName: "LE_Clinichal Chemistry",
    
  },
  {
    id: 3,
    name: "Molecular Diagnostics",
    urlParamName: "LE_Molecular Diagnostics",
    
  },
  {
    id: 4,
    name: "Immunofluorescent",
    urlParamName: "Immunofluorescent",
    
  },
  {
    id: 5,
    name: "ELISA",
    urlParamName: "ELISA",
    
  },
  {
    id: 6,
    name: "Chemiluminecents",
    urlParamName: "Chemiluminecents",
    
  },
  {
    id: 7,
    name: "Immmunoblots",
    urlParamName: "Immmunoblots",
    
  },
  // {
  //   id: 8,
  //
  //
  //   
  // },
];
export const labReagents = [
  {
    id: 0,
    name: "Rhematology",
    urlParamName: "LRA_Rhematology",
  },
  {
    id: 2,
    name: "Hepatology",
    urlParamName: "LRA_Hepatology",
  },
  {
    id: 3,
    name: "Gastroenterology",
    urlParamName: "LRA_Gastroenterology",
  },
  {
    id: 5,
    name: "Neurology",
    urlParamName: "LRA_Neurology",
  },
  {
    id: 6,
    name: "Dermatology",
    urlParamName: "LRA_Dermatology",
  },
  {
    id: 7,
    name: "ClinicalChemistry",
    urlParamName: "LRA_ClinicalChemistry",
  },
  {
    id: 8,
    name: "Hematology",
    urlParamName: "LRA_Hematology",
  },
  {
    id: 9,
    name: "Molecular",
    urlParamName: "LRA_Molecular",
  },
  {
    id: 10,
    name: "Cytology",
    urlParamName: "LRA_Cytology",
  },
];
export const LRARheumatology = [
  {
    id: 1,
    name: "Connective tissue diseases",
    urlParamName: "Connective tissue diseases",
  },
  {
    id: 2,
    name: "SLE",
    urlParamName: "Systemic lupus erythematosus",
  },
  {
    id: 3,
    name: "Vasculitis",
    urlParamName: "Vasculitis",
  },
  {
    id: 4,
    name: "Rheumatoid arthritis",
    urlParamName: "Rheumatoid arthritis",
  },
  {
    id: 5,
    name: "Anti-phospholipid syndrome",
    urlParamName: "Anti-phospholipid syndrome",
  },
];
export const LRAHepatology = [
  {
    id: 1,
    name: "Autoimmune hepatitis",
    urlParamName: "Autoimmune hepatitis",
  },
  {
    id: 2,
    name: "Primary biliary cholangitis",
    urlParamName: "Primary biliary cholangitis",
  },
  {
    id: 1,
    name: "Primary biliary cholangitis",
    urlParamName: "Primary biliary cholangitis",
  },
];

export const labGen = [
  {
    id: 1,
    name: "Centrifuges",
    urlParamName: "centrifuges",
  },
  {
    id: 2,
    name: "Shakers",
    urlParamName: "shakers",
  },
  {
    id: 3,
    name: "freezers",
    urlParamName: "freezers",
  },
  {
    id: 4,
    name: "Fridges",
    urlParamName: "fridges",
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
    name: "Clinichal Chemistry",
    urlParamName: "LE_Clinichal Chemistry",
  },
  {
    id: 9,
    name: "Rhematology",
    urlParamName: "LE_Rhematology",
  },
];

