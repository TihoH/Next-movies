"use client";
import { ListFilmProps } from "@/types/types";
import React from "react";
import SliderList from "./Slider/ListFilms/SliderList";
import Popup from "./Popups/Popup";
import MoreDetailsFilm from "./MoreDetailsFilm";

const ListFilm: React.FC<ListFilmProps> = ({ data, genres }) => {
  return (
    <div className="relative w-full ">
      <SliderList dataSlider={data} genres={genres} />
      <Popup>
        <MoreDetailsFilm />
      </Popup>
    </div>
  );
};

export default ListFilm;
