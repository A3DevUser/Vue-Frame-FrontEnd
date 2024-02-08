import React, { useEffect, useState } from 'react'
import NewA3HomeTable from './NewA3HomeTable'
import { Columns } from '../../Component/ReportTable/Columns'
import MOCK_DATA from '../ReportTable/MOCK_DATA_TAB.json'
import './NewA3HomeSheet.css'
import NewA3HomeHead from './NewA3HomeHead'
import { useDispatch, useSelector } from 'react-redux'
import { FetchA3PartyColumnData } from '../../Store/Actions/A3PartyColumnAct'
import { MainObject } from '../../Component/Elements/commonFun'
import { useLocation, useNavigate } from 'react-router'
import { FetchA3HomeDataData } from '../../Store/Actions/A3HomeDataAct'

const NewA3HomeSheet = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const AuthRed = useSelector((state)=>state.AuthRed)
    const A3PartyColumnRed = useSelector((state)=>state.A3PartyColumnRed)
    const A3HomeDataRed = useSelector((state)=>state.A3HomeDataRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)
    const [vendorType,setvendorType] = useState('')
    const [selected,setSelected] = useState({})


    useEffect(()=>{
        dispatch(FetchA3PartyColumnData(FormIdRed,'home',AuthRed.val))
        const reviewId = location.state.reviewId
        dispatch(FetchA3HomeDataData(reviewId,'New',AuthRed.val))
    },[])

    const getA3HomeData = (e) =>{
        setvendorType(e.target.value)
    }
    function getData(){
        const reviewId = location.state.reviewId
        dispatch(FetchA3HomeDataData(reviewId,vendorType,AuthRed.val))
    }

    const handleNavigate = () =>{
        // console.log('location.state',location.state.daysFlag)
        navigate('/a3PartySheet',{state:{
            data : selected.length >= 1 ? selected.map((res) => {
                return res.original
            }) : A3HomeDataRed.val , vendorType:vendorType, daysFlag: location.state.daysFlag
        }})
    }

    // console.log('A3HomeDataRedValues',selected.map((res) => {
    //     return res.original
    // }))//A3HomeDataRed.val

    // console.log('A3HomeDataRedValues',selected.length)

  return (
    <>
    <div className='homeMainDiv'>
        <div className='homeHeader'>
            <NewA3HomeHead getA3HomeData={getA3HomeData} getData={getData} location={location} handleNavigate={handleNavigate}/>
        </div>
        {/* <div className='generateDiv'>
            <button className='btn btn-success' onClick={handleNavigate}>Generate</button>
        </div> */}
        <div className='homeTable'>
            {
                A3PartyColumnRed.loading ? MainObject.loader() :
                A3HomeDataRed.loading ? MainObject.loader() :
        <NewA3HomeTable columnData={A3PartyColumnRed.val.sort((a,b) => {return a.orderBy - b.orderBy})} tableData={A3HomeDataRed.val} setSelected={setSelected}/>
            }
        </div>
    </div>
    </>
  )
}

export default NewA3HomeSheet