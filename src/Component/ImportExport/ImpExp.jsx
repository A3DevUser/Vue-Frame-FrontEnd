import React from 'react'
import DownloadOpt from './DownloadOpt'
import ExcelReader from './Upload'

const ImpExp = ({gridData,columnData}) => {
  return (
<div style={{display:'flex', flexDirection:'row', gap:'10px', width:'22vw'}}>
<DownloadOpt griData={gridData} columnData={columnData}/>
<ExcelReader gridData={gridData} columnData={columnData} />
    </div>
  )
}

export default ImpExp
