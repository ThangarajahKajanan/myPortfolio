import React from "react";
import { Triangle } from "react-loader-spinner";

const PreLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  z-50">
      <div className="flex flex-col items-center space-y-4">
        <Triangle
          visible={true}
          height={80}
          width={80}
          color="#a21caf"
          ariaLabel="triangle-loading"
        />
        <p className=" text-cyan-700 text-lg animate-bounce">Loading...</p>
      </div>
    </div>
  );
};

export default PreLoader;