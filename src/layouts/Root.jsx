import { Outlet } from "react-router-dom";
import Navbar from './../Shared/Navbar';
import Footer from "../Shared/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto">
                <Outlet></Outlet>
                <Footer/>
            </div>
        </div>
    );
};

export default Root;