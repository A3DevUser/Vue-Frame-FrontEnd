import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostFormExcelData } from '../../Store/Actions/FormExcelPostAct'
import { FetchWFCommonData } from '../../Store/Actions/WorkFlowCommon'
import { FetchColumnData } from '../../Store/Actions/Column'
import { FetchGridData } from '../../Store/Actions/GridAct'
const ViewTable = () => {
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
    },[])

    const handleSave = () =>{
        // console.log('FormDatRed',Object.values(FormDatRed).filter((fil)=>{return fil.length > 0})) 
        // console.log('FormDatRed',ExcelDataRed)
       console.log(FormDatRed)
          // dispatch(PostFormExcelData(res)) 
          Object.values(FormDatRed).forEach((res)=>{
            dispatch(PostFormExcelData(res,AuthRed.val)) 
          })

          Object.keys(FormDatRed).forEach((res)=>{
            dispatch(FetchWFCommonData(res,AuthRed.val))
          })

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
        GridRed.loading ? MainObject.loader() :
        ColumnRed.loading ? MainObject.loader() :
        GridRed.val.filter((fil)=>{return fil.isMain }).map((res,i)=>{
         return <GridFormSub column={ColumnRed.val.sort((a,b)=>{return a.number-b.number})} data={[]} gridData={res} key={i} handleSave={handleSave}/>
        })
      }
    </div>
  )

}

export default ViewTable
