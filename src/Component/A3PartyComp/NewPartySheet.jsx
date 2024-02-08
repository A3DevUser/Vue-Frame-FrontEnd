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
  const revData = location.state.dataRow
  // console.log('vendorData',vendorData)
  const vendorList =  vendorData.map((res)=>{
    // console.log('newIdGet',res)
    // return res.ASSOCIATE_VEND
    return res.VF_MAIN_OBJ_ID
  })

  // console.log('revDataValues',revData)

  useEffect(()=>{
    // dispatch(FetchA3PartyColumnData(FormIdRed,'party',AuthRed.val));
    // dispatch(FetchA3TestData('TPRM New vendor risk assessment - TPRE',location.state.vendorType,AuthRed.val));
    dispatch(FetchA3PartyColumnData('Third Party Risk Evaluation$$Third Party Risk Evaluation', 'party', AuthRed.val));
    dispatch(FetchA3TestData('Third Party Risk Evaluation$$Third Party Risk Evaluation','Pre Onboarding$$Pre Onboarding' ,AuthRed.val));
  },[dispatch])

  return (
    <>
    {
      A3PartyColumnRed.loading ? MainObject.loader() :
      A3TestRed.loading ? MainObject.loader() :
    <NewPartySheetTable columnData={A3PartyColumnRed.val} tableData={A3TestRed.val} vendorList={vendorList}  daysFlag={location.state.daysFlag}/>
    }
    </>
  )
}

export default NewPartySheet