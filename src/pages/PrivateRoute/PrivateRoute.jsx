import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()
    const location=useLocation()
   
    if(loading){
        return <div className="flex flex-col gap-4  w-full">
        <div className="flex flex-col gap-4 w-full">
  <div className="flex gap-4 items-center">
  
    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
    <div className="flex flex-col gap-4">
    <div className="skeleton h-4 w-96"></div>
      <div className="skeleton h-4 w-20"></div>
      <div className="skeleton h-4 w-28"></div>
    </div>
  </div>
  <span className="loading loading-bars loading-lg"></span>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-32 w-full"></div>
</div>
       <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-80"></div>
        <div className="skeleton h-4 w-96"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-32 w-full"></div>
        
      </div>
    }
    if(!user){
        return <Navigate to="/login" state={location?.pathname || "/" } />
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;