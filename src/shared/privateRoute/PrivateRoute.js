import React from 'react'
import { Navigate } from 'react-router-dom';
import {useAuth} from "../../context/auth/AuthContext"

export const PrivateRoute = ({path,children}) => {
    const {isUserloggedIn} = useAuth();
  return  isUserloggedIn ? children : <Navigate replace to="/login" state={{from : path}}/> 
}

