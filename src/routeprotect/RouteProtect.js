import React from 'react';
import { Navigate } from 'react-router-dom';

function RouteProtect({children}) {
  const token = localStorage.getItem("token")
  if(!token){
    return <Navigate to="/Login"></Navigate>
  }
  else{
    return children
  }
}

export default RouteProtect