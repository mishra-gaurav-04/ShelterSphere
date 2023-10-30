import React from 'react'
import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {signUp} from '../api/api';
import {useDispatch,useSelector} from 'react-redux';
import {setAuthFailure,setAuthSuccess,setAuthStart} from '../redux/authSlice/auth.slice';

const SignUp = () => {
  const [formData,setFormData] = useState({});
  const {loading,error} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
      setFormData({
        ...formData,
        [event.target.id] : event.target.value
      });
  };

  const handleSubmit = async(event) => {
      event.preventDefault();

      try{
        dispatch(setAuthStart());
        const res = await signUp(JSON.stringify(formData));
        // console.log('Response from the Signup',res);
        const data = await res.userData;
        if(res.status === false){
         dispatch(setAuthFailure('Something Went Wrong'));
          return;
        }
        dispatch(setAuthSuccess(data));
        navigate('/listings');
      }
      catch(err){
        dispatch(setAuthFailure(err.message));
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