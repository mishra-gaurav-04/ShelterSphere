import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { navLinks } from '@/lib/constants';
import { MobileNav } from './MobileNav';
import { Menu } from './Menu';

export const NavBar = () => {
    const isAuth: boolean = true;
    const [isFixed, setIsFixed] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 25) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
            if (currentScrollY < lastScrollY) {
                setIsFixed(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`w-full fixed z-30 top-0 ${isFixed ? 'transition-all duration-200 bg-white bg-opacity-95 shadow-md' : ''}`}>
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
                            <div className='relative'>
                                <Menu />
                                <div className='absolute left-[-4px] top-[-12px] bg-red-600 text-white rounded-full font-semibold text-center w-[24px] h-[24px]'>1</div>
                            </div>
                        </div>
                    ) : (
                        <div className='hidden md:flex items-center gap-4'>
                            <Link to="/auth/sign-in" className='bg-white px-4 py-3 rounded-lg shadow-xl border-2 border-gray-600 font-bold text-md'>SignIn</Link>
                            <Link to="/auth/sign-up" className='bg-yellow-400 px-4 py-3 rounded-lg shadow-xl border-2 border-yellow-600 text-slate-500 text-md font-bold'>SignUp</Link>
                        </div>
                    )
                }

            </nav>
        </header>

    )
}
