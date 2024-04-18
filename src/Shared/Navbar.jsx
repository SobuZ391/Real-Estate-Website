import  {   } from 'react';
import {  Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';



const Menus = () => {
    const links = [ 'About', 'Featured', 'Contact','UserProfile'];
    return (
        <>
            {
                links.map(link => <li key={link}>
                    <Link to={`/${link}`} className="btn text-lg  btn-ghost">{link}</Link>
                </li>)
            }
        </>
    )
}
const NavBar = () => {
   
    const {logout,user}=useAuth();
    return (
        <>
            <div className="navbar container mx-auto rounded-xl h-fit bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className='btn text-lg  btn-ghost' >Home</Link>
                            <Menus />
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost  font-bold lg:w-[100%]   w-[70%] lg:text-3xl">
                    <img className='w-16 h-14 hidden lg:block' src="/public/images/office-building-logo-design-real-estate-logo_695276-1674.avif" alt="" />Greenix Real Estate</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center px-1">
                    <Link className='btn text-lg  btn-ghost' to='/' >Home</Link>
                        <Menus />
                    </ul>
                </div>


                {/* avatar part  */}
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ">
                                    <img  src={user?.photoURL || '/images/client3.png'} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName ||'user name not found'}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logout}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                         <>  <Link to='/login'>
                                <button className="btn lg:btn-outline  btn-sm  btn-ghost">Login</button>
                            </Link>
                            <Link to='/register'>
                                <button className="btn btn-sm lg:btn-outline m-2 btn-ghost">Register</button>
                            </Link>

                            </> 
                    }
                   
                </div>
            </div>
        </>
    );
};

export default NavBar;