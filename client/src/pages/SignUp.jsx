import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {signUp} from '../api/api';

const SignUp = () => {
  const [formData,setFormData] = useState({});

  const handleInputChange = (event) => {
      setFormData({
        ...formData,
        [event.target.id] : event.target.value
      })
  }

  const handleSubmit = async(event) => {
      event.preventDefault();

      try{
        const res = await signUp(JSON.stringify(formData));
        console.log('Response from the signup page',res);
      }
      catch(err){
        console.log(err);
      }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign Up</h1>
        <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
          <input type="text" placeholder='Name' className='p-3 rounded-lg border border-gray-800' id='name' onChange={handleInputChange}/>
          <input type="text" placeholder='Email' className='p-3 rounded-lg border border-gray-800' id='email' onChange={handleInputChange}/>
          <input type="password" placeholder='Password' className='p-3 rounded-lg border border-gray-800' id='password' onChange={handleInputChange}/>
          <button type='submit' className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
        </form>
      <p className='mt-3'>Have An Account ? <Link className='text-blue-700' to='/sign-in'>Sign In</Link></p>
    </div>
  )
}

export default SignUp