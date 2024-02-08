import React, { useEffect } from 'react'
import { FetchA3ColumnData } from '../../Store/Actions/A3ColumnAct'
import { MainObject } from '../../Component/Elements/commonFun'
import { useDispatch, useSelector } from 'react-redux'
import { FetchReviewType } from '../../Store/Actions/ReviewFilterAct'
import ReportReviewHome from './ReportReviewHome'

const ReportReviewForm = () => {

    const dispatch = useDispatch()
    const AuthRed = useSelector((state)=>state.AuthRed)
    const A3ColumnRed = useSelector((state)=>state.A3ColumnRed)
    const A3HomeDataRed = useSelector((state)=>state.A3HomeDataRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)
    const ReviewPlanDataRed = useSelector((state)=> state.ReviewPlanDataRed)

    useEffect(()=>{
        dispatch(FetchA3ColumnData(FormIdRed,'home',AuthRed.val))
        dispatch(FetchReviewType(AuthRed.val))
    },[])

//     useEffect(() => {
// console.log('NewRptDataChk',A3ColumnRed)
//     },[A3ColumnRed])

  return (
    <>
    {
        A3ColumnRed.loading ? MainObject.loader() :
        ReviewPlanDataRed.loading ? MainObject.loader() :
        <ReportReviewHome columnData={A3ColumnRed.val} reportData={ReviewPlanDataRed.val}/>
    }
    </>
  )
}

export default ReportReviewForm