import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Contact = () => {
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
        <div>
           <div className="grid   max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
			<div className="dark:text-gray-600">Vivamus in nisl metus? Phasellus.</div>
		</div>
		<img src="/images/customer-service.jpg" alt="" className=" object-cover rounded-lg  p-6 h-52 md:h-64" />
	</div>
	<form noValidate="" className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 border-gray-400  border-2  rounded-xl dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3  border-gray-400  border-2  rounded-xl dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3  border-gray-400  border-2  rounded-xl dark:bg-gray-100"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">Send Message</button>
	</form>
</div>
	<div>
	<section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
			<div>
				<h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
				<p className="mt-1 dark:text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
			</div>
			<div>
				<h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
				<p className="mt-1 dark:text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
			</div>
			<div>
				<h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
				<p className="mt-1 dark:text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
			</div>
			<div>
				<h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
				<p className="mt-1 dark:text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
			</div>
		</div>
	</div>
</section>
	</div>
        </div>
    );
};

export default Contact;