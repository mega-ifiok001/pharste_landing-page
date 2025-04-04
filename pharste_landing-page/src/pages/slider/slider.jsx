import React from 'react';
import './slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../asset/apple.png';
import slide_image_2 from '../../asset/apple.png';
import slide_image_3 from '../../asset/apple.png';
import slide_image_4 from '../../asset/apple.png';
import slide_image_5 from '../../asset/apple.png';
import slide_image_6 from '../../asset/apple.png';
import slide_image_7 from '../../asset/apple.png';

function SliderComp() {
    return (
        <div className="container">
            <h1 className="heading">Flower Gallery</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} alt="slide_2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="slide_3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} alt="slide_4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} alt="slide_5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_6} alt="slide_6" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_7} alt="slide_7" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default SliderComp;