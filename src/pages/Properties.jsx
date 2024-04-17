
import { useEffect, useState } from "react";
import { FaShareAlt, FaPlus, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";






const Properties = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        // Fetch data (replace URL with your data source URL)
        fetch('/blog.json')
          .then(response => response.json())
          .then(data => {
            if (Array.isArray(data.residential_estates)) {
              setProperties(data.residential_estates);
            } else {
              console.error('Data format is incorrect. Expected an array of properties.');
            }
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);
    
      if (properties.length === 0) {
        return <div>Loading...</div>;
      }
    return (
        <div className="h-full ">
        <section id="properties" className="lg:w-[90%] m-auto lg:px-20 px-6 py-5 w-full  flex flex-col justify-center items-start gap-4  " >
            <div className="flex flex-col mt-64 justify-center items-start gap-4">
                <h1 data-aos="zoom-in" className="text-red-500" >PROPERTIES</h1>
                <h1 data-aos="zoom-in" className="text-black text-4xl font-semibold " >Explore the latest</h1>
            </div>
            {/* properties grid start from here */}
            <div id="grid-box" className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 ">
            {Array.isArray(properties) && properties.length > 0 ? (
  properties.map((item, index) => (
    <div
      data-aos='zoom-in'
      data-aos-delay='200'
      key={index}
      className=" rounded-xl w-full m-2 p-2   border-2  "
    >
      <div
        id="image-box"
        className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end"
        style={{ backgroundImage: `url(${item.image})` }}
      >
    <div className="flex justify-between items-end w-full" >
    <div>
      <button className=" px-4 py-2  text-[13px] bg-red-600 text-gray-200 hover:bg-white hover:text-black rounded-3xl   ">Featured</button>
      </div>
      <div className=" ">
         
      <button className=" px-4 py-2  text-[13px] bg-red-600 text-gray-200 hover:bg-white hover:text-black rounded-3xl font-medium ">{item.status}</button>

      </div>
    </div>
    <div className="flex justify-between items-end w-full" >
    <div className="flex justify-start items-center gap-2 " >
      <FaMapMarkerAlt className="sizw-4 text-white " />
      <h1 className="font-semibold glass rounded-xl px-2" >{item.location}</h1> 
    </div>
    </div>
        {/* Add an overlay or other effects as needed */}
      </div>

      <div className="p-4  ">
        <h3 className="text-xl font-semibold text-black ">{item.estate_title}</h3>
        <p className="text-2xl text-red-600 font-bold " > {item.price}</p>
        <p>{item.description}</p>
        
        <p><strong>Area:</strong> {item.area}</p>
        
        <p><strong>Facilities:</strong> {item.facilities.join(', ')}</p>
     <div className="flex justify-between ">
     <Link to={`/propertyDetails/${item.id}`}><button className="btn btn-primary my-2">
          View Property
        </button></Link>
       
        <button className="  border-gray-200 hover:bg-white cursor-pointer transform hover:scale-110 transition-transform duration-300 ">
          <FaHeart className="size-4 text-red-400"/>
        </button>
        <button className="  border-gray-200 hover:bg-white cursor-pointer transform hover:scale-110 transition-transform duration-300 ">
          <FaPlus className="size-4 text-red-400"/>
        </button>
        <button className=" border-gray-200 hover:bg-white cursor-pointer transform hover:scale-110 transition-transform duration-300 ">
          <FaShareAlt className="size-4 text-red-400"/>
        </button>
     </div>
      </div>
    <div  ></div>
    </div>
  ))
) : (
  <p>No properties available</p>
)}
            </div>

        </section>
            
        </div>
    );
};

export default Properties;