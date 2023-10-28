import React from 'react'
import {Link} from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign Up</h1>
      <form action="" className='flex flex-col gap-4'>
        <input type="text" placeholder='Name' className='p-3 rounded-lg border border-gray-800'/>
        <input type="text" placeholder='Email' className='p-3 rounded-lg border border-gray-800'/>
        <input type="password" placeholder='Password' className='p-3 rounded-lg border border-gray-800'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 '>Sign Up</button>
      </form>
      <p className='mt-3'>Have An Account ? <Link className='text-blue-700' to='/sign-in'>Sign In</Link></p>
    </div>
  )
}

export default SignUp