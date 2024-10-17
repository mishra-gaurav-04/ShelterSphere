import React from 'react';
import Analytics from '@/components/shared/Analytics';
import Search from '@/components/shared/Search';
import { analytics } from '@/lib/constants';
import bgImg from '@/assets/bg.png';

export const Home = () => {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-12 gap-3 mx-auto  min-h-screen '>
      <div className='col-span-1 md:col-span-7 relative mt-40 md:mt-64 flex flex-col gap-6'>
        <h1 className='text-3xl md:text-7xl font-semibold leading-snug'>Get Your Dream Property At Finger Tips</h1>
        <p className='text-2xl text-gray-600 leading-10'>ShlterSphere is a real estate company we aim at providing the best quality properties at reasonable price and help you to get your dream place quickly</p>
        <Search/>
        <div className='flex items-center justify-between gap-6 mt-4 '>
          {
            analytics.map((item,index) => (
              <Analytics text={item.text} key={index} value={item.value}/>
            ))
          }
        </div>
      </div>
      <div className='col-span-1 md:col-span-5 bg-[#fcf5f3]'>
        <div className='relative top-16'>
          <img src={bgImg} alt="bg-img" className='mt-20 absolute md:-left-6 w-full object-cover'/>
        </div>
      </div>
    </div>
  )
}
