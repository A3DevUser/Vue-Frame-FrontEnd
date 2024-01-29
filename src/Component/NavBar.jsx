import React, { useEffect, useState } from 'react'
import { MainObject } from './Elements/commonFun' 
import { useDispatch,useSelector } from 'react-redux'
import { Button, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FetchNavbarData } from '../Store/Actions/NavBar'
import { EmdAct, FormDataAct, FormIdAct, ResetAct } from '../Store/Actions/GeneralStates'
import { Modal } from 'react-bootstrap'
// import Dropdown from 'react-dropdown';
import './Nabar.css'
import { FetchActionData } from '../Store/Actions/ActionAct'
import { FetchImportColumnData } from '../Store/Actions/ImportColumnAct'
import { FetchImportGridData } from '../Store/Actions/ImportGridAct'
import Dropdown from 'react-multilevel-dropdown';
import ReportForm from './Report/ReportForm'


const Navbar = () => {

    const [show,setshow] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const NavBarRed = useSelector((state)=>state.NavBarRed)
    const AuthRed = useSelector((state)=>state.AuthRed)
    const ImportColumnRed = useSelector((state)=>state.ImportColumnRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)

    useEffect(()=>{
        dispatch(FetchNavbarData(AuthRed.val))
    },[AuthRed])

    // console.log('NavBarRed',[...new Set(NavBarRed.val.filter((fil)=>{return fil.cat !== null}).map((nres)=>{return nres.cat}))])


    const handleNavigate = (res) =>{
        sessionStorage.setItem('formId',res.formId)
        if(res.emd=='yes' || res.emd =='no'){
            dispatch(FetchActionData('madhur1',AuthRed.val))
        }
        // dispatch(FormDataAct({}))
        dispatch(FormIdAct(res.formId))
        if(res.emd){
            sessionStorage.setItem('emd',res.emd)
            dispatch(EmdAct(res.emd))
        }
        if (res.formId == 'FORM-309'){
            if(res.emd=='add'){
                navigate('/useraddTable')
            }else if(res.emd=='yes'){
                navigate('/usereditTable')
            }else if(res.emd=='no'){
                navigate('/userviewTable')
            }
        }else if(res.formId == 'FORM-885'){
            navigate('/reviewPlan')
        }
        else{
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
        // if(res.emd=='add'){
        //     navigate('/addTable')
        // }else if(res.emd=='yes'){
        //     navigate('/editTable')
        // }else if(res.emd=='no'){
        //     navigate('/viewTable')
        // }else if(res.emd=='Useradd'){
        //     navigate('/useraddTable')
        // }else if(res.emd=='Useryes'){
        //     navigate('/usereditTable')
        // }else if(res.emd=='Userno'){
        //     navigate('/userviewTable')
        // }else{
        //     navigate(res.navigate)
        // }

    }

    function funProfile() {
        setshow(!show)
    }

return (    
<div className='main-navBar' style={{display: window.location.pathname == '/' ? 'none' : 'block',position:'sticky', top :'0',zIndex:'5'}}>
<nav 
// style={{backgroundColor:'#131D40'}}
className='navbar-background'
// className="scrollable-dropdown"
>
<div style={{paddingRight:'8px'}}>
<img src={'./User2.png'} alt="user" className='m-1' style={{float:'right',height:'6.5vh', width:'3.2vw', borderRadius:'30px', padding:'3.5px'}} onClick={funProfile}/>
{MainObject.SimpleModal('User Details','',show,funProfile)}
</div>
{/* <Dropdown title='User Access' className='multiDrop'>
{
    NavBarRed.val.filter((fil)=>{
        return fil.navigate=='/GridForm'
    }).map((res)=>{
        return <Dropdown.Item>{res.navName}</Dropdown.Item>
    })
}
</Dropdown> */}
{
    NavBarRed.val.map((res,i)=>{
        if(res.navType=='img'){
            return <img src={res.url} alt="logo" onClick={()=>{navigate('/pendencyDashboard')}} style={{width:'10vw', height:'4vw', cursor:'pointer'}}  key={i}/>

        }else if(res.navType=='conf'){
            return<NavDropdown className='ddClass' title={<span class="bi bi-gear customIcon"></span>} key={i}>
                {/* <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : 'FORM-105',navigate:'/confform'})}}>Form Confg</NavDropdown.Item> */}
                {/* <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : 'FORM-106',navigate:'/confform'})}}>WorkFlow Confg</NavDropdown.Item> */}
                {/* <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : 'FORM-529',navigate:'/confEdit'})}}>Form</NavDropdown.Item>
                <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : 'FORM-601',navigate:'/confEdit'})}}>WorkFlow</NavDropdown.Item>
                <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : 'FORM-203',navigate:'/confreport'})}}>Report</NavDropdown.Item>
                <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : 'FORM-202',navigate:'/confreport'})}}>Data Source</NavDropdown.Item>
                <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : 'FORM-528',navigate:'/confEdit'})}}>Import & Export</NavDropdown.Item>
                <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : 'FORM-528',navigate:'/pendencyDashboard'})}}>Pendency Dashboard</NavDropdown.Item> */}
                <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : 'FORM-529',navigate:'/confEdit'})}}>Form</NavDropdown.Item>
                <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : 'FORM-601',navigate:'/confEdit'})}}>WorkFlow</NavDropdown.Item>
                <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : 'FORM-865',navigate:'/confEdit'})}}>Data Source</NavDropdown.Item>
                <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : 'FORM-864',navigate:'/confEdit'})}}>Report</NavDropdown.Item>
                <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : 'FORM-528',navigate:'/confEdit'})}}>Import & Export</NavDropdown.Item>
                <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : 'FORM-528',navigate:'/pendencyDashboard'})}}>Pendency Dashboard</NavDropdown.Item>
            </NavDropdown>
            // <button onClick={()=>{handleNavigate(res)}} key={i} 
            // className=' btn btn-sm my-1 mx-2 p-2' 
            // style={{backgroundColor:'#131D40', color:'white', float:'right'}}
            // >{res.navName}</button>
            // }else if (res.navType == 'btn'){
            //     return <button onClick={()=>{handleNavigate({formId : 'FORM-502',emd :'add'})}} key={i} className=' btn btn-sm my-1 mx-2 p-2' style={{backgroundColor:'#131D40', color:'white', float:'right'}}>Import & Export</button>
                // return <NavDropdown className='ddClass' title={<span class="bi bi-gear customIcon"></span>} key={i}>
                // <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : 'FORM-502',navigate:'/GridForm'})}}>Import & Export</NavDropdown.Item>
                // </NavDropdown>

        }else if (res.navigate=='/GridForm'){
            // return  <Dropdown title={res.navName} className = 'multiDrop' >
            //     <Dropdown.Item>{`View ${res.navName}`}</Dropdown.Item>
            //     <Dropdown.Item>{`Edit ${res.navName}`}</Dropdown.Item>
            //     <Dropdown.Item>{`Add ${res.navName}`}</Dropdown.Item>
            // </Dropdown>
        //     <NavDropdown className='ddClassEle' title={res.navName} key={i} >
        //     <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : res.formId,navigate:res.navigate,emd :'no'})}}>{`View ${res.navName}`}</NavDropdown.Item>
        //     <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : res.formId,navigate:res.navigate,emd :'yes'})}}>{`Edit ${res.navName}`}</NavDropdown.Item>
        //     <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : res.formId,navigate:res.navigate,emd:'add'})}}>{`Add ${res.navName}`}</NavDropdown.Item>
        // </NavDropdown>
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
{
    [...new Set(NavBarRed.val.filter((fil)=>{return fil.cat !== null}).map((nres)=>{return nres.cat}))].map((res,i)=>{
        return<NavDropdown className='ddClassEle' title={res} key={i}>
                {NavBarRed.val.filter((fil)=>{return fil.cat == res}).map((nres)=>{
                    if (nres.navigate == '/confreport'){
                        return <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : nres.formId,navigate:'/reportForm'})}}>{nres.navName}</NavDropdown.Item>
                    }else{
                        return <NavDropdown.Item className='click' onClick={()=>{handleNavigate({formId : nres.formId,navigate:nres.navigate,emd:'add'})}}>{nres.navName}</NavDropdown.Item>
                    }
                })}
            </NavDropdown>
        // return <Dropdown title={res} className='multiDrop' position='right'>
        //     {
        //         NavBarRed.val.filter((fil)=>{return fil.cat == res}).map((nres)=>{
        //             // console.log('Nav Bar Details',nres)
        //             if (nres.navigate == '/confreport'){
        //                 return <Dropdown.Item>
        //                 {nres.navName}
        //                 {<Dropdown.Submenu position='right'>
        //     <Dropdown.Item onClick={()=>{handleNavigate({formId : nres.formId,navigate:'/reportForm'})}} >{`View ${nres.navName}`}</Dropdown.Item>
        // </Dropdown.Submenu> }
        //             </Dropdown.Item>
        //             }else{
        //             return <Dropdown.Item>
        //                 {nres.navName}
        //                 {<Dropdown.Submenu position='right'>
        //     {/* <Dropdown.Item onClick={()=>{handleNavigate({formId : nres.formId,navigate:nres.navigate,emd :'no'})}} >{`View ${nres.navName}`}</Dropdown.Item>
        //     <Dropdown.Item onClick={()=>{handleNavigate({formId : nres.formId,navigate:nres.navigate,emd :'yes'})}}>{`Edit ${nres.navName}`}</Dropdown.Item> */}
        //     <Dropdown.Item onClick={()=>{handleNavigate({formId : nres.formId,navigate:nres.navigate,emd:'add'})}}>{`Add ${nres.navName}`}</Dropdown.Item>
        // </Dropdown.Submenu> }
        //             </Dropdown.Item>}
        //         })
        //     }
        // </Dropdown>
    })
}
{/* <Dropdown title='User Access' className='multiDrop' position='right'>
{
    NavBarRed.val.filter((fil)=>{
        return fil.navigate=='/GridForm'
    }).map((res)=>{
        return <Dropdown.Item>{res.navName}
        <Dropdown.Submenu position='right'>
            <Dropdown.Item onClick={()=>{handleNavigate({formId : res.formId,navigate:res.navigate,emd :'no'})}} >{`View ${res.navName}`}</Dropdown.Item>
            <Dropdown.Item onClick={()=>{handleNavigate({formId : res.formId,navigate:res.navigate,emd :'yes'})}}>{`Edit ${res.navName}`}</Dropdown.Item>
            <Dropdown.Item onClick={()=>{handleNavigate({formId : res.formId,navigate:res.navigate,emd:'add'})}}>{`Add ${res.navName}`}</Dropdown.Item>
        </Dropdown.Submenu>
        </Dropdown.Item>
    })
}
</Dropdown> */}
</nav></div>
)
}

export default Navbar