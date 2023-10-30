import React from 'react'
import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {signUp} from '../api/api';

const SignUp = () => {
  const [formData,setFormData] = useState({});
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
      setFormData({
        ...formData,
        [event.target.id] : event.target.value
      });
  };

  const handleSubmit = async(event) => {
      event.preventDefault();

      try{
        setLoading(true);
        const res = await signUp(JSON.stringify(formData));
        // console.log('Response from the signup page',res);

        const data = await res.json();
        // console.log(data);

        if(data.success === false){
          setLoading(false);
          setError(data.message);
          return;
        }
        setLoading(false);
        setError(null);
        navigate('/listings');
      }
      catch(err){
        setLoading(false);
        setError(error.message);
      }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign Up</h1>
        <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
          <input type="text" placeholder='Name' className='p-3 rounded-lg border border-gray-800' id='name' onChange={handleInputChange}/>
          <input type="text" placeholder='Email' className='p-3 rounded-lg border border-gray-800' id='email' onChange={handleInputChange}/>
          <input type="password" placeholder='Password' className='p-3 rounded-lg border border-gray-800' id='password' onChange={handleInputChange}/>
          <button disabled={loading} type='submit' className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' : 'Sign-Up'}</button>
        </form>
      <p className='mt-3'>Have An Account ? <Link className='text-blue-700' to='/sign-in'>Sign In</Link></p>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default SignUp