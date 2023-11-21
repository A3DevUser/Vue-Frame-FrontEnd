import React from 'react'
import { useEffect } from 'react';
// import {ErrorBoundary, FallbackProps, useErrorBoundary } from 'react-error-boundary';

function ErrorLog (props) {
    const {error, resetErrorBoundray} = props;
    const CurrentTime = new Date();

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