'use client'
import { MonitorPlay } from "lucide-react";
import React, { FC } from "react";

interface BTNFavoritesProps {
  text: string;
  isHover?: boolean;
  className?: string;
}

const BTNFavorites: FC<BTNFavoritesProps> = ({ isHover = true, text, className }) => {
  
  const addFavorites = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
  };
  return (
    <div
      onClick={(e) => addFavorites(e)}
      className={` ${className} ${
        isHover
          ? "group/groupHoverFavorites hover:bg-baseGreen flex justify-end "
          : "bg-baseGreen text-center text-white flex justify-center hover:bg-green-900"
      } cursor-pointer overflow-hidden mb-2 w-full rounded-md py-2  transition  items-center gap-2 font-thin   `}
    >
      <span
        className={` ${
          isHover
            ? "translate-x-[180px]  group-hover/groupHoverFavorites:translate-x-[-20px] duration-500 text-[14px]"
            : "text-white"
        } `}
      >
        {text}
      </span>
      <MonitorPlay className=" text-yellow-500 group-hover/groupHoverFavorites:-translate-x-5 duration-500" />
    </div>
  );
};

export default BTNFavorites;
