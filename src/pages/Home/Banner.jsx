import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import SwiperSlides from './SwiperSlides';

const Banner = () => {
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
        <>
            <div className="w-[95%] h-[600px] mt-2 mx-auto bg-cover bg-center  rounded-xl flex justify-center flex-col items-start lg:px-28  px-10 gap-7 z-20   ">
                <div className="hidden md:block"></div>

             <div className='w-full flex flex-col  lg:flex-row '>
             <div className=' w-[100%] lg:w-1/2 ' >
              <p className='text-sm text-gray-500' >Luxury Real Estate</p>
              <p className=' text-2xl lg:text-7xl my-4 lg:my-12 text-gray-700'>IT'S TIME <br className='lg:block hidden' /> TO FIND YOUR <br className='lg:block hidden' /> LUXURY HOME</p>
              <p className='lg:text-lg ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br className='lg:block hidden' />sed do eiusmod tempor incid alor the old familer br olfre <br className='lg:block hidden' /> idunt ut labore ellt.</p>
             </div>
              <SwiperSlides/>
             </div>




                
            </div>
            
    <section id="about" className="bg-transparent  w-full m-auto lg:p-32 px-10 py-10  grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10 ">
        <div>
          <img  data-aos='zoom-in' src='/images/about.jpg' alt="" className="reounded-2xl lg:lg-[500] lg:h-[600px]" />
        </div>
        <div className="flex flex-col justify-center items-start  gap-8">
        <h1 data-aos='zoom-in' className="text-red-500" >WHO WE ARE</h1>
        <h1 data-aos='zoom-in' data-aos-delay="200" className="text-black text-[40px] font-semibold leading-10 " >Lorem, ipsum dolor sit amet consectetur . </h1>
        <p data-aos='zoom-in' data-aos-delay='400' className="text-xl text-gray-600 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus alias repellat adipisci, perferendis totam ut provident deleniti. Est, hic autem quia minima alias facere? Nisi magni nostrum dolorum qui numquam in pariatur! Nam neque commodi hic necessitatibus corrupti magnam aliquam aperiam, repudiandae maiores, est esse.</p>
        <div className='' > 
                <button data-aos='zoom-in' data-aos-delay='400' className='bg-red-600 rounded-xl hover:bg-black text-lg p-4 w-full text-white font-semibold cursor-pointer transform hover:scale-110 transition-transform duration-300' >Read More</button>
                </div>
        </div>
        </section>
        {/* form starts from here */}
        <div className='bg-transparent z-10'>
                <div data-aos='zoom-in' id='form' className='light bg-white lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8  rounded-xl '>
                <div className="w-full">
                       <h1 className="text-black text-2xl font-semibold" >Location</h1>
                       <input type="text" placeholder='Enter an address,state,city or pincode'
                       className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]' />
                </div>
                <div className='w-full' >
                <h1 className="text-black text-2xl font-semibold " >TYPE </h1>
                <select name="selectOption" id="selectOption" className='bbg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md '>
                    <option value="" disabled selected>Select Property</option>
                    <option value="Option1">Rentals</option>
                    <option value="Option2">Sales</option>
                    <option value="Option3">Commercial</option>
                </select>
                </div>
               
                <div className='w-full' >
                <h1 className="text-black text-2xl font-semibold " >Category </h1>
                <select name="selectOption" id="selectOption" className='bbg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md '>
                    <option value="" disabled selected>Property Category</option>
                    <option value="Option1">Apartments</option>
                    <option value="Option2">Duples</option>
                    <option value="Option3">Condos</option>
                </select>
                </div>
                <div className='w-full' > 
                <button className='bg-red-600 rounded-xl hover:bg-black text-lg p-4 w-full text-white font-semibold cursor-pointer transform hover:scale-110 transition-transform duration-300' >Submit</button>
                </div>

             </div>
    </div>
        </>
    );
};


export default Banner;