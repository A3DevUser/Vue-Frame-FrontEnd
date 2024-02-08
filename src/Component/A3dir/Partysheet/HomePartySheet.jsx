import React, { useEffect } from 'react'
import PartySheetTable from './PartySheetTable'
import { FetchA3PartyColumnData } from '../../../Store/Actions/A3PartyColumnAct'
import { FetchA3TestData } from '../../../Store/Actions/A3TestDataAct'
import { useDispatch, useSelector } from 'react-redux'
import { MainObject } from '../../../Component/Elements/commonFun'
import { useLocation } from 'react-router'

const HomePartySheet = () => {

    const dispatch = useDispatch()
    const location = useLocation()

    const A3PartyColumnRed = useSelector((state)=>state.A3PartyColumnRed)
    const A3TestRed = useSelector((state)=>state.A3TestRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)
    const AuthRed = useSelector((state)=>state.AuthRed)

    useEffect(()=>{
        dispatch( FetchA3PartyColumnData(FormIdRed,'party',AuthRed.val))
        dispatch(FetchA3TestData(FormIdRed,AuthRed.val))
      },[])

      // useEffect(()=>{
      //   console.log('locationSheet',location)
      // },[location])
    //   location.state.accArr
  return (
    <>
    {
        A3PartyColumnRed.loading ? MainObject.loader() :
        A3TestRed.loading ? MainObject.loader() :
    <PartySheetTable col={A3PartyColumnRed.val} dData={A3TestRed.val} accData ={location.state.accArr} tableData={[]} />
    }
    </>
  )
}

export default HomePartySheet