import React from 'react'
import CheckerFormTab from './CheckerFormTab'
import { Columns } from '../../Component/ReportTable/Columns'
import MOCK_DATA from '../ReportTable/MOCK_DATA_TAB.json'

const CheckerForm = () => {
  return (
    <>
    <CheckerFormTab columnData={Columns} reportData={MOCK_DATA}/>
    </>
  )
}

export default CheckerForm