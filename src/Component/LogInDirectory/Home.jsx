import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import LoadingBar from 'react-top-loading-bar';
import { LogInState } from '../../Store/Actions/GeneralStates';

const Home = ({setValidate}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState([{
        username: "",
        password: ""
    }]);

    const LogInStateRed = useSelector((state)=>state.LogInStateRed)


    const handleLogout = () => {
        // Clear session storage and reset the data state
        sessionStorage.removeItem('userData');
        // sessionStorage.removeItem('password');
        dispatch(LogInState(false))

        // navigate('/')
        setData({ username: '', password: '' });
    };

    useEffect(()=>{
        if(LogInStateRed==false){
            navigate('/')
        }
    },[LogInStateRed])

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                {/* <h3>Hello, {location.state}</h3> */}
                {/* <button style={{ marginTop: '1rem' }} onClick={handleLogout}>Logout</button> */}
            </div>
        </>
    )
}

export default Home;