import  { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css'

const PopularAreas = () => {
       // Initialize AOS in the useEffect hook when the component mounts
       useEffect(() => {
        AOS.init({
            offset: 200, // Animation start offset (in pixels)
            duration: 800, // Duration of the animation (in milliseconds)
            easing: 'ease-in-sine', // Easing function for the animation
            delay: 100, // Delay before starting the animation (in milliseconds)
        });
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className='bg-transparent ' >
        <section className='bg-red-100 lg:w-[90%]  my-4 w-full h-fit  m-auto bg-cover bg-center flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20 rounded-xl'>
        <div id='top' className='w-full grid lg:grid-cols3 grid-cols-1 justify-center items-center gap-8' >
            <div>
                <h1 data-aos='zoom-in' className='text-red-500' >POPULAR AREAS </h1>
                <h1 data-aos='zoom-in' className='text-black text-[40px] font-semibold leading-10 mt-4 ' >Explore most <br /> <br /> popular areas</h1>
            </div>
            <div className='grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6  ' >
                <div data-aos='zoom-in' data-aos-delay='400' style={{backgroundImage:`url('/images/area1.jpg')`}} className='h-[400px] bg-cover bg-center rounded-xl '></div>
                <div data-aos='zoom-in' data-aos-delay='400' style={{backgroundImage:`url('/images/area2.jpg')`}} className='h-[400px] bg-cover bg-center rounded-xl '></div>
                <div data-aos='zoom-in' data-aos-delay='400' style={{backgroundImage:`url('/images/area3.jpg')`}} className='h-[400px] bg-cover bg-center rounded-xl '></div>
            </div>
        </div>
        <div id='bottom' className='w-full   grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-start gap-6' >
        <div data-aos='slide-up' data-aos-delay="200"  className='flex justify-center lg:items-center gap-8 w-full' >
            <h1 className='text-black text-7xl font-semibold ' >5K</h1>
            <h1>ACTIVE <br /> <br /> LISTINGS</h1>
        </div>
        <div data-aos="slide-up" data-aos-delay="200"  className='flex justify-center lg:items-center gap-8 w-full' >
            <h1 className='text-black text-7xl font-semibold ' >5K</h1>
            <h1>ACTIVE <br /> <br /> LISTINGS</h1>
        </div>
        <div data-aos="slide-up" data-aos-delay="200"  className='flex  justify-center lg:items-center gap-8 w-full' >
            <h1 className='text-black text-7xl font-semibold ' >5K</h1>
            <h1>ACTIVE <br /> <br /> LISTINGS</h1>
        </div>
</div>
        </section>
            
        </div>
    );
};

export default PopularAreas;