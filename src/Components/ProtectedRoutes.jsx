import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoutes = () => {

   const {user} = useAuth();

    if(!user){
        return <Navigate to='/login' replace/>
    }
  return <Outlet />
}

export default ProtectedRoutes
