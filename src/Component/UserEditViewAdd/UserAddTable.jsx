import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostFormExcelData } from '../../Store/Actions/FormExcelPostAct'
import { FetchWFCommonData } from '../../Store/Actions/WorkFlowCommon'
import { FetchColumnData } from '../../Store/Actions/Column'
import { FetchGridData } from '../../Store/Actions/GridAct'
import { MainObject } from '../../Component/Elements/commonFun'
import GridFormSub from '../../Component/GridFormSub'
import { FormDataAct } from '../../Store/Actions/GeneralStates'
import GridUserSub from '../../Component/GridUserSub'
import { FormUserDataInfo } from '../../Store/Actions/UserDataAct'

const UserAddTable = () => {
    const dispatch = useDispatch()


    const ColumnRed = useSelector((state)=>state.ColumnRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)
    const GridRed = useSelector((state)=>state.GridRed)
    const FormDatRed = useSelector((state)=>state.FormDatRed)
    const EmdRed = useSelector((state)=>state.EmdRed)
    const ExcelDataRed = useSelector((state)=>state.ExcelDataRed)
    const AuthRed = useSelector((state)=>state.AuthRed)
    const SendUserDataInfoRed = useSelector((state)=> state.SendUserDataInfoRed)

    useEffect(()=>{
    dispatch(FetchGridData(FormIdRed,AuthRed.val))
    dispatch(FetchColumnData(FormIdRed,EmdRed,AuthRed.val))  
    },[FormIdRed])

    const handleSave = (gridData,setdata,data) =>{
      if(Object.keys(FormDatRed).includes('GID-290')){
        const FormData = FormDatRed['GID-290'].map((res) => {return {...res}})
        // console.log('FormDatRed Data',...FormData)
              dispatch(FormUserDataInfo(...FormData,setdata))
      }
      }


  return (
<div style={{marginTop:'5vh'}}>
      {/* <div style={{ display:'none', justifyContent : 'flex-end'}} className='mx-5 my-2'>
        <ImpExp columnData={ColumnRed.val} gridData={GridRed.val}/>
        <div>
      {MainObject.button({classNameVal:'btn btn-primary', widthVal:'', heightVal:'',btnName:'Submit'},handleSave)}
      </div>
      </div> */}
      {
        GridRed.loading&&GridRed.val.length == 0 ? MainObject.loader() :
        ColumnRed.loading&&GridRed.val.length == 0  ? MainObject.loader() :
        GridRed.val.filter((fil)=>{return fil.isMain }).map((res,i)=>{
          let dataObj = {}
          ColumnRed.val.filter((fil)=>{
            return fil.gridId == res.gridId
          }).forEach((fe)=>{dataObj[fe.accessor]=''})
          // console.log('dataObj new key',dataObj)
          // console.log('GridFormSubobj',Object.keys(FormDatRed).includes(res.gridId),res.gridId,Object.keys(FormDatRed).includes(res.gridId) ? FormDatRed[res.gridId] : dataObj)
         return FormDatRed&&<GridUserSub column={ColumnRed.val.sort((a,b)=>{return a.number-b.number})} data=
         {[]}
        //  {Object.keys(FormDatRed).includes(res.gridId) ? FormDatRed[res.gridId] : [dataObj]} 
         gridData={res} key={i} handleSave={handleSave}/>
        })
      }
    </div>
  )
}

export default UserAddTable
