import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import About from './pages/About';
import Profile from './pages/Profile'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-out' element={<SignOut/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App