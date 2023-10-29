import React from 'react'
import {Link} from 'react-router-dom';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingCards from '../components/ListingCards';

const Home = () => {
  return (
    <div>
        <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
            <h1 className='text-slate-700 text-6xl font-bold'>
                Find your next <span className='text-slate-500'>Perfect</span>
                <br />
                place with ease
            </h1>
            <p className='w-1/2 text-gray-500'>Shelter Sphere will help you find your home fast, easy and comfortable.Our expert support are always available.</p>
            <Link className='text-sm font-semibold text-blue-800'>Let's Start Now ...</Link>
        </div>
        <div>
          <ListingCards/>
        </div>
    </div>
  )
}

export default Home