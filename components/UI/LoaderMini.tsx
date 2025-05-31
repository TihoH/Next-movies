import React from "react";

const LoaderMini = () => {
  return (
    <div className="absolute z-50 right-0 translate-y-[-50%] top-[50%] mr-2 flex items-center justify-center h-20">
      <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoaderMini;
