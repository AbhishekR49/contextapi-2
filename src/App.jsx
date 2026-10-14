import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import Notfound from './Pages/Notfound'
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Orders from "./Pages/Orders";
import DashboardHome from "./Pages/DashboardHome";
import ProtectedRoutes from './Components/ProtectedRoutes'
import Login from './Pages/Login'
import ApiPractice from './Pages/ApiPractice'
import UserList from './Pages/UserList'


const App = () => {
 
  return (
   <>
     
     <Navbar/>

     <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/about' element={ <About/> } />
      <Route path='/login' element={ <Login/> } />
      <Route path='/api-practice' element={ <ApiPractice/> } />
      <Route  path='/user-list' element={<UserList/>} />

      <Route element={<ProtectedRoutes/>} >
      <Route path="/dashboard" element={<Dashboard />}>

        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="orders" element={<Orders />} />

      </Route>
    </Route>  

      <Route path='*' element={ <Notfound/>} />
    </Routes>
   </>
   
  )
}

export default App
