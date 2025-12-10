import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-2 font-bold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-textcolor hover:text-blue-600 duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
      <iframe
        title="Map Directions"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.810762689687!2d36.87861611461446!3d-1.2876717359905419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13efb0a813ef%3A0x67fd419680769624!2sHospital%20Consumables!5e0!3m2!1sen!2ske!4v1678474322205!5m2!1sen!2ske"
        width="500"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </ul>
  );
};

export default Item;
