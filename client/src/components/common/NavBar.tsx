import React from 'react'
import { Link } from 'react-router-dom';
import { navLinks } from '@/lib/constants';
import { Button } from '../ui/button';
import Profileimg from '@/assets/profile-1.jpg';
import { MobileNav } from './MobileNav';

export const NavBar = () => {
    const isAuth: boolean = false
    return (
        <header className='w-full fixed z-30 top-0'>
            <nav className='container mx-auto py-6 px-3 flex items-center  justify-between'>
                <Link to="/" className='text-2xl font-bold text-slate-500'>Shelter<span className='text-slate-400'>Sphere</span></Link>
                <div className='hidden ml-32 md:flex items-center gap-12'>
                    {
                        navLinks.map((item, index) => (
                            <Link to={item.link} key={index} className='text-xl cursor-pointer hover:text-blue-600 font-medium transition duration-200'>{item.name}</Link>
                        ))
                    }
                </div>
                <MobileNav />
                {
                    isAuth ? (
                        <div className='hidden md:flex items-center gap-3'>
                            <img src={Profileimg} alt="profile-pic" className='w-12 h-12 rounded-full border-2 border-gray-400' />
                            <Link to="/profile" className='font-medium text-md'>Gaurav Mishra</Link>
                        </div>
                    ) : (
                        <div className='hidden md:flex items-center gap-4'>
                            <Button variant='outline' size='lg' className='font-semibold py-6'>SignIn</Button>
                            <Button size='lg' className='bg-yellow-300 text-black font-semibold py-6 hover:bg-yellow-200'>SignUp</Button>
                        </div>
                    )
                }

            </nav>
        </header>

    )
}
