import React, { useEffect, useState } from 'react'
import './LogInPage.css'
import ClaptekLogo from './CSS/images/claptek-logo.svg'
import loginimage from './CSS/images/login-image.svg'
// import Banner from './Images/banner.jpg'
// import loginImg from './Images/login_image.jpg'
// import poweredBy from './Images/powered_by-vue.jpg'
import LoadingBar from 'react-top-loading-bar'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { AuthToken } from '../../Store/Actions/Authentication'
import { LogInState, UserDataState } from '../../Store/Actions/GeneralStates'


const LogInPage = () => {
    const [data, setData] = useState([{
        username: "",
        password: ""
    }]);
    const [userData, setUserData] = useState([]);
    const [selectedName, setSelectedName] = useState('');


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const AuthRed = useSelector((state)=>state.AuthRed)
    const LogInStateRed = useSelector((state)=>state.LogInStateRed)


    const handelInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    // useEffect(() => {
    //     // Retrieve user credentials from session storage on component mount
    //     const storedUsername = sessionStorage.getItem('username');
    //     const storedPassword = sessionStorage.getItem('password');
    //     if (storedUsername && storedPassword) {
    //         setData({
    //             username: storedUsername,
    //             password: storedPassword
    //         });
    //     }
    // }, []);

    const handleButton = () => {
        const fullName = `${data.username} ${data.password}`;
        setUserData([...userData, fullName]);
        setSelectedName(fullName);
        // console.log("User Data is " + data.username + " " + data.password)
        // dispatch(AuthToken())
        // sessionStorage.setItem('username', data.username);
        // sessionStorage.setItem('password', data.password);
    }

    // useEffect(()=>{
    //     dispatch(AuthToken({email:'john@mail.com', password:'changeme'}))
    // })

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!data.username && !data.password) {
            alert('Both fields are empty.');
        } else if (!data.username) {
            alert('UserName is empty.');
        } else if (!data.password) {
            alert('Paasword is empty.');
        } else {
            // console.log(data)
            dispatch(AuthToken({username:data.username, password:data.password}))
            dispatch(UserDataState(data.username))

            handleButton(); // Call your custom function to handle the form data
            
        }
    };
    
    useEffect(()=>{
        if(AuthRed.loading==false&&LogInStateRed == true){
            // dispatch(LogInState(true))
            // navigate('/homepage')
            navigate('/pendencyDashboard')
        }else if(AuthRed.error !==''){
            // console.log('AuthRed',AuthRed)
            alert('Inavlid Username or password')
        }
    },[AuthRed])

    // console.log(userData)
    return (
        <>
            <main className="height-100vh body">
                <section className="w-100 p-0 m-0 h-100">
                    <div className="login-row-div" >
                        <div className="login-left-column padding-30px d-flex flex-column justify-content-center">
                            <div className="logo">
                                <img src={ClaptekLogo} alt="clapteklogo" className="img-fluid" style={{ margin: "2.8rem auto 1.5rem auto" }} />
                            </div>
                            <div className="content d-flex flex-column justify-content-center flex-fill text-center">
                                <div className="text-content-login-left mb-4">
                                    <h1 className="login-heading" style={{ marginBottom: "1.1rem" }}>Welcome To Claptek</h1>
                                    <p className="login-para" >Claptek’s VUEFRAME Advanced CCM & RM adds the power of digital to your audit teams to focus on key and high-risk areas minimising hours of routine follow-ups bringing better results.</p>
                                </div>
                                <div className="text-center">
                                    <img src={loginimage} alt="" className="img-fluid" />
                                    {/* <%-- <img src="Images/login-image.png" alt="" class="img-fluid">--%> */}
                                </div>
                            </div>
                        </div>
                        <div className="login-right-column  d-flex flex-column justify-content-center">
                            <div className="content d-flex flex-column justify-content-center login-form m-auto">
                                <div className
                                    ="form-text-content mb-30px">
                                    <h2 className="form-heading">Login</h2>
                                    <p className="form-para mb-0">Please fill the below details to login your account.</p>
                                </div>
                                {/* Form */}
                                <form name="form1" method="post" onSubmit={handleSubmit}>
                                    <div className="input-holder w-100 mb-20px">
                                        <label htmlFor="exampleInputText1" className="form-label login-form-label">
                                            User ID
                                        </label>
                                        <input
                                            type="text" className="login-input form-control"
                                            id="exampleInputText1"
                                            name="username"
                                            value={data.username}
                                            onChange={handelInputChange}
                                        />
                                    </div>
                                    <div className="input-holder w-100 mb-20px">
                                        <label htmlFor="exampleInputPassword1" className="form-label login-form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="login-input form-control"
                                            id="exampleInputPassword1"
                                            name="password"
                                            value={data.password}
                                            onChange={handelInputChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <a href="#" className="link-text-black forgot-password-link">
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <button onClick={handleButton} type="submit" className="btn-primary-green form-submit-btn">
                                        Login
                                    </button>
                                    {/* <button onClick={handleLogout} className='btn-primary-green form-submit-btn'>LogOut</button> */}
                                    {/* Add error handling logic as needed */}
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </section>
            </main>

            {/* <table width="100%" border="0" cellSpacing="0" cellPadding="0" className="back-image d-none">

                <tr className="d-none">
                    <td align="center" className="login-screen">
                        <table border="0" align="center" cellPadding="0" cellSpacing="0">
                            <tr>
                                <td valign="top">
                                    <div className="banner">
                                        <img src={Banner} alt="VUEFRAME " width="438" height="228" />
                                    </div>
                                    <div id="browserdetails" runat="server">
                                    </div>
                                </td>
                                <td width="25">&nbsp;</td>
                                <td valign="top">
                                    <div className="admin-area">
                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                            <tr>
                                                <td width="42%" valign="top">
                                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                        <tr>
                                                            <td>
                                                                <img src={loginImg} width="81" height="72" alt="VUEFRAME" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="mesaage">
                                                                    Welcome to VUEFrame
                                                                    <br />

                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td width="58%" valign="bottom">
                                                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                                                        <tr>
                                                            <td>
                                                                <br />
                                                                <div className="form">
                                                                    <form>

                                                                        <div className="label">
                                                                            User
                                                                        </div>
                                                                        <div className="text">
                                                                        </div>
                                                                        <div className="label">Password </div>
                                                                        <div className="text">
                                                                        </div>
                                                                        <div className="label">
                                                                        </div>

                                                                    </form>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                    </table>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td colSpan="3">
                                                    <br />

                                                    <strong style={{ color: "red", fontfamily: "kalinga", fontsize: "14px" }}>Please use Google Chrome to access the application</strong>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3">
                                                    <strong>Note:</strong>Enter your Windows UserID (Domain ID) and Password which is used to login in your PC
                                                    If you are not able to login, Please contact your respective FM servicedesk for Domain Id details.
                                                    <br />
                                                    <p>New User / Role Mapping /Location Updation/ID Enabling:-</p>
                                                    <ul>
                                                        <li>For ID creation , raise request throught iSAC
                                                        </li>
                                                        <li>Incase of Id Inactive "ID inactive, Initiate the user id enable request through i-SAC to enable your id
                                                        </li>
                                                        <li>Incase of Id Locked "ID locked,Initiate the user id enable request through i-SAC TO enable your id
                                                        </li>
                                                        <li>In case of ID Dormant "ID dormant,Initiate the user id enable request through i-SAC to enable your id
                                                        </li>
                                                        <li>In case of user Resigned / id deleted "ID deleted,Initiate the new user id creation request through i-SAC to re-create your id
                                                        </li>
                                                    </ul>

                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr className="d-none">
                    <td>
                        <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                            <tr className="footer1">
                                <td className="footer1">
                                    <div className="copyright">Copyright © Claptek Private Limited.</div>
                                </td>
                                <td className="footer1" align="center">
                                    <div className="legalmsg">This is a private, restricted system for authorized users only.</div>
                                </td>
                                <td className="footer1" align="right">
                                    <div className="powered-logo">&nbsp;<img src={poweredBy} alt="VUEFRAME" /></div>
                                </td>
                            </tr>
                        </table>
                    </td>

                </tr>
            </table> */}
        </>
    )
}

export default LogInPage;