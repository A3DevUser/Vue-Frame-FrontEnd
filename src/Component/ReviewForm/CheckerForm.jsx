import React, { useEffect } from 'react'
import CheckerFormTab from './CheckerFormTab'
import { Columns } from '../../Component/ReportTable/Columns'
import MOCK_DATA from '../ReportTable/MOCK_DATA_TAB.json'
import { useDispatch, useSelector } from 'react-redux'
import { FetchA3ColumnData } from '../../Store/Actions/A3ColumnAct'
import { MainObject } from '../../Component/Elements/commonFun'
import { FetchReviewPlanDataData } from '../../Store/Actions/ReviewPlanDataAct'

const CheckerForm = () => {

    const dispatch = useDispatch()
    const A3ColumnRed = useSelector((state)=>state.A3ColumnRed)
    const ReviewPlanDataRed = useSelector((state)=>state.ReviewPlanDataRed)
    const AuthRed = useSelector((state)=>state.AuthRed)



    useEffect(()=>{
        dispatch(FetchA3ColumnData('FORM-885','home',AuthRed.val))
        dispatch(FetchReviewPlanDataData('Rev-126',AuthRed.val))
    },[])

  return (
    <>
    {
        A3ColumnRed.loading ? MainObject.loader() :
        ReviewPlanDataRed.loading ? MainObject.loader() :
        <CheckerFormTab columnData={A3ColumnRed.val} reportData={ReviewPlanDataRed.val}/>

    }
    </>
  )
}

export default CheckerForm