import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {setAuthFailure,setAuthStart,setAuthSuccess} from '../redux/authSlice/auth.slice';
import {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { signIn } from '../api/api';

const SignIn = () => {  
  const [fromData,setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading,error} = useSelector((state) => state.auth);
  const handleInputChange = (event) => {
    setFormData({
      ...fromData,
      [event.target.id] : event.target.value
    });
  }
  const handleSubmit = async(event) => {
    try{
      dispatch(setAuthStart)
      const res = await signIn(JSON.stringify(fromData));
      const data = await res.json();
      if(data.success === false){
        dispatch(setAuthFailure(data.message));
        return;
      }
      dispatch(setAuthSuccess(data));
      navigate('/listings')
    }
    catch(error){

    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
        <form  action="" onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input type="text" placeholder='Email' onChange={handleInputChange}  className='p-3 rounded-lg border border-gray-800' id='email'/>
            <input type="password" placeholder='Password' onChange={handleInputChange} className='p-3 rounded-lg border border-gray-800' id='password'/>
            <button disabled={loading} type='submit' className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' : 'Sign In'}</button>
        </form>
        <p className='mt-3'>Don't Have an Account? <Link className='text-blue-700' to='/sign-up'>Sign Up</Link></p>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
} 

export default SignIn