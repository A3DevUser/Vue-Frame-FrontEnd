import React, { useEffect } from 'react'
import NewPartySheetTable from './NewPartySheetTable'
import { Columns } from '../../Component/ReportTable/Columns'
import MOCK_DATA from '../ReportTable/MOCK_DATA_TAB.json'
import { useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { MainObject } from '../../Component/Elements/commonFun'
import { FetchA3PartyColumnData } from '../../Store/Actions/A3PartyColumnAct'
import { FetchA3TestData } from '../../Store/Actions/A3TestDataAct'


const NewPartySheet = () => {

  const location = useLocation()
  const dispatch = useDispatch()
  const FormIdRed = useSelector((state)=>state.FormIdRed)
  const A3PartyColumnRed = useSelector((state)=>state.A3PartyColumnRed)
  const AuthRed = useSelector((state)=>state.AuthRed)
  const A3TestRed = useSelector((state) => state.A3TestRed);
  const vendorData = location.state.data
  console.log('vendorData',vendorData)
  const vendorList =  vendorData.map((res)=>{
    return res.ASSOCIATE_VEND
  })

  console.log('location.state',location.state)
  useEffect(()=>{
    dispatch(FetchA3PartyColumnData(FormIdRed,'party',AuthRed.val))
    dispatch(FetchA3TestData('TPRM New vendor risk assessment - TPRE',location.state.vendorType,AuthRed.val))
  },[])

  return (
    <>
    {
      A3PartyColumnRed.loading ? MainObject.loader() :
      A3TestRed.loading ? MainObject.loader() :
    <NewPartySheetTable columnData={A3PartyColumnRed.val} tableData={A3TestRed.val} vendorList={vendorList}  />
    }
    </>
  )
}

export default NewPartySheet