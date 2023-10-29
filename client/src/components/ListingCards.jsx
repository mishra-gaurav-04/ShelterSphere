import React from 'react';
import House from '../assets/house-1.png'
import { Link } from 'react-router-dom';
import {MdLocationOn} from 'react-icons/md';

const ListingCards = () => {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
        <Link>
            <img src={House} className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'/>
            <div className='p-3 flex flex-col gap-2 w-full'>
                <p className='truncate text-lg font-semibold text-slate-700'> Tranquil Lakeside Retreat</p>
                <div className='flex items-center gap-1'>
                    <MdLocationOn className='h-4 w-4 text-green-500'/>
                    <p className='text-sm text-gray-700 truncate w-full'>789 Serenity Drive, Lakeview Haven, FAKE789</p>
                </div>
                <p className='text-sm text-gray-700 line-clamp-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolores facere consequatur omnis veritatis necessitatibus soluta incidunt architecto molestiae, adipisci, illum recusandae nostrum provident alias? Aliquid corporis possimus ab eveniet!
                </p>
                <p className='text-slate-500 mt-2 font-semibold'>$700000</p>
                <div className='text-slate-700 flex gap-4'>
                    <div className='font-bold text-xs'>
                        5 Beds
                    </div>
                    <div className='font-bold text-xs'>
                        5 Baths
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ListingCards