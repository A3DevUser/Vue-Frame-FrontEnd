import React, { useEffect } from 'react'
import PartySheetTable from './PartySheetTable'
import { useDispatch, useSelector } from 'react-redux'
import { MainObject } from '../../../Component/Elements/commonFun'
import { FetchA3PartyColumnData } from '../../../Store/Actions/A3PartyColumnAct'
import { FetchA3TestData } from '../../../Store/Actions/A3TestDataAct'

const Partysheet = () => {
  
  const dispatch = useDispatch()

  const A3PartyColumnRed = useSelector((state)=>state.A3PartyColumnRed)
  const A3TestRed = useSelector((state)=>state.A3TestRed)
  const FormIdRed = useSelector((state)=>state.FormIdRed)
  const AuthRed = useSelector((state)=>state.AuthRed)
  const mainObjDataRed = useSelector((state)=>state.mainObjDataRed)



  useEffect(()=>{
    dispatch( FetchA3PartyColumnData(FormIdRed,AuthRed.val))
    dispatch(FetchA3TestData(FormIdRed,AuthRed.val))
  },[])


  return (
    <>
    {/* partysheet */}
    { 
    A3PartyColumnRed.loading ? MainObject.loader() :
    A3TestRed.loading ? MainObject.loader() :
    <PartySheetTable accData={[mainObjDataRed.vendor_name]} col={A3PartyColumnRed.val} dData={A3TestRed.val}/>
    }
    </>
  )
}

export default Partysheet