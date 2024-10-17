import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog";
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

// TODO add toast

export const UpdateProfile = () => {
  return (
    <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline" className='w-fit px-6 py-8 bg-yellow-400 font-bold hover:bg-yellow-300'>Update Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update Profile</DialogTitle>
                    <DialogDescription>
                        Enter your registered email id
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="contact" className="text-right">
                            Contact No
                        </Label>
                        <Input
                            id="contact"
                            placeholder='enter your contact number'
                            className="col-span-3"
                            name='contact'
                            type='number'
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="location" className="text-right">
                            Location
                        </Label>
                        <Input
                            id="location"
                            placeholder='enter your location'
                            className="col-span-3"
                            name='location'
                            type='text'
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="profilePhoto" className="text-right">
                            Profile Pic
                        </Label>
                        <Input
                            id="profilePhoto"
                            className="col-span-3"
                            name='profilePhoto'
                            type='file'
                        />
                    </div>
                    
                </div>
                <DialogFooter>
                    <Button type="submit"  className='bg-blue-600 hover:bg-blue-800'>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
  )
}
