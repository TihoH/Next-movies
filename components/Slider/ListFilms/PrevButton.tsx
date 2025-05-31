
import { ArrowBigLeft } from "lucide-react";
import { SwiperButtonProps } from "./NextButton";

const PrevButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <button
       onClick={() => swiperRef.current?.slidePrev()}
      className="bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-600 transition"
    >
      <ArrowBigLeft />
    </button>
  );
};

export default PrevButton;