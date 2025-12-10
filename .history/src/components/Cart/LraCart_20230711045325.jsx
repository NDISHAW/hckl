import React from "react";

const LraCart = ({ item }) => {
 const { category, subCategory, Method, subcollectionData } = item.data || {};

 if (!category || !subCategory || !Method || !subcollectionData) {
   return null; // or display an error message
 }

 return (
   <div>
     <h3>Category: {category}</h3>
     <h4>Subcategory: {subCategory}</h4>
     <p>Method: {Method}</p>
     <ul>
       {subcollectionData.map((subItem) => (
         <li key={subItem.Format}>
           Format: {subItem.Format}, lgClass: {subItem.lgClass}
         </li>
       ))}
     </ul>
   </div>
 );
};

export default LraCart;
