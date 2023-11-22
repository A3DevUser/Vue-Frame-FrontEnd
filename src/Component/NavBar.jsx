import React, { useEffect, useState } from 'react'
import { MainObject } from './Elements/commonFun' 
import { useDispatch,useSelector } from 'react-redux'
import { Button, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FetchNavbarData } from '../Store/Actions/NavBar'
import { EmdAct, FormDataAct, FormIdAct, ResetAct } from '../Store/Actions/GeneralStates'
import { Modal } from 'react-bootstrap'
import Dropdown from 'react-dropdown';
import './Nabar.css'
import { FetchActionData } from '../Store/Actions/ActionAct'


const Navbar = () => {

    const [show,setshow] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const NavBarRed = useSelector((state)=>state.NavBarRed)
    const AuthRed = useSelector((state)=>state.AuthRed)

    useEffect(()=>{
        dispatch(FetchNavbarData(AuthRed.val))
    },[AuthRed])

    const handleNavigate = (res) =>{
        if(res.emd=='yes' || res.emd =='no'){
            dispatch(FetchActionData('madhur1',AuthRed.val))
        }
        dispatch(FormDataAct({}))
        dispatch(FormIdAct(res.formId))
        if(res.emd){
            dispatch(EmdAct(res.emd))
        }
        if(res.emd=='add'){
            navigate('/addTable')
        }else if(res.emd=='yes'){
            navigate('/editTable')
        }else if(res.emd=='no'){
            navigate('/viewTable')
        }else{
            navigate(res.navigate)
        }

    }

    function funProfile() {
        setshow(!show)
    }

return (
<div style={{display: window.location.pathname == '/' ? 'none' : 'block'}}>
<nav 
// style={{backgroundColor:'#131D40'}}
className='navbar-background'
>
<img src={'./User2.png'} alt="user" className='m-1' style={{float:'right',height:'6.5vh', width:'3.2vw', borderRadius:'30px'}} onClick={funProfile}/>
{MainObject.SimpleModal('User Details','',show,funProfile)}
{
    NavBarRed.val.map((res,i)=>{
        if(res.navType=='img'){
            return <img src={res.url} alt="logo" style={{width:'10vw', height:'4vw'}} key={i}/>

        }else if(res.navType=='conf'){
            return<NavDropdown className='ddClass' title={<span class="bi bi-gear customIcon"></span>} key={i}>
                <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : 'FORM-105',navigate:'/confform'})}}>Form Confg</NavDropdown.Item>
                <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : 'FORM-106',navigate:'/confform'})}}>WorkFlow Confg</NavDropdown.Item>
            </NavDropdown>
            // <button onClick={()=>{handleNavigate(res)}} key={i} 
            // className=' btn btn-sm my-1 mx-2 p-2' 
            // style={{backgroundColor:'#131D40', color:'white', float:'right'}}
            // >{res.navName}</button>
        }else if (res.navigate=='/GridForm'){
            return <NavDropdown className='ddClassEle' title={res.navName} key={i} >
            <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : res.formId,navigate:res.navigate,emd :'no'})}}>{`View ${res.navName}`}</NavDropdown.Item>
            <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : res.formId,navigate:res.navigate,emd :'yes'})}}>{`Edit ${res.navName}`}</NavDropdown.Item>
            <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : res.formId,navigate:res.navigate,emd:'add'})}}>{`Add ${res.navName}`}</NavDropdown.Item>
        </NavDropdown>
        }
        else{
            return null
            // <NavDropdown className='ddClassEle' title={res.navName} key={i} >
            //     <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : res.formId,navigate:res.navigate,emd :'no'})}}>{`View ${res.navName}`}</NavDropdown.Item>
            //     <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : res.formId,navigate:res.navigate,emd :'yes'})}}>{`Edit ${res.navName}`}</NavDropdown.Item>
            //     <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : res.formId,navigate:res.navigate,emd:'add'})}}>{`Add ${res.navName}`}</NavDropdown.Item>

            // </NavDropdown>
            
            // <button onClick={()=>{handleNavigate(res)}} key={i} 
            // className=' btn btn-sm my-1 mx-2 p-2' 
            // style={{backgroundColor:'#131D40', color:'white'}}
            // >{res.navName}</button>
        }
    })
}
</nav></div>
)
}

export default Navbar