import React from 'react'
import { Dropdown } from 'react-bootstrap'
import ExportExcel from './ExportExcel'
import ExportPdf from './ExportPdf'

const DownloadOpt = ({griData,columnData}) => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle>Export</Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item>
                <ExportExcel griData={griData} columnData={columnData}/>
            </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default DownloadOpt
