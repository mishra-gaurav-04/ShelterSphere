import React from 'react';
import AboutUs from '../assets/about-us.jpg' 
import ImageCover from '../assets//image-cover-1.jpg';
import name1 from '../assets/name-1.png';
import name2 from '../assets/name-2.png';
import name3 from '../assets/name-3.jpg';
import handShake from '../assets/handshake.jpg';
import {CiLocationOn} from 'react-icons/ci';
import {MdOutlineCall,MdEmail} from 'react-icons/md'

const About = () => {
    
  return (
    <div>
        <div className='relative flex items-center justify-center'>
            <h1 className='absolute text-6xl text-white '>About Us</h1>
            <img src={AboutUs} alt="" className='w-full h-64 object-cover'/>
        </div>
        <div className='my-20 flex flex-col justify-center items-center gap-4 p-4'>
            <p className='text-4xl uppercase'>A Real State Solution Company</p>
            <h1 className='text-6xl font-mono uppercase text-gray-700'>Shelter Sphere Group LLC</h1>
        </div>
        <div className='mt-10 bg-gray-300 p-4'>
            <div className='container mx-auto flex justify-center gap-6'>
                <div className='w-1/4 mt-3 space-y-3'>
                    <h3 className='font-medium text-3xl uppercase'>Our Favourite Quote</h3>
                    <p className='text-center text-gray-500'>"To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity."</p>
                    <h2 className='mx-auto text-[#FFA33C] text-xl'>-Douglas Adams</h2>
                </div>
                <div className='w-1/3 mt-3 space-y-3'>
                    <h3 className='font-medium text-3xl uppercase'>About Us</h3>
                    <p className='text-gray-500'>Shelter Sphere Property Group is a professional, full service real estate solutions firm that buys and sells properties throughout the Space Coast area of Florida.  We specialize in buying distressed homes, renovating and reselling them to retail home buyers and landlords.</p>
                    <p className='text-gray-500'>At Shelter Sphere Group, LLC, our team is highly motivated, knowledgeable, ethical and resourceful.  Qualified to handle any real estate transaction, our dedicated staff is committed to helping people with their real estate needs and making successful deals happen.  Our team of professionals has the integrity to follow up on our promises, and the expertise to navigate any transaction to ensure you’re fully informed for making the best decision possible.</p>
                </div>
            </div>
        </div>
        <div className='my-20 flex flex-col justify-center items-center gap-4 p-4'>
            <h1 className='text-black font-mono text-6xl uppercase'>Our Approach</h1>
            <p className='text-md text-gray-500 text-center w-1/3'>At Shelter Sphere Property Group, it's our goal to not only have a positive effect on ourselves and our families - but also to inspire, motivate, and create lasting change in everyone we encounter</p>
        </div>
        <div className='relative'>
            <img src={ImageCover} alt="" className='w-full object-cover h-img brightness-50' />
            <div className='absolute inset-0 mx-auto flex items-center justify-between px-6'>
                <div className='text-white text-center w-1/3'>
                    <p className='text-lg font-bold'>COMMUNITY REJUVENATION</p>
                    <p className='font-mono w-full'>We aim to rejuvenate neighborhoods and increase the standard of living by improving the overall quality of housing for the residents</p>
                </div>
                <div className='text-white text-center w-1/3'>
                    <p className='text-lg font-bold'>SOLUTIONS & SYSTEMS ORIENTED</p>
                    <p className='font-mono w-full'>Our core business lies within our systems, education, and knowledge of the real estate industry</p>
                </div>
                <div className='text-white text-center w-1/3'>
                    <p className='text-lg font-bold'>TEAM APPROACH</p>
                    <p className='font-mono w-full'>We have an aggressive team approach and a top-notch ability to expand our client base through our knowledge of deal structuring and advanced real estate techniques</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 p-4 my-20'>
            <h1 className='text-black font-mono text-6xl uppercase'>Why Choose Us?</h1>
            <p className='text-md text-gray-500 text-center w-1/3'>True Homes Property Group is committed to rejuvenating Space Coast communities through our systematic and disciplined approach, and creating lasting change in every neighborhood we encounter.</p>
            <div className='mt-5 flex justify-center items-center space-x-10 gap-16'>
                <div className='flex flex-col item-center space-y-4'>
                    <img src={name1} alt=""  className='object-cover w-32 h-32'/>
                    <div>
                        <h1 className='text-xl text-gray-500 font-mono'>Benjamin Bazemore</h1>
                        <p className='text-gray-500'>CEO & Acquisitions Specialist</p>
                    </div>
                </div>
                <div className='flex flex-col items-center space-y-4'>
                    <img src={name2} alt="" className='object-cover w-32 h-32' />
                   <div>
                        <h1 className='text-xl text-gray-500 font-mono'>Beth Boyd</h1>
                        <p className='text-gray-500'>CFO & Project Analyst</p>
                   </div>
                </div>
                <div className='flex flex-col items-center space-y-4'>
                    <img src={name3} alt="" className='object-cover w-32 h-32' />
                    <div>
                        <h1 className='text-xl text-gray-500 font-mono'>Corianne James</h1>
                        <p className='text-gray-500'>Client Relations</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='relative'>
            <img src={handShake} className='w-full object-cover h-img brightness-50'  alt="" />
            <div className='absolute inset-0  flex flex-col gap-6 items-center justify-center overflow-hidden'>
                <h1 className='text-white font-bold text-4xl'>TESTIMONIALS</h1>
                    <div className='w-1/2'>
                        <p className='text-center text-lg text-white'>“I’d like to say that [True Homes Property Group] worked diligently to get my property out of foreclosure status. Without them I don’t know what would’ve happened to my credit rating. Thanks…for all your hard work!”</p>
                    </div>
            </div>
        </div>
        <div className='my-20'>
            <div className='flex items-center justify-center gap-16'>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <MdEmail className='text-8xl text-slate-500'/>
                    <p className='text-2xl text-gray-600'>Ben.Bazemore@shletersphere.com</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <MdOutlineCall className='text-8xl text-slate-500'/>
                    <p className='text-2xl text-gray-600'>321.323.9507</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <CiLocationOn className='text-8xl text-slate-500'/>
                    <p className='text-2xl text-gray-600'>PO Box 140398, Melbourne, FL 32940</p>
                </div>
            </div>
        </div>
        <p className='text-center text-2xl font-mono'>Copyright © 2018 Shelter Sphere, LLC</p>
    </div>
  )
}

export default About