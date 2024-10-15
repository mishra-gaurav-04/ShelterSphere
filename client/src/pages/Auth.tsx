import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthParamsType } from '@/lib/types/index';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { ForgotPassword } from '../components/common/ForgotPassword';


export const Auth = () => {
    const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState<boolean>(false);
    const { authType } = useParams<{ authType: AuthParamsType }>();
    const isSignIn = authType === 'sign-in';
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const success = false;
        if (success) {
            toast.success('Operation Successful!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
        else {
            toast.error('An error occurred!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    }
    return (
        <div className='w-full mt-32 fixed top-4'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className='flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-6 '>
                <Link to="/" className='text-2xl font-bold text-slate-500'>Shelter<span className='text-slate-400'>Sphere</span></Link>
                <div className='w-full bg-white rounded-lg p-4 shadow md:mt-0 sm:max-w-md xl:p-6 '>
                    <div className='p-6 space-y-4 flex items-center justify-center md:space-y-6 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>
                            {
                                isSignIn ? "SignIn" : "SignUp"
                            }
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6'>
                        {
                            !isSignIn && (
                                <div className='flex items-center justify-between gap-2'>
                                    <div>
                                        <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900'>Name</label>
                                        <input type="text" name='name' id='name' placeholder='enter your name' className='bg-gray-50 border text-gray-900 text-sm rounded-lg focus:border-primary-600 block w-full p-2.5  focus:ring-primary-600 border-gray-300' />
                                    </div>
                                    <div>
                                        <label htmlFor="contact" className='block mb-2 text-sm font-medium text-gray-900'>Contact No</label>
                                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name='contact' id='contact' placeholder='contact number' className='bg-gray-50 border text-gray-900 text-sm rounded-lg focus:border-primary-600 block w-full p-2.5  focus:ring-primary-600 border-gray-300' />
                                    </div>
                                </div>
                            )
                        }
                        <div>
                            <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900'>Your Email</label>
                            <input type="email" name='email' id='email' placeholder='your@email.com' className='bg-gray-50 border text-gray-900 text-sm rounded-lg focus:border-primary-600 block w-full p-2.5  focus:ring-primary-600 border-gray-300' />
                        </div>
                        <div>
                            <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900'>Password</label>
                            <input type="password" name='password' id='password' placeholder='youremail@.com' className='bg-gray-50 border text-gray-900 text-sm rounded-lg focus:border-primary-600 block w-full p-2.5  focus:ring-primary-600 border-gray-300' />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className='block mb-2 text-sm font-medium text-gray-900'>Confirm Password</label>
                            <input type="password" name='confirmPassword' id='confirmPassword' placeholder='youremail@.com' className='bg-gray-50 border text-gray-900 text-sm rounded-lg focus:border-primary-600 block w-full p-2.5  focus:ring-primary-600 border-gray-300' />
                        </div>
                        {
                            !isSignIn && (
                                <div className='flex flex-col gap-4 '>
                                    <div>
                                        <label htmlFor="location" className='block mb-2 text-sm font-medium text-gray-900'>Location</label>
                                        <input type="text" name='location' id='location' placeholder='enter your location' className='bg-gray-50 border text-gray-900 text-sm rounded-lg focus:border-primary-600 block w-full p-2.5  focus:ring-primary-600 border-gray-300' />
                                    </div>
                                    <div>
                                        <label htmlFor="country" className='block mb-2 text-sm font-medium text-gray-900'>Country</label>
                                        <input type="text" name='country' id='country' placeholder='enter your country' className='bg-gray-50 border text-gray-900 text-sm rounded-lg focus:border-primary-600 block w-full p-2.5  focus:ring-primary-600 border-gray-300' />
                                    </div>
                                </div>
                            )
                        }
                        <div className='flex flex-col gap-2'>
                            {
                                isSignIn && <ForgotPassword isOpen={isForgotPasswordOpen} setIsOpen={setIsForgotPasswordOpen} />
                            }
                            <Button type='submit' className='w-full bg-blue-600 cursor-pointer hover:bg-blue-700'>
                                {
                                    isSignIn ? "SignIn" : "SignUp"
                                }
                            </Button>
                        </div>
                    </form>
                    {
                        !isSignIn ? (
                            <div className='mt-3 pb-3 ml-1'>
                                <span>Already have an account?</span> <Link to="/auth/sign-in" className='text-blue-700 font-semibold'>SignIn</Link>
                            </div>
                        ) : (
                            <div className='mt-3 pb-3 ml-1'>
                                <span>Dont't have an account?</span> <Link to="/auth/sign-up" className='text-blue-700 font-semibold'>SignUp</Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
