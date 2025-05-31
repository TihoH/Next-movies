import React from "react";

const Skeleton = ({ numberRenderList = 5 }) => {
  return (
    <ul className="flex gap-8">
      {Array.from({ length: numberRenderList }).map((item, index) => (
        <li key={index} className="border h-[300px] w-[300px] rounded-md  bg-gray-400 animate-pulse">
   
        </li>
      ))}
    </ul>
  );
};

export default Skeleton;
