import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Featured from "../pages/Featured";
import Contact from "../pages/Contact";

// import UserProfile from "../pages/UserProfile";
import Home from './../pages/Home/Home';
import NotFound from "../Shared/NotFound";
import PropertyDetails from "../pages/PropertyDetails";
import PrivateRoute from './../pages/PrivateRoute/PrivateRoute';
import UserProfile from "../pages/UserProfile";
import UpdateProfile from "../pages/UpdateProfile";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/featured',
                element: <PrivateRoute>
                    <Featured/>
                </PrivateRoute>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/UpdateProfile',
                element: <PrivateRoute>
                <UserProfile/>
            </PrivateRoute>
            },
          
            {
                path: "/propertyDetails/:id",
                element: <PrivateRoute>
                    <PropertyDetails/>
                </PrivateRoute>,
              },
        ]
    }
]);

export default router;
