"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import NextButton from "./NextButton";
import PrevBtn from "./PrevButton";
import Skeleton from "@/components/Skeleton/Skeleton";
import { IlistItem } from "@/types/types";
import CardItem from "@/components/PageCategories/CardItem";

const SliderList: FC<any> = ({ dataSlider, genres , type }) => {
  const swiperRef = useRef<any>(null);
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
        className=" w-full relative swiper-listFilm "
      >
        {dataSlider?.map((listItem: IlistItem) => (
          <SwiperSlide
            key={listItem.id}
            className="overflow-hidden group transition-all cursor-pointer text-gray-300 rounded-md hover:border-white"
          >
            <CardItem cardItem={listItem} genres={genres} type={type} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderList;
