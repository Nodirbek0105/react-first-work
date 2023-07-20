import React from 'react'
import Header from '../header/header'
import "../../index.scss"
import { Outlet } from 'react-router-dom'

export default function B5() {
    return (
        <>

            <Header />
            <Outlet />
            <h2 className='text-center'><a className='text-black-50 text-decoration-none' href="https://react1-nodirbek0105.netlify.app">Creator NNN</a></h2>
        </>
    )
}
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={2}
//       onSlideChange={(swiper) => console.log(swiper)}
//       onSwiper={(swiper) => console.log(swiper)}
//       slideToClickedSlide={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide slideclass='swiper-slide'>Slide 1</SwiperSlide>
//       <SwiperSlide slideclass='swiper-slide'>Slide 2</SwiperSlide>
//       <SwiperSlide slideclass='swiper-slide'>Slide 3</SwiperSlide>
//       <SwiperSlide slideclass='swiper-slide'>Slide 4</SwiperSlide>
//       <SwiperSlide slideclass='swiper-slide'>Slide 5</SwiperSlide>
//       <SwiperSlide slideclass='swiper-slide'>Slide 6</SwiperSlide>
//       <SwiperSlide slideclass='swiper-slide'>Slide 7</SwiperSlide>
//       <SwiperSlide slideclass='swiper-slide'>Slide 8</SwiperSlide>
//       <SwiperSlide slideclass='swiper-slide'>Slide 9</SwiperSlide>
//       <SwiperSlide slideclass='swiper-slide'>Slide 10</SwiperSlide>
//       <SwiperSlide useswiper="swiper-slide" slideclass='swiper-slide'>Slide 11</SwiperSlide>
//     </Swiper>
//   );
// };
