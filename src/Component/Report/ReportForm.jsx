import { MainObject } from '../../Component/Elements/commonFun';
import { FetchColumnData } from '../../Store/Actions/Column';
import { FetchGridData } from '../../Store/Actions/GridAct';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LeftSideNav from '../Report/LeftSideNav';
import '../Report/ReportForm.css'

const ReportForm = () => {

  const dispatch = useDispatch();
  const ColumnRed = useSelector((state) => state.ColumnRed)
  const GridRed = useSelector((state) => state.GridRed)
  const FormIdRed = useSelector((state) => state.FormIdRed)
  const FormDatRed = useSelector((state) => state.FormDatRed)

  useEffect(() => {
    dispatch(FetchGridData(window.location.pathname === '/GridForm' ? 'FORM-101' : FormIdRed))
    dispatch(FetchColumnData(window.location.pathname === '/GridForm' ? 'FORM-101' : FormIdRed))
  }, [FormIdRed])

  return (
    <div className='main-compo'>
      <div><LeftSideNav /></div>
      <div style={{backgroundColor:'green'}}>
        {
          GridRed.loading ? MainObject.loader() : ColumnRed.loading ? MainObject.loader() : MainObject.tabs('', GridRed.val, ColumnRed.val, [{}], '', '')
        }
      </div>
    </div>

  )
}

export default ReportForm