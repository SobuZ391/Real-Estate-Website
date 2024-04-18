import PopularAreas from "./PopularAreas";
import {Helmet} from "react-helmet";


const Featured = () => {
    return (
        <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Feature - Greenix Real Estate</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
          <PopularAreas/>
        </div>
    );
};

export default Featured;