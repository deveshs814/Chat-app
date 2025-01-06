import React ,{useEffect} from 'react'
import Navbar from './Components/Navbar.jsx'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import SignUpPage from './Pages/SignUpPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import SettingsPage from './Pages/SettingsPage.jsx'
import ProfilePage from './Pages/ProfilePage.jsx'
import { useAuthStore } from './store/useAuthStore.js'
import {Loader} from 'lucide-react'
import { Toaster } from 'react-hot-toast'
function App() {
  const {authUser,checkAuth,isCheckingAuth} = useAuthStore();

  useEffect(() =>{
    checkAuth();
  },[checkAuth]);

  console.log({authUser});
  
  if(isCheckingAuth && !authUser) return (
    <div className='flex items-center justify-center h-screen'>
      <Loader classname = "size-10 animate-spin"/>
    </div>

  )

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {authUser ? <HomePage/> : <Navigate to='/login'/>}/>
        <Route path = "/signup" element = {!authUser ? <SignUpPage/> : <Navigate to='/'/>}/>
        <Route path = "/login" element = {!authUser ?<LoginPage/> : <Navigate to='/'/>}/>
        <Route path = "/settings" element = {<SettingsPage/>}/>
        <Route path = "/profile" element = {authUser ?  <ProfilePage/> : <Navigate to='/login'/>}/>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
