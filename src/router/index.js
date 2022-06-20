import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import HomeView from '../views/HomeView';
import PrivacyPolicyView from '../components/sections/privacyPolicy';
export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<HomeView/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicyView/>} />
    </Routes>
  )
}
