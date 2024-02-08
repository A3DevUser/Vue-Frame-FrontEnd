import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostFormExcelData } from '../../Store/Actions/FormExcelPostAct'
import { FetchWFCommonData } from '../../Store/Actions/WorkFlowCommon'
import { FetchColumnData } from '../../Store/Actions/Column'
import { FetchGridData } from '../../Store/Actions/GridAct'
import { MainObject } from '../../Component/Elements/commonFun'
import GridFormSub from '../../Component/GridFormSub'
import { FetchGetData } from '../../Store/Actions/GetDataAct'
import { FormIdAct, ResetFormState, mainObjData } from '../../Store/Actions/GeneralStates'
import ImpExp from '../../Component/ImportExport/ImpExp'
import { FetchColumnEditActData } from '../../Store/Actions/ColumnEditAct'
import { useLocation, useNavigate } from 'react-router'

const EditTable = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()


    const ColumnRed = useSelector((state)=>state.ColumnRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)
    const GridRed = useSelector((state)=>state.GridRed)
    const FormDatRed = useSelector((state)=>state.FormDatRed)
    const EmdRed = useSelector((state)=>state.EmdRed)
    const ExcelDataRed = useSelector((state)=>state.ExcelDataRed)
    const AuthRed = useSelector((state)=>state.AuthRed)
    const GetDataRed = useSelector((state)=> state.GetDataRed)
    const ResetFormRed = useSelector((state)=>state.ResetFormRed)
    const UserDataStateRed = useSelector((state)=>state.UserDataStateRed)
    const ColumnEditActRed = useSelector((state)=> state.ColumnEditActRed)
    const FormExcelPostRed = useSelector((state)=>state.FormExcelPostRed)

    const [disBtn,setDisBtn] = useState(false)


    useEffect(()=>{
      // console.log('locationVal',location);
    dispatch(FetchGridData(location.state.formId,AuthRed.val))
    // dispatch(FetchColumnData(FormIdRed,'yes',AuthRed.val))   
    dispatch(FetchColumnEditActData(location.state.formId,UserDataStateRed,AuthRed.val))
    // dispatch(FetchGetData(FormIdRed,AuthRed.val,UserDataStateRed,'NO_VALUE'))
    dispatch(FetchGetData(location.state.formId,AuthRed.val,UserDataStateRed,location.state.daysFlag))
    dispatch(FormIdAct(location.state.formId))
    },[location])



    const handleSave = (gridData,setdata) =>{
      // console.log('newFormDataRed','inside save')
      if ((FormDatRed[GridRed.val.filter((fil) => {return fil.isMain == 'true'})[0].gridId].filter((fil) => {return fil.VF_ACTION != '' || fil.VF_ACTION != null})).length >= 1){
        // console.log('newFormDataRed','inside parent if')
        Object.keys(FormDatRed).forEach((res)=>{
          if(Array.isArray(FormDatRed[res])){
            // console.log('newFormDataRed',FormDatRed[res])
            // console.log('newFormDataRed',FormDatRed[res].filter((fil) => {return  fil.VF_ACTION != null && fil.VF_ACTION != ''}))
            let newObj = FormDatRed[res].filter((fil) => {
              return  fil.VF_ACTION != null && fil.VF_ACTION != ''
            }) 
              if(newObj.length >= 0){
                // console.log('newFormDataRed',newObj)
                dispatch(PostFormExcelData(UserDataStateRed,newObj,AuthRed.val,
                  // setdata,
                  setDisBtn,
                  // location.state.formId,location.state.daysFlag,
                  navigate))
              }
            }})
      }else{
        // console.log('newFormDataRed',FormDatRed)
        Object.values(FormDatRed).forEach((res)=>{
          dispatch(PostFormExcelData(UserDataStateRed,res,AuthRed.val,setdata,setDisBtn)) 
        })

        Object.keys(FormDatRed).forEach((res)=>{
          dispatch(FetchWFCommonData(UserDataStateRed,res,AuthRed.val,setdata,setDisBtn))
        })
      }
      }


  return (
<div style={{marginTop:'3vh', paddingLeft:'1.3rem',paddingRight:'1rem'}}>
      <div style={{ display:'none', justifyContent : 'flex-end'}} className='mx-5 my-2'>
        <ImpExp columnData={ColumnEditActRed.val} gridData={GridRed.val}/>
        <div>
      {MainObject.button({classNameVal:'btn btn-primary', widthVal:'', heightVal:'',btnName:'Submit'},handleSave)}
      </div>
      </div>
      {
        GridRed.loading ? MainObject.loader() :
        // ColumnRed.loading ? MainObject.loader() :
        ColumnEditActRed.loading ? MainObject.loader() :
        GetDataRed.loading ? MainObject.loader() :
        FormExcelPostRed.loading ? MainObject.loader() :
        GridRed.val.filter((fil)=>{return fil.isMain }).map((res,i)=>{
          let mainObjId = res.VF_MAIN_OBJ_ID
         return <GridFormSub column={ColumnEditActRed.val.sort((a,b)=>{return a.orderNo-b.orderNo})} data=
        //  {[]} && fil.VF_MAIN_OBJ_ID == mainObjId
         {
          GetDataRed.val.filter((fil)=>{return fil.GRID_ID == res.gridId})[0].DATA  
        }
          gridData={res} key={i} handleSave={handleSave}/>
        })
      }
    </div>
  )
}

export default EditTable
