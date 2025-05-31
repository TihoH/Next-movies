import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#100E19]">
      <div className="flex items-center justify-center h-full">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-blue-600 text-lg font-medium">Загрузка...</p>
      </div>
    </div>
  );
};

export default Loader;
