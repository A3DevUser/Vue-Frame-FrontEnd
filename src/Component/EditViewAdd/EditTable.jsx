import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostFormExcelData } from '../../Store/Actions/FormExcelPostAct'
import { FetchWFCommonData } from '../../Store/Actions/WorkFlowCommon'
import { FetchColumnData } from '../../Store/Actions/Column'
import { FetchGridData } from '../../Store/Actions/GridAct'
import { MainObject } from '../../Component/Elements/commonFun'
import GridFormSub from '../../Component/GridFormSub'
import { FetchGetData } from '../../Store/Actions/GetDataAct'
import { ResetFormState } from '../../Store/Actions/GeneralStates'
import ImpExp from '../../Component/ImportExport/ImpExp'

const EditTable = () => {
    const dispatch = useDispatch()


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

    const [disBtn,setDisBtn] = useState(false)

    useEffect(()=>{
    dispatch(FetchGridData(FormIdRed,AuthRed.val))
    dispatch(FetchColumnData(FormIdRed,'yes',AuthRed.val))   
    // dispatch(FetchGetData(FormIdRed,AuthRed.val,UserDataStateRed,'NO_VALUE'))
    },[FormIdRed])


    const handleSave = (gridData,setdata) =>{
      console.log('newFormDataRed','inside save')
      if ((FormDatRed[GridRed.val.filter((fil) => {return fil.isMain == 'true'})[0].gridId].filter((fil) => {return fil.VF_ACTION != '' || fil.VF_ACTION != null})).length >= 1){
        console.log('newFormDataRed','inside parent if')
        Object.keys(FormDatRed).forEach((res)=>{
          if(Array.isArray(FormDatRed[res])){
            console.log('newFormDataRed',FormDatRed[res])
            // console.log('newFormDataRed',FormDatRed[res].filter((fil) => {return  fil.VF_ACTION != null && fil.VF_ACTION != ''}))
            let newObj = FormDatRed[res].filter((fil) => {
              return  fil.VF_ACTION != null && fil.VF_ACTION != ''
            }) 
              if(newObj.length >= 0){
                console.log('newFormDataRed',newObj)
                dispatch(PostFormExcelData(newObj,AuthRed.val,setdata))
              }
            }})
      }else{
        console.log('newFormDataRed',FormDatRed)
        Object.values(FormDatRed).forEach((res)=>{
          dispatch(PostFormExcelData(res,AuthRed.val)) 
        })

        Object.keys(FormDatRed).forEach((res)=>{
          dispatch(FetchWFCommonData(res,AuthRed.val))
        })
      }
      }

  return (
<div style={{marginTop:'3vh', paddingLeft:'1.3rem',paddingRight:'1rem'}}>
      <div style={{ display:'none', justifyContent : 'flex-end'}} className='mx-5 my-2'>
        <ImpExp columnData={ColumnRed.val} gridData={GridRed.val}/>
        <div>
      {MainObject.button({classNameVal:'btn btn-primary', widthVal:'', heightVal:'',btnName:'Submit'},handleSave)}
      </div>
      </div>
      {
        GridRed.loading ? MainObject.loader() :
        ColumnRed.loading ? MainObject.loader() :
        GetDataRed.loading ? MainObject.loader() :
        GridRed.val.filter((fil)=>{return fil.isMain }).map((res,i)=>{
         return <GridFormSub column={ColumnRed.val.sort((a,b)=>{return a.number-b.number})} data=
        //  {[]}
         {
          GetDataRed.val.filter((fil)=>{return fil.GRID_ID == res.gridId})[0].DATA 
        }
          gridData={res} key={i} handleSave={handleSave} disBtn={disBtn}/>
        })
      }
    </div>
  )
}

export default EditTable
