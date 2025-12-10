import React from "react";

const LraCart = ({ item }) => {
  const { category, subCategory, Method, subcollectionData } = item.data;

  return (
    <div>
      <h3>Category: {category}</h3>
      <h4>Subcategory: {SubCartegory}</h4>
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
