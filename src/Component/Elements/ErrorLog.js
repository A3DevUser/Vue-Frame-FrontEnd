import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import swal from 'sweetalert';
// import {ErrorBoundary, FallbackProps, useErrorBoundary } from 'react-error-boundary';

function ErrorLog (props) {
    const {error, resetErrorBoundray} = props;
    const CurrentTime = new Date();
    const navigate = useNavigate()

    useEffect(()=>{
     return swal({
        title:'Something went wrong !',
        icon : 'warning'
      }).then(()=>{
        return navigate('/pendencyDashboard')
      })
    },[error])

    // useEffect(()=>{
    //   console.log('errMsg', JSON.stringify(error.stack))

    // },[props])


  return (
    <>
    <h2>ErrorLog </h2>
    <p>{error.message}</p>
    {/* {console.log(CurrentTime)} */}
    </>
  )
}

export default ErrorLog;