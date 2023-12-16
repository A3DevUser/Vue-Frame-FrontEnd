import React from 'react'
import { Dropdown } from 'react-bootstrap'
import ExportExcel from './ExportExcel'
import ExportPdf from './ExportPdf'

const DownloadOpt = ({griData,columnData}) => {


  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>

{/* <select className='form-control'>
  <option>Select One</option>
  <option> */}
  <span className='btn btn-primary'>
    <ExportExcel  griData={griData} columnData={columnData.filter((fil)=>{return fil.hideShow !=='true'})}/>
  </span>
    {/* </option> */}
{/* // </select> */}

      {/* <Dropdown>
        <Dropdown.Toggle>Export</Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item>
                <ExportExcel griData={griData} columnData={columnData}/>
            </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
    </div>
  )
}

export default DownloadOpt
