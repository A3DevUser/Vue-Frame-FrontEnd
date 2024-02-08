import React from 'react'
import PendencyTab from './PendencyTab'
import { useState } from 'react'
import { PendColumnHeader } from './PendencyColHead'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { FetchPendencyColData } from '../../Store/Actions/PendencyColAct'
import { MainObject } from '../../Component/Elements/commonFun'
import { FormIdAct } from '../../Store/Actions/GeneralStates'
import { FetchPendencyData } from '../../Store/Actions/PendencyDataAct'
import { FetchGetData } from '../../Store/Actions/GetDataAct'

const PendencyDashboard = () => {

  const PendencyColRed = useSelector((state) => state.PendencyColRed)
  const PendencyDataRed = useSelector((state) => state.PendencyDataRed)
  const UserDataStateRed = useSelector((state) => state.UserDataStateRed)
  const AuthRed = useSelector((state)=>state.AuthRed)
  const dispatch = useDispatch()

  //  function handleFormId(formId,daysFlag) {
  //   dispatch(FormIdAct(formId))
  //   // dispatch(FetchGetData(formId,AuthRed.val,UserDataStateRed,daysFlag))
  // }

  useEffect(() => {
    dispatch(FetchPendencyColData(AuthRed.val))
    dispatch(FetchPendencyData(UserDataStateRed,AuthRed.val))
  },[UserDataStateRed])

    let titleData = [{"Title":"Pendency Dashboard"}]

    // let columnData = [{"Column_ID":"col-001","colName":"Assigment_Name","colLabel":"Assigment Name"},{"Column_ID":"col-002","colName":"Zero_Three","cellType":"link","colLabel":"0 to 3 Days"},{"Column_ID":"col-003","colName":"Four_Six","cellType":"link","colLabel":"4 to 6 Days"},{"Column_ID":"col-004","colName":"Seven_Nine","cellType":"link","colLabel":"7 to 9 Days"},{"Column_ID":"col-005","colName":"Above_Ten","colLabel":"Above 10 Days","cellType":"link"}]

    let pendencyData = [{"assigmentName":"Vendor Contact","zeroThree":"1","fourSix":"5","sevenNine":"2","aboveTen":"0"},{"assigmentName":"Cost Code","zeroThree":"0","fourSix":"0","sevenNine":"0","aboveTen":"11"},{"assigmentName":"Activity Master","zeroThree":"0","fourSix":"0","sevenNine":"0","aboveTen":"0"},{"assigmentName":"Vendor On Boarding","zeroThree":"0","fourSix":"0","sevenNine":"11","aboveTen":"11"}]

    // let pendencyData = [{"Assigment_Name":"Vendor Contact","Zero_Three":"1","Four_Six":"5","Seven_Nine":"2","Above_Ten":"0"},{"Assigment_Name":"Cost Code","Zero_Three":"0","Four_Six":"0","Seven_Nine":"0","Above_Ten":"11"},{"Assigment_Name":"Activity Master","Zero_Three":"0","Four_Six":"0","Seven_Nine":"0","Above_Ten":"0"},{"Assigment_Name":"Vendor On Boarding","Zero_Three":"0","Four_Six":"0","Seven_Nine":"11","Above_Ten":"11"}]

    // console.log('PendencyDataRed',JSON.stringify(PendencyDataRed.val))

  return (<>
  {
    PendencyColRed.loading ? MainObject.loader() : PendencyDataRed.loading ? MainObject.loader() :
    <PendencyTab titleData={titleData} columnData={PendencyColRed.val.sort((a,b) => parseInt(a.columnId) - parseInt(b.columnId))} pendencyData={PendencyDataRed.val} />
    }</>
  )
}

export default PendencyDashboard