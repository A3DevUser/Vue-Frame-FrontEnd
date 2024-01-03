import React, { useEffect } from 'react'
import RTable from './AssesmentTable'
import A3SideNav from './A3SideNav'
import { useDispatch, useSelector } from 'react-redux'
import { FetchA3ColumnData } from '../../Store/Actions/A3ColumnAct'
import { MainObject } from '../../Component/Elements/commonFun'
import '../Report/ReportCont.css'


const A3HomeSheet = () => {

    const dispatch = useDispatch()

    const AuthRed = useSelector((state)=>state.AuthRed)
    const A3ColumnRed = useSelector((state)=>state.A3ColumnRed)
    const A3HomeDataRed = useSelector((state)=>state.A3HomeDataRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)



    useEffect(()=>{
        dispatch(FetchA3ColumnData(FormIdRed,'','',AuthRed.val))
    },[])

  return (
    <>
    <div className='main-compo'  style={{display:'flex', flexDirection:'row'}}>
    <div>
        <A3SideNav/>
    </div>
    <div className='right-compo'>
        {
            A3ColumnRed.loading ? MainObject.loader() :
            A3HomeDataRed.loading ? MainObject.loader():
            <RTable col={A3ColumnRed.val} dData={A3HomeDataRed.val} />
        }
    </div>
    </div>
</>
  )
}

export default A3HomeSheet