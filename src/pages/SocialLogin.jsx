import React from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const{googleLogin,githubLogin}=useAuth()


    //navigate systems
    const navigate =useNavigate()
    const location=useLocation()
    const from =location?.state|| '/'


    const hanldeSocialLogin=socialProvider=>{
        socialProvider()
        .then(result =>{
            if(result.user){
                navigate(from)
                
            }
        })
    }

    return (
        <>
           <div className='flex gap-3 my-5 justify-center items-center'>
                            <button className='btn'onClick={()=>hanldeSocialLogin(googleLogin)}>
                                <FaGoogle />Google
                            </button>
                            <button className='btn' onClick={()=>hanldeSocialLogin(githubLogin)}>
                                <FaGithub />Github
                            </button>
                           
                        </div>
        </>
    );
};

export default SocialLogin;