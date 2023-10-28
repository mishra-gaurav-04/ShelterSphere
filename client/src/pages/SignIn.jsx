import React from 'react';
import {Link} from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
        <form action="" className='flex flex-col gap-4'>
            <input type="text" placeholder='Email' className='p-3 rounded-lg border border-gray-800'/>
            <input type="password" placeholder='Password' className='p-3 rounded-lg border border-gray-800'/>
            <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign In</button>
        </form>
        <p className='mt-3'>Don't Have an Account? <Link className='text-blue-700' to='/sign-up'>Sign Up</Link></p>
    </div>
  )
}

export default SignIn