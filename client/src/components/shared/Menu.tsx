import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Profileimg from '@/assets/profile-1.jpg';
import { Separator } from '../ui/separator';
import { Link } from 'react-router-dom';


export const Menu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <img src={Profileimg} alt="profile-pic" className='w-12 h-12 rounded-full border-2 border-gray-400' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/my-listings">My Listings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Messages</DropdownMenuItem>
                <DropdownMenuItem>Saved Places</DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>SignOut</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
