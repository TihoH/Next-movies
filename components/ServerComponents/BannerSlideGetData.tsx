import { getMovieListsByType } from '@/API/getMovieListsByType';
import BannerSlide from '@/components/Slider/HomeSlider/BannerSlide';
import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';

const BannerSlideGetData = async() => {
    const data = await getMovieListsByType( "movie"  , "upcoming")
    
    return (
        <div>
            <BannerSlide data={data.results} />
        </div>
    );
};

export default BannerSlideGetData;