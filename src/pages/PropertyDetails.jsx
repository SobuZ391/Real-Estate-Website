import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { Helmet } from "react-helmet";

const PropertyDetails = () => {
    const { id } = useParams();
    const [estate, setEstate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/blog.json`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data from server.');
                }
                const data = await response.json();
                
                // Access the residential_estates array
                const estatesArray = data.residential_estates;
                if (!Array.isArray(estatesArray)) {
                    throw new Error('Estates data is not an array.');
                }
    
                // Convert ID to integer for comparison
                const estateId = parseInt(id, 10);
    
                // Find the estate with the specified ID
                const selectedEstate = estatesArray.find(estate => estate.id === estateId);
                if (!selectedEstate) {
                    throw new Error('Estate not found.');
                }
    
                setEstate(selectedEstate);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, [id]);

    if (loading) {
        return (
            <div className="flex flex-col gap-4">
                <div className="skeleton h-[60vh] w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        );
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
        
        <Helmet>
                <meta charSet="utf-8" />
                <title>Property Details - Greenix Real Estate</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
       
        <div className="flex flex-col  border-2 p-4 rounded-xl m-16" >
        <div id="slide1" className="carousel-item relative w-[80%] h-[50vh] mx-auto    rounded-xl">
    <img  src={estate.image} className=" w-[100%] lg:w-full rounded-xl" />
   </div>
           
         
          
           
            <div className="font-poppins flex flex-col  w-full justify-evenly items-center my-5">
                <div>
                    <h3 className="text-3xl font-semibold">{estate.estate_title}</h3>
                    <p>{estate.description}</p>
                </div>
                <EstateDetailsInfo estate={estate} />
            </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-evenly ">
        <div className="flex flex-col lg:w-[35%] p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
	<div className="flex flex-col w-full">
		<h2 className="text-3xl font-semibold text-center">Customer reviews</h2>
		<div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
			<div className="flex">
				<button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-700">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-700">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-700">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-700">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-400">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
			
			</div>
			<span className="dark:text-gray-600">4 out of 5</span>
		</div>
		<p className="text-sm dark:text-gray-600">861 global ratings</p>
		<div className="flex flex-col mt-4">
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">5 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
					<div className="dark:bg-orange-500 h-4 w-5/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">83%</span>
			</div>
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">4 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
					<div className="dark:bg-orange-500 h-4 w-4/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">67%</span>
			</div>
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">3 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
					<div className="dark:bg-orange-500 h-4 w-3/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">50%</span>
			</div>
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">2 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
					<div className="dark:bg-orange-500 h-4 w-2/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">33%</span>
			</div>
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">1 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
					<div className="dark:bg-orange-500 h-4 w-1/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">17%</span>
			</div>
		</div>
	</div>
    
</div>


     <div className="border-2  mx-auto hidden lg:block " >
     <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className=" w-[90%] border-2 rounded-xl  lg:w-96 h-96">
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
     </div>
        </div>
        
        </>
    );
};

const EstateDetailsInfo = ({ estate }) => (
    <div className="text-xl glass  border-2 p-2 mt-4 rounded-xl text-black bg-gray-300 grid lg:space-y-3 lg:w-3/6">
       <p> <InfoItem label="Segment" value={estate.segment_name} color="green" /> </p>
       <p className="text-red-600" ><InfoItem  label="Price" value={`${estate.price}`} color="blue" /></p>
       <p> <InfoItem label="Status" value={estate.status} color="yellow" /></p>
       <p><InfoItem label="Area" value={`${estate.area} sq ft`} color="red" /></p>
       <p> <InfoItem label="Location" value={estate.location} color="pink" /></p>
       <p> <InfoItem label="Facilities" value={estate.facilities.join(', ')} color="accent" /></p>
    </div>
);

const InfoItem = ({ label, value, color }) => (
    <p >
        <span className="font-semibold" >{label}:</span>
        <span className={`px-2   font-medium rounded-xl bg-${color}-300`}>{value}</span>
    </p>
);

export default PropertyDetails;
