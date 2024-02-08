import React, { useEffect } from 'react'
import CheckerFormTab from './CheckerFormTab'
import { Columns } from '../../Component/ReportTable/Columns'
import MOCK_DATA from '../ReportTable/MOCK_DATA_TAB.json'
import { useDispatch, useSelector } from 'react-redux'
import { FetchA3ColumnData } from '../../Store/Actions/A3ColumnAct'
import { MainObject } from '../../Component/Elements/commonFun'
import { FetchReviewPlanDataData } from '../../Store/Actions/ReviewPlanDataAct'
import { useLocation } from 'react-router'

const CheckerForm = () => {

    const dispatch = useDispatch()
    const A3ColumnRed = useSelector((state)=>state.A3ColumnRed)
    const ReviewPlanDataRed = useSelector((state)=>state.ReviewPlanDataRed)
    const AuthRed = useSelector((state)=>state.AuthRed)
    const location = useLocation()



    useEffect(()=>{
        dispatch(FetchA3ColumnData('FORM-885','home',AuthRed.val))
        dispatch(FetchReviewPlanDataData(location.state.reviewId,AuthRed.val))
    },[])

    // useEffect(() => {
    //   console.log('final row ID',location.state.reviewId)
    // },[location])

  return (
    <>
    {
        A3ColumnRed.loading ? MainObject.loader() :
        ReviewPlanDataRed.loading ? MainObject.loader() :
        <CheckerFormTab reviewId={location.state.reviewId} reviewName={location.state.reviewName} review_freq={location.state.review_freq} sub_frequency={location.state.sub_frequency} review_type={location.state.review_type} columnData={A3ColumnRed.val.sort((a,b) => {return a.orderBy - b.orderBy})} reportData={ReviewPlanDataRed.val}/>

    }
    </>
  )
}

export default CheckerForm