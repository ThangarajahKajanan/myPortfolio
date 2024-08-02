import React from 'react';




const LogoCard = ({ logoSrc, logoAlt, title }) => {
  return (
    <div className="max-w-xs w-full rounded-lg overflow-hidden  shadow-md text-gray-700 hover:text-cyan-600  transform transition duration-300 hover:scale-105 hover:shadow-xl relative">
      <div className="absolute inset-0 bg-whiteC  transition-opacity duration-300"></div>
      <div className="flex justify-center items-center  h-36 relative z-10">
        <img className="h-20" src={logoSrc} alt={logoAlt} />
      </div>
      <div className="px-6 py-3 relative z-10  bg-gray-50">
        <div className="font-semibold text-xs sm:text-base mb-2 ">{title}</div>
      </div>
    </div>
  );
};
export default LogoCard; 
