import  { useState } from 'react';
import UpdateProfile from '../pages/UpdateProfile';
import useAuth from '../Hooks/useAuth';

const UserProfile = () => {
    const { user } = useAuth();
    const [nameInput, setNameInput] = useState(user ? user.displayName : '');
    const [photoURLInput, setPhotoURLInput] = useState(user ? user.photoURL : '');

    // This function updates the user data in the state
    const handleChangeUserData = (newName, newPhotoURL) => {
        setNameInput(newName);
        setPhotoURLInput(newPhotoURL);
        setNameInput("")
    };
    return (
        <div className="container lg:mx-auto p-2 font-poppins lg:h-[40rem]">
            {user ? (
                <div>
                    <div className="profile-card flex flex-col lg:flex-row justify-center items-center bg-gray-400 text-white shadow-xl glass p-4 lg:p-10 rounded-xl lg:w-3/6 mx-auto">
                        <h2 className="text-3xl text-center   text-gray-100  shadow-xl rounded-xl glass font-semibold mb-4">User Profile</h2>
                        <div className="profile-image-wrapper grid justify-center p-3">
                            <div className="indicator">
                                
                                <div className="profile-image">
                                    <img className="rounded-3xl shadow-2xl lg:w-48 lg:h-48 w-36 h-36" src={photoURLInput} alt="User Photo" />
                                </div>
                            </div>
                        </div>
                        <div className="profile-info text-center py-10">
                            <div className="text-lg font-semibold">
                                <div>
                                    <span className='font-bold text-red-400' >Name:</span> <p>{nameInput}</p>
                                </div>
                                <div>
                                    <span>Email:</span> <p>{user.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="update-profile-section lg:w-3/6 mx-auto mt-5">
                        <UpdateProfile handleChangeUserData={handleChangeUserData} />
                    </div>
                </div>
            ) : (
                <div>Please log in to view your profile.</div>
            )}
        </div>
    );
};

export default UserProfile;
