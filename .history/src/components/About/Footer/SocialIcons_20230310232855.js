import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-textcolor">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-textColor mx-1.5 text-xl hover:text-Main hover:bg-teal-500
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
