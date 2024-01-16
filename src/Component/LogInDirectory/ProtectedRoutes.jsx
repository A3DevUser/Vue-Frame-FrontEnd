import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ logStatus }) => {
  return (
    <>
      {
        sessionStorage.getItem('userData') ? <Outlet /> : <Navigate to={'/'} />
      }
    </>
  )
}

export default ProtectedRoutes;