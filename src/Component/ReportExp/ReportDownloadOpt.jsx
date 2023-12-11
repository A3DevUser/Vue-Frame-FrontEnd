import React from 'react'
import { Dropdown } from 'react-bootstrap'
// import ExportExcel from './ReportExportExcel'
// import ExportPdf from './ReportExportPdf'
import ReportExportExcel from './ReportExportExcel'
import ReportExportPdf from './ReportExportPdf'

const ReportDownloadOpt = ({griData,columnData , data}) => {


  return (
    <div>

{/* <select className='form-control'>
  <option>Select One</option>
  <option> */}
  {/* <span className='btn btn-primary'>
    <ReportExportExcel  griData={griData} columnData={columnData}/>
  </span> */}
    {/* </option> */}
{/* // </select> */}

      <Dropdown>
        <Dropdown.Toggle>Export</Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item>
                <ReportExportExcel griData={griData} columnData={columnData}/>
            </Dropdown.Item>
            <Dropdown.Item>
              <ReportExportPdf Data = {data} />
            </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default ReportDownloadOpt
