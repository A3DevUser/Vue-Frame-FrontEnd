import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostFormExcelData } from '../../Store/Actions/FormExcelPostAct'
import { FetchWFCommonData } from '../../Store/Actions/WorkFlowCommon'
import { FetchColumnData } from '../../Store/Actions/Column'
import { FetchGridData } from '../../Store/Actions/GridAct'
import { MainObject } from '../../Component/Elements/commonFun'
import GridFormSub from '../../Component/GridFormSub'
import { FormDataAct } from '../../Store/Actions/GeneralStates'

const AddTable = () => {
    const dispatch = useDispatch()


    const ColumnRed = useSelector((state)=>state.ColumnRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)
    const GridRed = useSelector((state)=>state.GridRed)
    const FormDatRed = useSelector((state)=>state.FormDatRed)
    const EmdRed = useSelector((state)=>state.EmdRed)
    const ExcelDataRed = useSelector((state)=>state.ExcelDataRed)
    const AuthRed = useSelector((state)=>state.AuthRed)

    useEffect(()=>{
    dispatch(FetchGridData(FormIdRed,AuthRed.val))
    dispatch(FetchColumnData(FormIdRed,EmdRed,AuthRed.val))  
    },[FormIdRed])

    const handleSave = () =>{
        // console.log('FormDatRed',Object.values(FormDatRed).filter((fil)=>{return fil.length > 0})) 
        // console.log('FormDatRed',ExcelDataRed)
      //  console.log('GridFormrowData',FormDatRed)
          // dispatch(PostFormExcelData(res)) 

          // console.log('FormDatRedData',FormDatRed)

          // Object.values(FormDatRed).forEach((res)=>{
          //   dispatch(PostFormExcelData(res,AuthRed.val)) 
          // })

          // Object.keys(FormDatRed).forEach((res)=>{
          //   dispatch(FetchWFCommonData(res,AuthRed.val))
          // })
          Object.keys(FormDatRed).forEach((res)=>{
            // console.log('main',FormDatRed[res])
            if(Array.isArray(FormDatRed[res])){
              dispatch(PostFormExcelData(FormDatRed[res],AuthRed.val)) 
              // console.log('FormDatRedDatanew',FormDatRed[res])
            }else{
              Object.values(FormDatRed[res]).forEach((fres)=>{
                dispatch(PostFormExcelData(fres,AuthRed.val)) 
              })

            }
          })

      }
      // useEffect(()=>{
      //   console.log('FormDatRedData',FormDatRed)
      // },[FormDatRed])

  return (
<div style={{marginTop:'3vh'}}>
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
          // console.log('GridFormSubobj',Object.keys(FormDatRed).includes(res.gridId),res.gridId,Object.keys(FormDatRed).includes(res.gridId) ? FormDatRed[res.gridId] : dataObj)
         return FormDatRed&&<GridFormSub column={ColumnRed.val.sort((a,b)=>{return a.number-b.number})} data=
         {[]}
        //  {Object.keys(FormDatRed).includes(res.gridId) ? FormDatRed[res.gridId] : [dataObj]} 
         gridData={res} key={i} handleSave={handleSave}/>
        })
      }
    </div>
  )
}

export default AddTable
