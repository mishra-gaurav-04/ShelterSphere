import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const ResetPassword = () => {
    return (
        <div className='container mx-auto mt-32 '>
            <div className='flex items-center flex-col gap-6 w-[32vw] h-[28vh] shadow-xl rounded-lg  mx-auto mt-64 justify-center'>
                <div className="grid grid-cols-4 items-center gap-4 -ml-16">
                    <Label htmlFor="password" className="text-right">
                        New Password
                    </Label>
                    <Input
                        id="password"
                        placeholder='Enter your new password'
                        className="col-span-3"
                        name='password'
                        type='password'
                        
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="confirmPassword" className="text-right">
                        Confirm Password
                    </Label>
                    <Input
                        id="confirmPassword"
                        placeholder='your@email.com'
                        className="col-span-3"
                        name='confirmPassword'
                        type='password'
                    />
                </div>
            </div>
        </div>
    )
}
