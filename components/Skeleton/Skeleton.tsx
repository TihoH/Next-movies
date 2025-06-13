import React from "react";

const Skeleton = ({ numberRenderList = 20 }) => {
  return (
    <ul className="flex flex-wrap gap-8">
      {Array.from({ length: numberRenderList }).map((item, index) => (
        <li key={index} className="border h-[300px] w-[214px] rounded-md  bg-gray-400 animate-pulse">
   
        </li>
      ))}
    </ul>
  );
};

export default Skeleton;
