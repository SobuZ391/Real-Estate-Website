// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const SwiperSlides = () => {
    return (
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      className='w-[100%] md:w-[80%] lg:w-1/2 rounded-xl '
      >
   <SwiperSlide><img src="/images/prop7.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/prop2.webp" alt=""  /></SwiperSlide>
        <SwiperSlide><img src="/images/prop3.webp" alt=""  /></SwiperSlide>
        <SwiperSlide><img src="/images/prop1.webp" alt=""  /></SwiperSlide>
        <SwiperSlide><img src="/images/prop5.webp" alt=""  /></SwiperSlide>
        <SwiperSlide><img src="/images/prop6.webp" alt=""  /></SwiperSlide>
        <SwiperSlide><img src="/images/prop8.jpg" alt=""  /></SwiperSlide>
        <SwiperSlide><img src="/images/prop2.webp" alt=""  /></SwiperSlide>
        <SwiperSlide><img src="/images/prop3.webp" alt=""  /></SwiperSlide>
        <SwiperSlide><img src="/images/prop1.webp" alt=""  /></SwiperSlide>
        <SwiperSlide><img src="/images/prop7.jpg" alt=""  /></SwiperSlide>
       
      </Swiper>
      
    );
};

export default SwiperSlides;