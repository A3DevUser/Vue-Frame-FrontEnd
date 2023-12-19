import React from 'react'
import { Dropdown } from 'react-bootstrap'
// import ExportExcel from './ReportExportExcel'
// import ExportPdf from './ReportExportPdf'
import ReportExportExcel from './ReportExportExcel'
import ReportExportPdf from './ReportExportPdf'

const ReportDownloadOpt = ({repoData,repoColunm , repoGrid}) => {


  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle className='btn-sm' style={{height:'4.5vh', width:'6vw', backgroundColor:'#60b3b3fa'}}>Export</Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item>
                <ReportExportExcel repoGrid={repoGrid} repoColunm={repoColunm} repoData={repoData} />
            </Dropdown.Item>
            <Dropdown.Item>
              <ReportExportPdf repoData = {repoData} repoGrid={repoGrid} repoColunm={repoColunm} />
            </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default ReportDownloadOpt
