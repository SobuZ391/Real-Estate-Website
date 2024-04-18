
import Banner from "./Banner";
import Properties from "../Properties";
import Services from "../Services";
import Client from "../Client/Client";
import {Helmet} from "react-helmet";




const Home = () => {
   
        return (
            <>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Home-Greenix Real Estate</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
               
               <Banner />
                <Properties/>
                <Services/>
                 <Client/>
               
            </>
        );
    };
    

export default Home;