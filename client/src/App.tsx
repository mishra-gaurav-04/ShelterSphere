import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {NavBar} from '@/components/shared/NavBar';
import {Home,Listings,Agents,Profile,Listing,Auth,ResetPassword} from '@/pages';

const App = () => {
  return (
    
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/listings' element={<Listings/>}/>
        <Route path='/listings/:id' element={<Listing/>}/>
        <Route path='/agents' element={<Agents/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/auth/:authType' element={<Auth/>}/>
        <Route path='/auth/reset-password/:resetToken' element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App