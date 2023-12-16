import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostFormExcelData } from '../../Store/Actions/FormExcelPostAct'
import { FetchWFCommonData } from '../../Store/Actions/WorkFlowCommon'
import { FetchColumnData } from '../../Store/Actions/Column'
import { FetchGridData } from '../../Store/Actions/GridAct'
import { MainObject } from '../../Component/Elements/commonFun'
import GridFormSub from '../../Component/GridFormSub'
import { FetchGetData } from '../../Store/Actions/GetDataAct'
import { ResetFormState } from '../../Store/Actions/GeneralStates'

const ViewTable = () => {
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

    useEffect(()=>{
    dispatch(FetchGridData(FormIdRed,AuthRed.val))
    dispatch(FetchColumnData(FormIdRed,EmdRed,AuthRed.val))   
    dispatch(FetchGetData(FormIdRed,AuthRed.val,UserDataStateRed))
    },[FormIdRed])


    const handleSave = () =>{
        // console.log('FormDatRed',Object.values(FormDatRed).filter((fil)=>{return fil.length > 0})) 
        // console.log('FormDatRed',ExcelDataRed)
      //  console.log(FormDatRed)
          // dispatch(PostFormExcelData(res)) 
          Object.values(FormDatRed).forEach((res)=>{
            dispatch(PostFormExcelData(res,AuthRed.val)) 
          })

          Object.keys(FormDatRed).forEach((res)=>{
            dispatch(FetchWFCommonData(res,AuthRed.val))
          })

      }

  return (
<div style={{marginTop:'3vh', paddingLeft:'1.3rem',paddingRight:'1rem'}}>
      {/* <div style={{ display:'none', justifyContent : 'flex-end'}} className='mx-5 my-2'>
        <ImpExp columnData={ColumnRed.val} gridData={GridRed.val}/>
        <div>
      {MainObject.button({classNameVal:'btn btn-primary', widthVal:'', heightVal:'',btnName:'Submit'},handleSave)}
      </div>
      </div> */}
      {
        GridRed.loading ? MainObject.loader() :
        ColumnRed.loading ? MainObject.loader() :
        GetDataRed.loading ? MainObject.loader() :
        GridRed.val.filter((fil)=>{return fil.isMain }).map((res,i)=>{
          let dataObj = {}
          ColumnRed.val.filter((fil)=>{return fil.gridId == res.gridId}).forEach((fres)=>{
            dataObj[fres.accessor] = ''
          })
          // console.log('dataObj',GetDataRed.val.length)
          // console.log('dataObj',dataObj)
          let gridIdArr = ['GID-575','GID-576','GID-641']
         return <GridFormSub column={ColumnRed.val.sort((a,b)=>{return a.number-b.number})} data=
        //  {[]}
         {
          gridIdArr.includes(res.gridId)  ?  [dataObj] :
          GetDataRed.val.filter((fil)=>{return fil.GRID_ID == res.gridId})[0].DATA 
        }
          gridData={res} key={i} handleSave={handleSave}/>
        })
      }
    </div>
  )
}

export default ViewTable
