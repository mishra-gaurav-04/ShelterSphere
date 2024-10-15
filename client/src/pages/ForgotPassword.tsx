import React from 'react';
import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { ForgotPasswordProps } from '@/lib/types';


export const ForgotPassword = ({isOpen,setIsOpen}:ForgotPasswordProps) => {
    const [email, setEmail] = useState<string>('');
    

    const handleInputChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    const handleDialogTrigger = () => {
        setIsOpen(true);
    }
    const handleSubmit = () => {
        const success = true;
        setIsOpen(false);
        if (success) {
            toast.success('Operation Successful!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
            
        }
        else {
            toast.error('An error occurred!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
            
        }
    }
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <DialogTrigger asChild>
                <Button onClick={handleDialogTrigger} variant="outline" className='w-fit ml-auto text-blue-700 bg-transparent border-none hover:text-blue-700 hover:bg-transparent p-0 shadow-none'>Forgot Password</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Forgot Password</DialogTitle>
                    <DialogDescription>
                        Enter your registered email id
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder='your@email.com'
                            className="col-span-3"
                            name='email'
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit} className='bg-blue-600 hover:bg-blue-800'>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}
