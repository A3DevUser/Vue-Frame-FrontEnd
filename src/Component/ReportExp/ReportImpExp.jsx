import React from 'react'
// import DownloadOpt from './ReportDownloadOpt'
// import ExcelReader from '../ImportExport/Upload'
import ReportDownloadOpt from './ReportDownloadOpt'
// import ExcelReader from './Upload'

const ReportImpExp = ({gridData,columnData,data}) => {
  return (
<div style={{display:'flex', flexDirection:'row', gap:'10px', width:'22vw'}}>
<ReportDownloadOpt griData={gridData} columnData={columnData} data={data} />
{/* <ExcelReader gridData={gridData} columnData={columnData} /> */}
    </div>
  )
}

export default ReportImpExp
