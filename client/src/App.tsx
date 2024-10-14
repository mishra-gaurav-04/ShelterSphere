import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {NavBar} from '@/components/common/NavBar';
import {Home,Listings,Agents,Profile} from '@/pages';

const App = () => {
  return (
    
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/listings' element={<Listings/>}/>
        <Route path='/agents' element={<Agents/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App