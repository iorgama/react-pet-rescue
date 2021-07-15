import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperContainer = styled(Swiper)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  div.swiper-button-prev,
  div.swiper-button-next {
    color: ${props => props.theme.palette.secondary};
  }
`

export const SwiperSlideItem = styled(SwiperSlide)`
  background-color: red;
`

export const ImgSlide = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
