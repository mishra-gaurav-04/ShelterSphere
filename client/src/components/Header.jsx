import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Header = () => {
  const [isAuth,user] = useSelector((state) => state.auth);
  return (
    <header className='bg-slate-300 shadow-md'>
       <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to="/">
                <h1 className='text-sm sm:text-xl flex flex-wrap'>
                    <span className='font-bold text-gray-700'>Shelter</span>
                    <span className='font-bold text-gray-400'>Sphere</span>
                </h1>
            </Link>
            <form action="" className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FaSearch className='text-slate-700'/>
            </form>
           <div className='flex gap-3'>
                <Link className='hover:text-blue-800 hidden sm:inline' to='/'>Home</Link>
                <Link className='hover:text-blue-800 hidden sm:inline' to='/about'>About</Link>
               {
                  isAuth ?
                    <div>
                        <Link to="/profile">
                            <img src={user.avatar} alt="" className='rounded-full h-8 w-8 object-cover'/>
                        </Link>
                    </div> 
                    :  
                    <Link className='hover:text-blue-800 hidden sm:inline' to='/sign-in'>SignIn</Link>
               }
           </div>
       </div>
    </header>
  )
}

export default Header