import { SwiperSlide } from "swiper/react";
import { SwiperContainer, ImgSlide } from './style'
import slide01 from '../../assets/images/slide01.jpg'
import slide02 from '../../assets/images/slide02.jpg'
import slide03 from '../../assets/images/slide03.jpg'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, {
  EffectFade,Navigation,Pagination
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([EffectFade,Navigation,Pagination]);

export const Slide = () => {
  return (
    <SwiperContainer spaceBetween={30} effect={'fade'} navigation={true}>
      <SwiperSlide>
        <ImgSlide src={slide01} />
      </SwiperSlide>
      <SwiperSlide>
        <ImgSlide src={slide02} />
      </SwiperSlide>
      <SwiperSlide>
        <ImgSlide src={slide03} />
      </SwiperSlide>
    </SwiperContainer>
  );
};