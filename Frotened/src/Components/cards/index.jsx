import React from "react";

const Cards = ({ title, description, image}) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={title}
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <h3 className=""></h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      
    </div>
  );
};

export default Cards;
