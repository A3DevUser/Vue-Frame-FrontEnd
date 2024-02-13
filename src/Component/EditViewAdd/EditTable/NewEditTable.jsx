import React, { useEffect } from 'react'
import EditTableComp from './EditTableComp'
import MOCK_DATA from '../../ReportTable/MOCK_DATA_TAB.json'
import {Columns} from '../../ReportTable/Columns'
import { FetchGridData } from '../../../Store/Actions/GridAct'
import { FetchColumnEditActData } from '../../../Store/Actions/ColumnEditAct'
import { FetchGetData } from '../../../Store/Actions/GetDataAct'
import { FormIdAct } from '../../../Store/Actions/GeneralStates'
import { useLocation, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { MainObject } from '../../../Component/Elements/commonFun'

const NewEditTable = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const GridRed = useSelector((state)=>state.GridRed)
    const ColumnEditActRed = useSelector((state)=> state.ColumnEditActRed)
    const GetDataRed = useSelector((state)=> state.GetDataRed)
    const AuthRed = useSelector((state)=>state.AuthRed)
    const UserDataStateRed = useSelector((state)=>state.UserDataStateRed)
    





    useEffect(()=>{
        // console.log('locationVal',location);
      dispatch(FetchGridData(location.state.formId,AuthRed.val))
      // dispatch(FetchColumnData(FormIdRed,'yes',AuthRed.val))   
      dispatch(FetchColumnEditActData(location.state.formId,UserDataStateRed,AuthRed.val))
      // dispatch(FetchGetData(FormIdRed,AuthRed.val,UserDataStateRed,'NO_VALUE'))
      dispatch(FetchGetData(location.state.formId,AuthRed.val,UserDataStateRed,location.state.daysFlag))
      dispatch(FormIdAct(location.state.formId))
      },[location])

  return (
    <>
    {
      GridRed.loading ? MainObject.loader() :
      // ColumnRed.loading ? MainObject.loader() :
      ColumnEditActRed.loading ? MainObject.loader() :
      GetDataRed.loading ? MainObject.loader() :
      GridRed.val.filter((fil)=>{return fil.isMain }).map((res,i)=>{
        return     <EditTableComp columnData={ColumnEditActRed.val.sort((a,b)=>{return a.orderNo-b.orderNo})} tableData={GetDataRed.val.filter((fil)=>{return fil.GRID_ID == res.gridId})[0].DATA } gridData={res} />

      })
    }
    </>
  )
}

export default NewEditTable