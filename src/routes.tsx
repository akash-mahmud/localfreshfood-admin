import React from 'react'
import {Routes, Route} from 'react-router-dom'
import endpoint from './config/endpoints';
import Home from './screen/Home';
import Login from './screen/Login';

 const  AppRoutes:React.FC =() => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={endpoint.login} element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;