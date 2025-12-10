import theater from "../img/theater.jpg";
import laborotaryproducts from "../img/laborotaryproducts.jpg";
// import microscope from "../img/microscope.png";
import vetcow from "../img/vetcow.jpg";

export const heroData = [
  {
    id: 1,
    name: "Hospital Products",
    decp: "All products needed for the hospital enviroment.",
    Link: "/products#hospital",
    imageSrc: theater,
  },
  {
    id: 2,
    name: "Laborotary Products",
    decp: "All laboratory products and support.",
    Link: "/products#laboratory",
    imageSrc: laborotaryproducts,
  },
  {
    id: 3,
    name: "Veternary Products",
    decp: "All laboratory Veternary and support",
    Link: "/products#vet",
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
    id: 1,
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
    name: "Endocrinology",
    urlParamName: "LRA_Endocrinology",
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
    name: "Neurology",
    urlParamName: "LRA_Neurology",
  },
  {
    id: 11,
    name: "Cytology",
    urlParamName: "LRA_Cytology",
  },
];
// export const LRACategories = [
//   {
//     id: 0,
//     name: "LRARheumatology",
//     urlParamName: "LRARheumatology",
//   },
//   {
//     id: 2,
//     name: "LRAHepatology",
//     urlParamName: "LRAHepatology",
//   },
//   {
//     id: 3,
//     name: "LRAGastroenterology",
//     urlParamName: "LRAGastroenterology",
//   },
//   {
//     id: 4,
//     name: "LRAEndocrinology",
//     urlParamName: "LRAEndocrinology",
//   },
// ];
export const LRACategories = [
  {
    id: 1,
    category: "LRA_Rhematology",
    name: "Connective Tissue Diseases",
    urlParamName: "Connective tissue diseases",
  },
  {
    id: 2,
    category: "LRA_Rhematology",
    name: "Systemic lupus erythematosus",
    urlParamName: "Systemic lupus erythematosus",
  },
  {
    id: 3,
    category: "LRA_Rhematology",
    name: "Vasculitis",
    urlParamName: "Vasculitis",
  },
  {
    id: 4,
    category: "LRA_Rhematology",
    name: "Rheumatoid arthritis",
    urlParamName: "Rheumatoid arthritis",
  },
  {
    id: 5,
    category: "LRA_Rhematology",
    name: "Anti-phospholipid syndrome",
    urlParamName: "Anti-phospholipid syndrome",
  },
  {
    id: 6,
    category: "LRA_Hepatology",
    name: "Autoimmune hepatitis",
    urlParamName: "Autoimmune hepatitis",
  },
  {
    id: 7,
    category: "LRA_Hepatology",
    name: "Primary biliary cholangitis",
    urlParamName: "Primary biliary cholangitis",
  },
  {
    id: 8,
    category: "LRA_Hepatology",
    name: "Primary sclerosing cholangitis",
    urlParamName: "Primary sclerosing cholangitis",
  },
  {
    id: 9,
    category: "LRA_Gastroenterology",
    name: "Coeliac disease",
    urlParamName: "Coeliac disease",
  },
  {
    id: 10,
    category: "LRA_Gastroenterology",
    name: "Chronic inflammatory bowel diseases",
    urlParamName: "Chronic inflammatory bowel diseases",
  },
  {
    id: 11,
    category: "LRA_Gastroenterology",
    name: "Autoimmune gastritis/ pernicious anaemia",
    urlParamName: "Autoimmune gastritis/ pernicious anaemia",
  },
  {
    id: 12,
    category: "LRA_Endocrinology",
    name: "Infertility",
    urlParamName: "Infertility",
  },
  {
    id: 13,
    category: "LRA_Endocrinology",
    name: "Diabetes",
    urlParamName: "Diabetes",
  },
  {
    id: 14,
    category: "LRA_Endocrinology",
    name: "Thyroid diseases",
    urlParamName: "Thyroid diseases",
  },
  {
    id: 15,
    category: "LRA_Neurology",
    name: "Paraneoplastic neurological syndromes",
    urlParamName: "Paraneoplastic neurological syndromes",
  },
  {
    id: 16,
    category: "LRA_Neurology",
    name: "Autoimmune encephalitis",
    urlParamName: "Autoimmune encephalitis",
  },
  {
    id: 17,
    category: "LRA_Neurology",
    name: "Other diseases of the central and peripheral nervous system",
    urlParamName: "Other diseases of the central and peripheral nervous system",
  },
  {
    id: 17,
    category: "LRA_Dermatology",
    name: "Autoimmune dermatoses",
    urlParamName: "Autoimmune dermatoses",
  },
];
export const LRAHepatology = [
  {
    id: 1,
    category:"LRA_Hepatology",
    name: "Autoimmune hepatitis",
    urlParamName: "Autoimmune hepatitis",
  },
  {
    id: 2,
    category:"LRA_Hepatology",
    name: "Primary biliary cholangitis",
    urlParamName: "Primary biliary cholangitis",
  },
  {
    id: 3,
    category:"LRA_Hepatology",
    name: "Primary sclerosing cholangitis",
    urlParamName: "Primary sclerosing cholangitis",
  },
];
export const LRAGastroenterology = [
  {
    id: 1,
    category : "LRA_Gastroenterology",
    name: "Coeliac disease",
    urlParamName: "Coeliac disease",
  },
  {
    id: 2,
    category : "LRA_Gastroenterology",
    name: "Chronic inflammatory bowel diseases",
    urlParamName: "Chronic inflammatory bowel diseases",
  },
  {
    id: 3,
    category : "LRA_Gastroenterology",
    name: "Autoimmune gastritis/ pernicious anaemia",
    urlParamName: "Autoimmune gastritis/ pernicious anaemia",
  },
];
export const LRAEndocrinology = [
  {
    id: 1,
    category: "LRA_Endocrinology",
    name: "Infertility",
    urlParamName: "Infertility",
  },
  {
    id: 2,
    category: "LRA_Endocrinology",
    name: "Diabetes",
    urlParamName: "Diabetes",
  },
  {
    id: 3,
    category: "LRA_Endocrinology",
    name: "Thyroid diseases",
    urlParamName: "Thyroid diseases",
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

export const veterenary = [
  {
    id: 1,
    category: "DOGS",
    name: "Anaplasmosis",
    urlParamName: "Anaplasmosis",
  },
  {
    id: 2,
    category: "DOGS",
    name: "Lyme borreliosis",
    urlParamName: "Lyme borreliosis",
  },
  {
    id: 3,
    category: "DOGS",
    name: "Ehrlichiosis",
    urlParamName: "Ehrlichiosis",
  },
  {
    id: 4,
    category: "DOGS",
    name: "Leishmaniasis",
    urlParamName: "Leishmaniasis",
  },
  {
    id: 5,
    category: "DOGS",
    name: "Tick-Borne Profile",
    urlParamName: "Tick-Borne Profile",
  },
  {
    id: 6,
    category: "DOGS",
    name: "Toxoplasmosis",
    urlParamName: "Toxoplasmosis",
  },
  {
    id: 6,
    category: "DOGS",
    name: "Autoantibodies against cell nuclei",
    urlParamName: "Autoantibodies against cell nuclei",
  },
  {
    id: 7,
    category: "CATS",
    name: "Toxoplasmosis",
    urlParamName: "Toxoplasmosis",
  },
  {
    id: 8,
    category: "HORSE",
    name: "Anaplasmosis",
    urlParamName: "Anaplasmosis",
  },
  {
    id: 9,
    category: "HORSE",
    name: "Lyme borreliosis",
    urlParamName: "Lyme borreliosis",
  },
  {
    id: 10,
    category: "HORSE",
    name: "West Nile virus",
    urlParamName: "West Nile virus",
  },
  {
    id: 11,
    category: "HORSE",
    name: "Tick-Borne Profile",
    urlParamName: "Tick-Borne Profile",
  },

  {
    id: 4,
    category: "CAMEL",
    name: "CAMEL",
    urlParamName: "CAMEL",
  },
  {
    id: 5,
    category: "HORSE",
    name: "MOUSE",
    urlParamName: "MOUSE",
  },
  {
    id: 6,
    category: "HORSE",
    name: "RUMINANTS",
    urlParamName: "RUMINANTS",
  },
];
