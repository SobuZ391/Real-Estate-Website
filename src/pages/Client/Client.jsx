
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

import { FaStar } from 'react-icons/fa';
import { client } from './clients';

const Client = () => {
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
        <div  >
        <section className='lg:w-[95%] border-y-2 my-2  w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-20 px-6 py-20 gap-20'>
        <div className='flex flex-col justify-center items-start gap-4'>
        <h1 data-aos="zoom-in" className='text-red-500 ' >OUR CLIENTS</h1>
        <h1 data-aos="zoom-in" className='text-black font-semibold leading-10 text-4xl' >What our clients <br /> <br /> saying about us</h1>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full' > 
        {
            client.map((item,index)=>(
                <div data-aos="zoom-in" data-aos-delay="200" key={index} className='bg-white hocer:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full'>
                    <div className='flex justify-start items-center w-full gap-4 '>
                    <img src={item.image} alt="" className='w-[70px] transform hover:scale-110 transition-transform duration'/>
                    <div className='flex flex-col justify-center items-start gap-1' >
                        <h1 className='text-xl text-black font-semibold ' >{item.name}</h1>
                        <h1 className='text-slate-600 ' >{item.text}</h1>
                    </div>
                    </div>
                    <p className='text-md text-justify text-slate-600'>{item.feedback}</p>
                    <div className='flex justify-start items-start gap-2 w-full' >
                        <FaStar className='size-4 text-yellow-400'/>
                        <FaStar className='size-4 text-yellow-400'/>
                        <FaStar className='size-4 text-yellow-400'/>
                        <FaStar className='size-4 text-yellow-400'/>
                        <FaStar className='size-4 text-yellow-400'/>
                    </div>
                </div>
            ))
        }
        </div>

        </section>
            
        </div>
    );
};

export default Client;