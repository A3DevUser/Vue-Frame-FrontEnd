import React, { useEffect } from 'react'
import ReviewHome from './ReviewHome'
import { FetchA3ColumnData } from '../../Store/Actions/A3ColumnAct'
import { MainObject } from '../../Component/Elements/commonFun'
import { useDispatch, useSelector } from 'react-redux'
import { FetchReviewType } from '../../Store/Actions/ReviewFilterAct'

const ReviewForm = () => {

    const dispatch = useDispatch()
    const AuthRed = useSelector((state)=>state.AuthRed)
    const A3ColumnRed = useSelector((state)=>state.A3ColumnRed)
    const A3HomeDataRed = useSelector((state)=>state.A3HomeDataRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)

    useEffect(()=>{
        dispatch(FetchA3ColumnData(FormIdRed,'home',AuthRed.val))
        dispatch(FetchReviewType(AuthRed.val))
    },[])

  return (
    <>
    {
        A3ColumnRed.loading ? MainObject.loader() :
        <ReviewHome columnData={A3ColumnRed.val.sort((a,b)=> a.orderBy - b.orderBy)} reportData={[]}/>
    }
    </>
  )
}

export default ReviewForm