import './App.css';
import React from "react";
import { Route,Routes } from 'react-router-dom';

import AdminLogin from './page/admin/login'
import AdminHome from './page/admin/home'
import UserSignup from './page/user/signup'
import UserHome from './page/user/home'
import UserLogin from './page/user/login'
import UserProfile from './page/user/profile'
import NavBar from './components/Navbar'





function App() {
 

   return (
    <div className="App">

      
      <Routes>
      <Route path='/admin' element={<AdminLogin />}></Route>
      <Route path='/admin/home' element={<AdminHome />}></Route>
      <Route path='/signup' element={<UserSignup />}></Route>
      <Route path="/" element={<UserLogin />}></Route>
      <Route path='/home' element={<NavBar />} >
        <Route index element={<UserHome />} />
        <Route path='/home/profile' element={<UserProfile />} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
