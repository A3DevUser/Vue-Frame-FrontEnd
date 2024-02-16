import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ logStatus }) => {

  const AuthRed = useSelector((state)=>state.AuthRed)


  return (
    <>
      {
        AuthRed.val ? <Outlet /> : <Navigate to={'/'} />
      }
    </>
  )
}

export default ProtectedRoutes;