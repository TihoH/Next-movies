"use client";
import React, { useState } from "react";
import Link from "next/link";
import { dropMenu, IHeaderLinks } from "@/types/types";

import { getGanre } from "@/API/getGanre";
import { useGetFetchDataGanres } from "@/hooks/useGetFetchDataGanres";
import { usePathname } from "next/navigation";

const ListLinks: React.FC = () => {
  const movieGenres = useGetFetchDataGanres("movie", getGanre);
  const tvGenres = useGetFetchDataGanres("tv", getGanre);
  const pathnameType = usePathname().split("/")[2];


  const headerLinks: IHeaderLinks[] = [
    {
      name: "Фильмы",
      id: 1,
      activeDropMenu: true,
      type: "movie",
    },
    {
      name: "Сериалы",
      id: 2,
      activeDropMenu: true,
      type: "tv",
    },
    { name: "Мультфильмы", id: 3, type: "cartoon", activeDropMenu: true , typeId: "мультфильм"},
  ];
  const dropMenu: dropMenu[] = [
    {
      id: 1,
      hoverMenu: movieGenres,
      type: "movie",
    },
    {
      id: 2,
      hoverMenu: tvGenres,
      type: "tv",
    },
  ];
  const [activeIdHover, setActiveIdHover] = useState<number>(0);

  return (
    <div onMouseLeave={() => setActiveIdHover(0)}>
      <ul className="flex relative gap-2 z-50 ">
        {headerLinks.map((link) => (
          <li
            key={link.id}
            className={`hover:text-white transition ${
              link.type === pathnameType ? "text-white font-bold" : ""
            }`}
          >
            <Link
              onMouseEnter={() => setActiveIdHover(link.id)}
              href={`/pageCategories/${link.type}/${link.id != 3 ? 'all' : link.typeId}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul
        className={`absolute bg-[#1F1B2D] top-1 -left-1 -right-1 pt-10 z-30  border-b-2  rounded-lg transition ${
          activeIdHover != 0 ? "opacity-100" : "opacity-0 pointer-events-none"
        } `}
      >
        <div className="py-2  border-t border-gray-700 mt-5 px-2  max-h-[350px] ">
          {dropMenu.map(
            (item) =>
              item.id === activeIdHover && (
                <div
                  key={item.id}
                  className="flex flex-col  flex-wrap max-h-[320px] items-start max-w-[500px]"
                >
                  {item.hoverMenu?.map((dropMenu, index) => (
                    <Link
                      className="hover:text-white   hover:translate-x-4 transition"
                      href={`/pageCategories/${item.type}/${dropMenu.name}`}
                      key={index}
                      onClick={() => setActiveIdHover(0)}
                    >
                      {" "}
                      {dropMenu.name.charAt(0).toUpperCase() +
                        dropMenu.name.slice(1)}{" "}
                    </Link>
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
