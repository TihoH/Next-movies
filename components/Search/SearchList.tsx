import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import ListFilmHoverDescription from "../Slider/ListFilms/ListFilmHoverDescription";
import { IlistItem } from "@/types/types";
import { useGetGanre } from "@/hooks/useGetGanre";

interface SearchListProps {
  ListSearchData: IlistItem[];
  setActiveSearch: (arg0: boolean) => void
}


const SearchList: FC<SearchListProps> = ({ ListSearchData , setActiveSearch}) => {
      const ganre = useGetGanre("movie");

  const showPopupDetailsFilm = () => {

  }

  return (
    <ul className="z-40 relative grid grid-cols-6 gap-5 p-2 pb-[30px] ">
      {ListSearchData?.map((item , index) => (
        <li key={index} className="overflow-hidden  transition-all cursor-pointer text-gray-300 rounded-md hover:border-white">
          {" "}
          <Link className="group " href={`/pageFilm/${item.id}`} onClick={ () => setActiveSearch(false) }>
            <div className="relative">
              <Image
                alt="poster image"
                className="duration-700 rounded-md border border-green-900 hover:opacity-50 group-hover:border-white"
                width={300}
                height={450}
                src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
              />
              <ListFilmHoverDescription
                listItem={item}
                ganre={ganre}
                isHover={false}
                showPopupDetailsFilm={showPopupDetailsFilm}
                isActiveDescription={false}             />
            </div>
            <h5 className="mt-1 text-sm group-hover:text-green-700">
              {item.title}
            </h5>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchList;
