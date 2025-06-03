"use client";
import { ListFilmProps } from "@/types/types";
import React, { useEffect, useState } from "react";
import SliderList from "./Slider/ListFilms/SliderList";
import Popup from "./Popups/Popup";
import MoreDetailsFilm from "./MoreDetailsFilm";
import { getFilmById } from "@/API/getFilmById";
import { getTrailer } from "@/API/getTrailer";


const ListFilm: React.FC<ListFilmProps> = ({ data }) => {

  const [isActivePopupMoreDetailsFilm, setIsActivePopupMoreDetailsFilm] = useState(false);
  const [idMoreDetailsFilm, setIdMoreDetailsFilm] = useState<string>('');
  const [dataDetailsFilm, setDataDetailsFilm] = useState({});
  const [dataVideoDetailsFilm, setDataVideoDetailsFim] = useState([]);

  const showPopupDetailsFilm = (item: { id: string }) => {
    setIdMoreDetailsFilm( item.id );
    setIsActivePopupMoreDetailsFilm(true);
  };

  async function getData() {
    try {
      const data = await getFilmById(idMoreDetailsFilm, "movie");
      setDataDetailsFilm(data);
      const dataVideo = await getTrailer(idMoreDetailsFilm, "movie");
      const trailer = dataVideo.results.find( (video) => video.type === "Trailer" );
      if (trailer) {
        setDataVideoDetailsFim(trailer.key);
      }
    } catch (error) {
      console.log('ошибка ')
    }
  }

  useEffect(() => {
    if (idMoreDetailsFilm) {
      getData();
    }
  }, [idMoreDetailsFilm]);

  return (
    <div className="relative w-full ">
      <SliderList
        dataSlider={data}
        showPopupDetailsFilm={showPopupDetailsFilm}
      />
      <Popup
        isActivePopup={isActivePopupMoreDetailsFilm}
        setIsActivePopup={setIsActivePopupMoreDetailsFilm}
        setDataDetailsFilm={setDataDetailsFilm}
      >
        <MoreDetailsFilm
          dataDetailsFilm={dataDetailsFilm}
          dataVideoDetailsFilm={dataVideoDetailsFilm}
        />
      </Popup>
    </div>
  );
};

export default ListFilm;
