import React from 'react';
import ProfileImg from '@/assets/profile-1.jpg';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ProfileTabs } from '@/components/shared/ProfileTabs';
import { UpdateProfile } from '@/components/shared/UpdateProfile';
import { Link } from 'react-router-dom';

export const Profile = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-12 min-h-screen gap-4 pb-10'>
      <div className='col-span-1 md:col-span-7 px-6 py-8 mt-32 flex flex-col gap-3 '>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg md:text-4xl font-light'>User Information</h2>
          <UpdateProfile />
        </div>
        <div className='flex md:flex-col flex-row items-center md:items-start gap-4 p-3'>
          <img src={ProfileImg} alt="profileimage" className='w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-gray-700 ' />
          <div className='flex flex-col gap-1'>
            <p className='text-md text-gray-700'>Name: Gaurav</p>
            <p className='text-md text-gray-700'>Mobile: +123565415456</p>
            <p className='text-md text-gray-700'>Email: test@ok.com</p>
            <p className='text-md text-gray-700'>Location: New Delhi</p>
            <p className='text-md text-gray-700'>Country: India</p>
          </div>
        </div>
        <Separator />
        <ProfileTabs />
      </div>
      <div className='col-span-1 md:col-span-5 bg-[#fcf5f3]'>
        <div className='mt-32 px-6 flex flex-col gap-4'>
          <h1 className='text-lg md:text-4xl font-light'>Messages</h1>
          <div className='flex flex-col gap-3 px-2 py-5'>
            <Link className='bg-white rounded-lg shadow-sm hover:bg-yellow-500 px-4 py-3 flex items-center justify-between' to="/messages/:id">
              <div className='flex items-center gap-6'>
                <img src={ProfileImg} className='w-12 h-12 rounded-full' alt="" />
                <p className='text-lg font-bold'>Jabe</p>
              </div>
              <div className='w-8 h-8 bg-red-500 rounded-full flex items-center justify-center'>
                <p className='text-white font-bold'>1</p>
              </div>
            </Link>
            <Link className='bg-white rounded-lg shadow-sm hover:bg-yellow-500 px-4 py-3 flex items-center justify-between' to="/messages/:id">
              <div className='flex items-center gap-6'>
                <img src={ProfileImg} className='w-12 h-12 rounded-full' alt="" />
                <p className='text-lg font-bold'>Jabe</p>
              </div>
              <div className='w-8 h-8 bg-red-500 rounded-full flex items-center justify-center'>
                <p className='text-white font-bold'>1</p>
              </div>
            </Link>
            <Link className='bg-white rounded-lg shadow-sm hover:bg-yellow-500 px-4 py-3 flex items-center justify-between' to="/messages/:id">
              <div className='flex items-center gap-6'>
                <img src={ProfileImg} className='w-12 h-12 rounded-full' alt="" />
                <p className='text-lg font-bold'>Jabe</p>
              </div>
              <div className='w-8 h-8 bg-red-500 rounded-full flex items-center justify-center'>
                <p className='text-white font-bold'>1</p>
              </div>
            </Link>
            <Link className='bg-white rounded-lg shadow-sm hover:bg-yellow-500 px-4 py-3 flex items-center justify-between' to="/messages/:id">
              <div className='flex items-center gap-6'>
                <img src={ProfileImg} className='w-12 h-12 rounded-full' alt="" />
                <p className='text-lg font-bold'>Jabe</p>
              </div>
              <div className='w-8 h-8 bg-red-500 rounded-full flex items-center justify-center'>
                <p className='text-white font-bold'>1</p>
              </div>
            </Link>
            <Link className='bg-white rounded-lg shadow-sm hover:bg-yellow-500 px-4 py-3 flex items-center justify-between' to="/messages/:id">
              <div className='flex items-center gap-6'>
                <img src={ProfileImg} className='w-12 h-12 rounded-full' alt="" />
                <p className='text-lg font-bold'>Jabe</p>
              </div>
              <div className='w-8 h-8 bg-red-500 rounded-full flex items-center justify-center'>
                <p className='text-white font-bold'>1</p>
              </div>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}

