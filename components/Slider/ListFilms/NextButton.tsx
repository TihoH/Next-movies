import { ArrowBigRight } from "lucide-react";
import SwiperInstance from "swiper";

export interface SwiperButtonProps {
  swiperRef: React.RefObject<SwiperInstance | null>; // Define the type for swiperRef
}

const NextButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <button
      onClick={() => swiperRef.current?.slideNext()}
      className="bg-orange-900 text-white py-2 px-4 rounded hover:bg-orange-600 transition"
    >
      <ArrowBigRight />
    </button>
  );
};

export default NextButton;