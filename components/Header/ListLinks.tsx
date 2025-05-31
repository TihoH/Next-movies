"use client";
import React, { useState } from "react";
import Link from "next/link";
import { headerLinks } from "../types";
import {useGetFetchData} from '../../hooks/useGetFetchData'
import { getGanre } from "@/API/getGanre";


const ListLinks: React.FC = () => {
  const headerLinks: headerLinks[] = [
    {
      name: "Фильмы",
      id: 1,
      activeDropMenu: true,
    },
    {
      name: "Сериалы",
      id: 2,
      activeDropMenu: true,
    },
    { name: "Мультфильмы", id: 3, activeDropMenu: true },
  ];
  const dropMenu = [
    {
      id: 1,
      hoverMenu: useGetFetchData('movie' , getGanre).genres
    },
    {
      id: 2,
      hoverMenu: useGetFetchData('tv' , getGanre).genres
    },
  ];
  const [activeIdHover, setActiveIdHover] = useState<number>(0);

  return (
    <div onMouseLeave={() => setActiveIdHover(0)}>
      <ul className="flex relative gap-2 z-30">
        {headerLinks.map((link) => (
          <li className={`hover:text-white transition ${link.id === activeIdHover ? 'text-white' : ''}`} key={link.id}>
            <Link onMouseMove={() => setActiveIdHover(link.id)} href={"/"}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul
        className={`absolute bg-[#1F1B2D] top-1 -left-1 -right-1 pt-10 z-10  rounded-lg transition ${
          activeIdHover != 0 ? "opacity-100" : "opacity-0"
        } `}
      >
        <div className="py-2  border-t border-gray-700 mt-5 px-2  max-h-[350px] ">
          {dropMenu.map(
            (item) =>
              item.id === activeIdHover && (
                <div key={item.id} className="flex flex-col  flex-wrap max-h-[320px] items-start max-w-[500px]">
                  {item.hoverMenu?.map((dropMenu , index) => (
                    <Link className="hover:text-white   hover:translate-x-4 transition" href={"/"} key={index}> {dropMenu.name.replace(dropMenu.name[0], dropMenu.name[0].toUpperCase())} </Link>
                  ))}
                </div>
              )
          )}
        </div>
      </ul>
    </div>
  );
};

export default ListLinks;
