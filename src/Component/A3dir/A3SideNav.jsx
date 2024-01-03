import React, { useEffect, useState } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import '../../Component/Report/LeftSidebar.css'
import { useDispatch, useSelector } from 'react-redux';
import { FetchA3AreaDataData } from '../../Store/Actions/A3AreaDataAct';
import { FetchA3ProductDataData } from '../../Store/Actions/A3ProductDataAct';
import { MainObject } from '../../Component/Elements/commonFun';
import { FetchA3ColumnData } from '../../Store/Actions/A3ColumnAct';
import { FetchA3HomeDataData } from '../../Store/Actions/A3HomeDataAct';


const A3SideNav = () => {
    const [isExpanded, setExpanded] = useState(true);
    const [filVal,setFilVal] = useState({area:'',product:''})
    const [filData,setfilData] = useState()

    const dispatch = useDispatch()

    const A3AreaDataRed = useSelector((state)=>state.A3AreaDataRed)
    const A3ProductDataRed = useSelector((state)=>state.A3ProductDataRed)
    const AuthRed = useSelector((state)=>state.AuthRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)



    const toggleSidebar = () => {
        setExpanded(!isExpanded);   
    };

    useEffect(()=>{
        dispatch(FetchA3AreaDataData('','',AuthRed.val))
    },[])

    function funUpdateFil(event,res){

    }

    function handleAreaChange(e){
        setFilVal({area:e.target.value})
        dispatch(FetchA3ProductDataData(e.target.value,AuthRed.val))
    }

    function handleProductChange(e){
        setFilVal((old) =>{ return {...old,product:e.target.value}})
        dispatch(FetchA3ColumnData(FormIdRed,filVal.area,e.target.value,AuthRed.val))
    }


    function funApplyFil() {
        dispatch(FetchA3HomeDataData(filVal.product,AuthRed.val))
    }

    return (
        <>
                <div className={`left-sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
                    <div className="sidebar-header" onClick={toggleSidebar}>
                        {isExpanded ? (
                            <div className='FilterHeader' >
                                <h4  style={{ display: 'inline-block', fontFamily:'Palatino Linotype' }} >Filter</h4>
                                <IoReorderThreeOutline style={{ fontSize: '2.5em', marginLeft: '4vw' }} />
                                <hr style={{marginTop:'2px' }} />
                            </div>
                        ) : (
                            <IoReorderThreeOutline style={{ fontSize: '2.5em' }} />
                        )}
                    </div>
                    <div style={{overflowY: 'scroll',height: '66vh', overflowX: 'hidden',display: isExpanded ? 'flex' : 'none', flexDirection:'column',alignItems:'center' ,gap:20}} >
                        <div style={{width:'11vw'}}>
                    <label htmlFor='area'><h6 style={{fontFamily:'Palatino Linotype'}}>Area: </h6> </label>
                    <select id='area'  className='form-control' onChange={handleAreaChange} >
                        <option>Select One</option>
                        {
                            A3AreaDataRed.loading ? <option>Loading...</option> :
                            A3AreaDataRed.val.map((res)=>{
                                return (<option>{res}</option>)
                            })
                        }
                        
                    </select>
                    </div>
                    <div style={{width:'11vw'}}>
                    <label htmlFor='product'><h6 style={{fontFamily:'Palatino Linotype'}}>Product:</h6></label>
                    <select id='product' onChange={handleProductChange} className='form-control'>
                    <option>Select One</option>

                        {
                            A3ProductDataRed.loading ? <option>Loading...</option> :
                            A3ProductDataRed.val.map((res)=>{
                                return <option>{res}</option>
                            })
                        }
                    </select>
                    </div>
                    </div>
                </div>
                <div className="sidebar-footer" style={{ display: isExpanded ? 'block' : 'none' }}>
                    <hr />
                    <button className="btn btn-secondary" style={{ marginLeft: '2em',fontFamily:'Palatino Linotype' }} onClick={funApplyFil}>Apply Filter</button>
                </div>

        </>
    );
};

export default A3SideNav