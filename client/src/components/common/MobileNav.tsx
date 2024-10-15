import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom';
import { navLinks } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';
import Profileimg from '@/assets/profile-1.jpg'


export const MobileNav = () => {
    const isAuth: boolean = false
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant='outline' className='text-lg font-semibold md:hidden' size='lg'><RxHamburgerMenu /></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle><Link to="/" className='text-2xl font-bold text-slate-500'>Shelter<span className='text-slate-400'>Sphere</span></Link></SheetTitle>
                </SheetHeader>
                <div className='my-16 flex flex-col gap-6 '>
                    {
                        navLinks.map((item, index) => (
                            <Link className='text-2xl font-medium ' key={index} to={item.link}>{item.name}</Link>
                        ))
                    }
                </div>
                <Separator />
                {
                    isAuth ? (
                        <div className='flex items-center gap-3 mt-6'>
                            <img src={Profileimg} alt="profile-pic" className='w-12 h-12 rounded-full border-2 border-gray-400' />
                            <Link to="/profile" className='font-medium text-md'>Gaurav Mishra</Link>
                        </div>
                    ) : (
                        <div className='flex items-center gap-4 mt-6'>
                            <Link to="/auth/sign-in" className='bg-white px-4 py-3 rounded-lg shadow-xl border-2 border-gray-600 font-bold text-md'>SignIn</Link>
                            <Link to="/auth/sign-up" className='bg-yellow-400 px-4 py-3 rounded-lg shadow-xl border-2 border-yellow-600 text-slate-500 text-md font-bold'>SignUp</Link>
                        </div>
                    )
                }
            </SheetContent>
        </Sheet>

    )
}
