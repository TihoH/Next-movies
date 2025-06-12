import useFilmHoverDescription from "@/store/useFilmHoverDescription";
import React, { FC } from "react";

interface PopupProps {
  children: React.ReactNode;
}

const Popup: FC<PopupProps> = ({
  children,
}) => {
  const isActivePopup = useFilmHoverDescription(store => store.isActivePopup)
  const setIsActivePopup = useFilmHoverDescription(store => store.setIsActivePopup)
  
  if (!isActivePopup) {
    return;
  }

  const closePopup = () => {
    setIsActivePopup(false);
    // setDataDetailsFilm("");
  };

  return (
    <div
      className={`pt-[100px] fixed top-0 bottom-0 left-0 right-0 overflow-y-auto bg-black/65 z-50 flex justify-center items-center text-black`}
    >
      <div className="relative w-[1000px] min-h-[300px]  bg-black/70  rounded-md">
        {children}

        <button
          className="group/hoverCloseBtn rounded-md text-white absolute overflow-hidden top-[-50px] right-[0px] cursor-pointer border border-gray-500 py-2 px-8"
          onClick={() => closePopup()}
        >
          <span className="relative z-50">Закрыть</span>
          <span className="group-hover/hoverCloseBtn:translate-x-[-100%] duration-500 h-[50px] w-[105%] right-[-106%] top-0  absolute bg-yellow-500/90 z-40"></span>
        </button> 
      </div>
    </div>
  );
};

export default Popup;
