import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import LoadingBar from 'react-top-loading-bar';

const LoaderTop = () => {
  const ref = useRef(null);
  const [actState, setActState] = useState({ loading: true, val: [], err: '' });
  const [actState1, setActState1] = useState({ loading: true, val: [], err: '' });
  const [actState2, setActState2] = useState({ loading: true, val: [], err: '' });
  const [progress, setProgress] = useState(0);

  const handleFetch = () => {
    setProgress(0); // Reset progress

    axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
      setActState({ loading: false, val: res.data, err: '' });
    });

setInterval(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setActState1({ loading: false, val: res.data, err: '' });
    });
}, 1000);

setInterval(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
      setActState2({ loading: false, val: res.data, err: '' });
    });
}, 2000);

  };

  useEffect(() => {
    if (!actState.loading && !actState1.loading && !actState2.loading) {
      // All requests have completed
      setProgress(100);
    } else if (!actState.loading || !actState1.loading || !actState2.loading) {
      // At least one of the requests has completed
      setProgress(66); // You can adjust this value as needed
    }
  }, [actState, actState1, actState2]);

  return (
    <div>
      <LoadingBar color='#f11946' progress={progress} />
      <Button className='m2' onClick={handleFetch}>Fetch</Button>
      {actState.loading || actState1.loading || actState2.loading ? (
        <></>
      ) : (
        <div>
          <h1>{JSON.stringify(actState)}</h1>
          <h1>{JSON.stringify(actState1)}</h1>
          <h1>{JSON.stringify(actState2)}</h1>
        </div>
      )}
    </div>
  );
};

export default LoaderTop;
