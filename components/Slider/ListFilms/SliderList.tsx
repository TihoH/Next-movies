"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import Link from "next/link";
import NextButton from "./NextButton";
import PrevBtn from "./PrevButton";
import ListFilmHoverDescription from "./ListFilmHoverDescription";
import Image from "next/image";
import Skeleton from "@/components/Skeleton/Skeleton";
import { useGetGanre } from "@/hooks/useGetGanre";

const SliderList: FC<any> = ({ dataSlider, showPopupDetailsFilm }) => {
  const swiperRef = useRef<any>(null);
  const ganre = useGetGanre("movie");
  

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Skeleton numberRenderList={5} />;

  return (
    <>
      <div className="flex space-x-4 mb-4 absolute -top-[58px] right-0 z-40">
        <PrevBtn swiperRef={swiperRef} />
        <NextButton swiperRef={swiperRef} />
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        modules={[Pagination]}
        className="h-auto relative swiper-listFilm"
      >
        {dataSlider?.map((listItem) => (
          <SwiperSlide
            key={listItem.id}
            className="overflow-hidden transition-all cursor-pointer text-gray-300 rounded-md hover:border-white"
          >
           <Link className="group " href={`/pageFilm/${listItem.id}`}>
                <div className="relative">
                  <Image
                    alt="poster image"
                    className="duration-700 rounded-md border border-green-900 hover:opacity-50 group-hover:border-white"
                    width={300}
                    height={450}
                    src={`https://image.tmdb.org/t/p/w342${listItem.poster_path}`}
                  />
                  <ListFilmHoverDescription
                    listItem={listItem}
                    showPopupDetailsFilm={showPopupDetailsFilm}
                    ganre={ganre}
                  />
                </div>
                <h5 className="mt-1 group-hover:text-green-700">
                  {listItem.title}
                </h5>
              </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderList;
