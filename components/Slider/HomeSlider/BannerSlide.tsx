"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useGetGanre } from "@/hooks/useGetGanre";
import { sortGenres } from "@/utils/sortGanre";

const BannerSlide = ({ data }) => {
  const ganre = useGetGanre("movie");

  if (!ganre) return null; // пока жанры не загрузились
  
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      loop={true}
      speed={1500}
      centeredSlides={true}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="h-[600px] rounded-md"
    >
      {data?.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="max-h-[600px] flex items-center relative max-w-[1200px]"
        >
          <div className="group/hoverDescription absolute transition-all h-[60px] hover:h-[120px] cursor-pointer z-50 pl-[150px] top-0 w-full shadow-md px-6 border-b py-4 border-gray-500 text-xl bg-opacity-55 bg-black">
            <p className="text-2xl">{slide.title}</p>
            <div className="hidden group-hover/hoverDescription:flex flex-col">
              <p>
                <span className="text-gray-400">Дата релиза: </span>
                {slide.release_date}
              </p>
              <p>
                <span className="text-gray-400">Жанр: </span>
                {sortGenres(slide.genre_ids, ganre)}
              </p>
            </div>
          </div>
          <Image
            width={1200}
            height={600}
            src={`https://image.tmdb.org/t/p/w1280/${slide.backdrop_path}`}
            className="rounded-lg z-30"
            alt="banner preview"
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlide;
