import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostFormExcelData } from '../../Store/Actions/FormExcelPostAct'
import { FetchWFCommonData } from '../../Store/Actions/WorkFlowCommon'
import { FetchColumnData } from '../../Store/Actions/Column'
import { FetchGridData } from '../../Store/Actions/GridAct'
import { MainObject } from '../Elements/commonFun'
import GridFormSub from '../GridFormSub'
import { FetchGetData } from '../../Store/Actions/GetDataAct'
import { FormIdAct, ResetFormState } from '../../Store/Actions/GeneralStates'
import { FetchConfGridData } from '../../Store/Actions/ConfGridAct'
import { FetchConfColumnData } from '../../Store/Actions/ConfColumn'
import { useNavigate } from 'react-router'

const ConfEdit = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const ColumnRed = useSelector((state)=>state.ConfColumnRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)
    const GridRed = useSelector((state)=>state.ConfGridRed)
    const FormDatRed = useSelector((state)=>state.FormDatRed)
    const EmdRed = useSelector((state)=>state.EmdRed)
    const ExcelDataRed = useSelector((state)=>state.ExcelDataRed)
    const AuthRed = useSelector((state)=>state.AuthRed)
    const GetDataRed = useSelector((state)=> state.GetDataRed)
    const ResetFormRed = useSelector((state)=>state.ResetFormRed)
    const UserDataStateRed = useSelector((state)=>state.UserDataStateRed)

    useEffect(()=>{
    dispatch(FetchConfGridData(FormIdRed,AuthRed.val))
    dispatch(FetchConfColumnData(FormIdRed,AuthRed.val))
    dispatch(FetchGetData(FormIdRed,AuthRed.val,UserDataStateRed))
    },[FormIdRed])

    const handleSave = () =>{
          Object.values(FormDatRed).forEach((res)=>{
            dispatch(PostFormExcelData(res,AuthRed.val)) 
          })

          Object.keys(FormDatRed).forEach((res)=>{
            dispatch(FetchWFCommonData(res,AuthRed.val))
          })

      }


      let FormConfig = 'GID-576'
      let WorkFlowConfig = 'GID-641'
      let reportEdit = 'GID-924'
      let dataSource = 'GID-925'

      const funNavConf = (gridIdVal) => {
          if(gridIdVal == FormConfig){
            sessionStorage.setItem('formId','FORM-105')
              dispatch(FormIdAct('FORM-105'))
              navigate('/confform')
          }else if(gridIdVal == WorkFlowConfig){
            sessionStorage.setItem('formId','FORM-106')
              dispatch(FormIdAct('FORM-106'))
              navigate('/confform')
          }else if(gridIdVal == reportEdit){
            sessionStorage.setItem('formId','FORM-203')
            dispatch(FormIdAct('FORM-203'))
            navigate('/confreport')
          }else if(gridIdVal == dataSource){
            sessionStorage.setItem('formId','FORM-202')
            dispatch(FormIdAct('FORM-202'))
            navigate('/confreport')
          }
      }

  return (
<div style={{marginTop:'5vh', paddingLeft:'1.3rem',paddingRight:'1rem' }}>
  {
    GridRed.loading ? MainObject.loader() :
    ColumnRed.loading ? MainObject.loader() :
    GridRed.val.map((res)=>{
      let dataObj = {}
      ColumnRed.val.filter((fil)=>{return fil.gridId == res.gridId}).forEach((fres)=>{
        dataObj[fres.accessor] = ''
      })
      return MainObject.table(ColumnRed.val.sort((a,b)=>{return a.number-b.number}),[dataObj],res,handleSave,funNavConf)
    })

  }
    </div>
  )
}

export default ConfEdit
