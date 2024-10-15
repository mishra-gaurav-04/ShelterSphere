import React from 'react';
import house1 from '@/assets/house-1.jpeg';
import house2 from '@/assets/house-2.jpeg';
import house3 from '@/assets/house-3.jpeg';
import house4 from '@/assets/house-4.jpeg';
import ProfileImg from '@/assets/profile-1.jpg';
import { CiLocationOn } from "react-icons/ci";
import { BsTools } from "react-icons/bs";
import { MdOutlinePets } from "react-icons/md";
import { IoLogoNoSmoking } from "react-icons/io";
import { RxDimensions } from "react-icons/rx";
import { LuBedSingle } from "react-icons/lu";
import { LiaBathSolid } from "react-icons/lia";
import { AiTwotoneBank } from "react-icons/ai";
import { LuBus } from "react-icons/lu";
import { BsHospital } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { BiMessageSquareDots } from "react-icons/bi";


export const Listing = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-12 min-h-screen gap-4 pb-10'>
            <div className='col-span-1 md:col-span-7 mt-32 md:mt-50 flex flex-col gap-6'>
                <div className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-2'>
                    <div className='col-span-2 row-span-3 '>
                        <img src={house1} alt="house-image" className='w-full rounded-md h-full object-center' />
                    </div>
                    <div className='col-span-1  '>
                        <img src={house2} alt="house-image" className='w-full rounded-md h-full object-cover' />
                    </div>
                    <div className='col-span-1  '>
                        <img src={house3} alt="house-image" className='w-full rounded-md h-full object-cover' />
                    </div>
                    <div className='col-span-1 '>
                        <img src={house4} alt="house-image" className='w-full rounded-md h-full object-cover' />
                    </div>
                </div>
                <div className='flex  items-center justify-between mt-4'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-4xl font-medium'>A Cozy Apartment in the City</h1>
                        <p className='flex items-center text-gray-600 text-lg'><CiLocationOn /> 890 Regent Street,London</p>
                        <div className='border rounded-md text-yellow-800 font-bold shadow-md border-yellow-700 w-fit px-6 py-2 bg-yellow-400'>$ 2500</div>
                    </div>
                    <div className='bg-yellow-100 items-center px-8 py-8 rounded-md flex flex-col gap-1'>
                        <img src={ProfileImg} alt="profile pic" className='rounded-full border-2 w-16 h-16 border-gray-400' />
                        <p className='text-md text-yellow-700 font-bold'>Jane</p>
                    </div>
                </div>
                <div className='mt-6'>
                    <p className='text-lg text-gray-600'>Welcome to your dream home! This exquisite 4-bedroom, 3-bathroom property, nestled in a tranquil neighborhood, offers over 2,500 square feet of living space, perfect for families and entertaining. The beautifully landscaped front yard features vibrant flowers and mature trees, leading to a bright foyer and an open floor plan. The spacious living room, filled with natural light, is complemented by a stylish fireplace. At the heart of the home is a gourmet kitchen with modern stainless-steel appliances, expansive granite countertops, and a generous island, making it an ideal space for meal preparation and casual dining, sure to delight any home chef</p>
                </div>
            </div>
            <div className='col-span-1 md:col-span-5 pb-4 bg-[#fcf5f3]'>
                <div className='mt-32 md:mt-50 px-4 flex flex-col gap-4'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-xl font-bold text-zinc-800'>General</h3>
                        <div className='w-full shadow-md bg-white rounded-lg px-6 py-4 flex flex-col gap-3'>
                            <div className='flex items-center gap-3'>
                                <BsTools className='text-3xl text-yellow-700' />
                                <div className=''>
                                    <p className='font-medium text-[16px]'>Utilites</p>
                                    <p className='text-[12px]'>Tenant is responsible</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <MdOutlinePets className='text-3xl text-yellow-700' />
                                <div className=''>
                                    <p className='font-medium text-[16px]'>Pets Policy</p>
                                    <p className='text-[12px]'>Pets are allowed</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <IoLogoNoSmoking className='text-3xl text-yellow-700' />
                                <div className=''>
                                    <p className='font-medium text-[16px]'>Alochol Policy</p>
                                    <p className='text-[12px]'>Alochol is not allowed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h3 className='text-xl font-bold text-zinc-800'>Sizes</h3>
                        <div className='flex items-center  justify-between w-full px-6'>
                            <div className='bg-white rounded-lg shadow-md flex items-center gap-2 px-2 py-3'>
                                <RxDimensions className='text-xl' />
                                <p className='font-medium text-xl'>100 sqft</p>
                            </div>
                            <div className='bg-white rounded-lg shadow-md flex items-center gap-2 px-2 py-3'>
                                <LuBedSingle className='text-xl' />
                                <p className='font-medium text-xl'>2 bedrooms</p>
                            </div>
                            <div className='bg-white rounded-lg shadow-md flex items-center gap-2 px-2 py-3'>
                                <LiaBathSolid className='text-xl' />
                                <p className='font-medium text-xl'>2 bathrooms</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h3 className='text-xl font-bold text-zinc-800'>Nearby Places</h3>
                        <div className='w-full bg-white shadow-md px-3 py-4 flex items-center justify-between rounded-md'>
                            <div className='flex items-center gap-3'>
                                <LuBus className='text-3xl text-yellow-700' />
                                <div className=''>
                                    <p className='font-medium text-[16px]'>Bus Stand</p>
                                    <p className='text-[12px]'>300m away</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <AiTwotoneBank className='text-3xl text-yellow-700' />
                                <div className=''>
                                    <p className='font-medium text-[16px]'>Bank</p>
                                    <p className='text-[12px]'>1 Km away</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <BsHospital className='text-3xl text-yellow-700' />
                                <div className=''>
                                    <p className='font-medium text-[16px]'>Hospital</p>
                                    <p className='text-[12px]'>450m Away</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h3 className='text-xl font-bold text-zinc-800'>Availability</h3>
                        <div className='w-full bg-white px-4 py-3'>

                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-6'>
                        <div className='flex items-center bg-white border-2 border-yellow-400 px-4 text-lg rounded-lg shadow-md cursor-pointer py-3 gap-3'>
                            <BiMessageSquareDots />
                            <p>Send a message</p>
                        </div>
                        <div className='flex items-center bg-white border-2 border-yellow-400 px-4 text-lg rounded-lg shadow-md cursor-pointer py-3 gap-3'>

                            <CiBookmark />
                            <span>Save the Place</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
