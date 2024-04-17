import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { service } from "./service";



const Services = () => {
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
        <div className="pb-20">
        <section className="bg-red-100 lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center  lg:px-20 px-6 py-20 gap-10">
        <div className="flex flex-col justify-center items-start gap-4 " >
            <h1 data-aos='zoom-in' className="text-red-500" >Our Services</h1>
            <h1 data-aos='zoom-in' className="text-black text-[40px] font-semibold leading-10 " >Top real estate <br /><br /> services available</h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
            {
                service.map((item,index)=>(
                    <div data-aos="zoom-in" data-aos-delay='200' key={index} className="bg-white h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer " >
                        <div className="p-6 rounded-full bg-red-200">
                        <item.icon className="text-red-600 size-10 transform hover:scale-110 transition-transfrom duration-300 cursor-pointer"/>
                        </div>
                        <h1 className="text-black text-[22px] font-semibold " >{item.title}</h1>
                        <p className="text-lg text-slate-700 " >{item.description}</p>
                        <button className="border-b-2 border-red-600 text-red-600 font-semibold">Read More..</button>
 
                        
                    </div>
                ))
            }
        </div>

        </section>
            
        </div>
    );
};

export default Services;