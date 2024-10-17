import React from 'react'
import house from '@/assets/house-2.jpeg';
import { CiLocationOn } from 'react-icons/ci';
import { LuBedSingle } from "react-icons/lu";
import { LiaBathSolid } from "react-icons/lia";
import { BiMessageSquareDots } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";

export const ListingsCards = () => {
    return (
        <div className='bg-white w-fit md:w-full px-3 rounded-lg shadow-xl py-4 flex flex-col gap-4 md:flex-row md:items-center md:gap-5'>
            <img src={house} alt="house img" className='object-fit rounded-lg w-full md:h-full md:w-[20vw] ' />
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-gray-600 text-2xl font-bold'>A Great Apartment next to beach!</h1>
                    <p className='flex items-center gap-2 text-gray-600'><CiLocationOn /> 456 Park Avenue London</p>
                    <p className='text-yellow-700 px-4 py-2 bg-yellow-400 rounded-md w-fit font-bold'>$1000</p>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <p className='flex items-center gap-2 text-gray-600 px-2 py-1 bg-gray-300 font-bold rounded-md'><LuBedSingle /> 2 bedroom</p>
                            <p className='flex items-center gap-2 text-gray-600 bg-gray-300 font-bold rounded-md px-2 py-1'><LiaBathSolid /> 2 bedroom</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='border rounded-xl w-10 h-10 flex items-center justify-center bg-white shadow-xl cursor-pointer'><BiMessageSquareDots /></div>
                            <div className='border rounded-xl w-10 h-10 flex items-center justify-center bg-white shadow-xl cursor-pointer'><CiBookmark /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
