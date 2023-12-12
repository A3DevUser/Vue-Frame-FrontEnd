import { MainObject } from '../../Component/Elements/commonFun';
import { FetchColumnData } from '../../Store/Actions/Column';
import { FetchGridData } from '../../Store/Actions/GridAct';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import LeftSideNav from './LeftSideNav';
import '../Report/ReportForm.css'
import GridFormSub from '../../Component/GridFormSub';
// import LeftSidebar from './New/LeftSidebar';

const ReportFormOld = () => {

  const dispatch = useDispatch();
  const SectionRed = useSelector((state)=>state.SectionRed)
  const ColumnRed = useSelector((state) => state.ColumnRed)
  const GridRed = useSelector((state) => state.GridRed)
  const FormIdRed = useSelector((state) => state.FormIdRed)
  const FormDatRed = useSelector((state) => state.FormDatRed)
  const AuthRed = useSelector((state)=>state.AuthRed)

  const [defaultVal,setdefaultVal] =useState([])

  useEffect(() => {
    dispatch(FetchGridData('FORM-394',AuthRed.val))
    dispatch(FetchColumnData('FORM-394','no',AuthRed.val))
  }, [FormIdRed])

  // console.log('FormDataNew',GridRed)
  // console.log('FormDataNew',ColumnRed)

  const handleSave = ()=>{
    
  }

  return (
    <div className='main-compo'>
      {/* <div><LeftSideNav /></div> */}
      {/* <div><LeftSidebar/></div> */}
      <div>
        {
          GridRed.loading ? MainObject.loader() : ColumnRed.loading ? MainObject.loader() : 
          GridRed.val.filter((fil)=>{return fil.isMain }).map((res,i)=>{
          return <GridFormSub column={ColumnRed.val.sort((a,b)=>{return a.number-b.number})} data=
           {[]}
        //    {
        //     gridIdArr.includes(res.gridId)  ?  [dataObj] :
        //     GetDataRed.val.filter((fil)=>{return fil.GRID_ID == res.gridId})[0].DATA 
        //   }
            gridData={res} key={i} handleSave={handleSave}/>})
        //   MainObject.tabs(SectionRed.val, GridRed.val, ColumnRed.val, [{}], defaultVal, setdefaultVal)
        }
      </div>
    </div>

  )
}

export default ReportFormOld