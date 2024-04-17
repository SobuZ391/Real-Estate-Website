import React, { useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../Hooks/useAuth';

const UpdateProfile = ({ handleChangeUserData }) => {
    const { user } = useAuth();
    const [nameValue, setNameValue] = useState(user.displayName || '');
    const [photoURL, setPhotoURL] = useState(user.photoURL || '');

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        try {
            // Update user profile using Firebase updateProfile function
            await updateProfile(user, {
                displayName: nameValue,
                photoURL: photoURL
            });

            
            toast.success('Profile updated successfully');

            
            handleChangeUserData(nameValue, photoURL);
        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error('Error updating profile');
        }
    };

    return (
        <div className="container mx-auto flex justify-center">
            {/* Button to open modal */}
            <label htmlFor="my_modal_6" className="btn shadow-xl mt-5 w-1/3 btn-accent ">Update Profile</label>

            {/* Modal */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="rounded-xl p-4">
                        <form onSubmit={handleUpdateProfile} className="card-body">
                            <h2 className="text-2xl text-center mb-3">Update Profile</h2>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    required
                                    value={nameValue}
                                    onChange={(e) => setNameValue(e.target.value)}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn shadow-xl text-blue-500 w-full">Update Profile</button>
                            </div>
                            <div className="modal-action border flex justify-center">
                                <label htmlFor="my_modal_6" className="btn btn-outline w-full">Close</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;
