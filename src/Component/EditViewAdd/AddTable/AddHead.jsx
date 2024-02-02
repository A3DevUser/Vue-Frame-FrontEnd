import { MainObject } from '../../../Component/Elements/commonFun'
import React, { useEffect } from 'react'
import { Dropdown, DropdownButton, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const AddHead = ({addRow,removeRows,setdata,columnData,selectedFlatRows,gridData,isMain,dispatch,formId,gridId,token,handleShowMulti,handleSave}) => {

  const SendObjectIdRed = useSelector((state)=>state.SendObjectIdRed)


  return (
    <>
    <div className='headerMainClass'>
                    <div className='headingClass'>
                        <h4>{gridData.gridName}</h4>
                    </div>
                    <div className='btnClass'>
                      {
                        gridData.isMultiSelect == 'true' ?
                        <DropdownButton title={<i class="bi bi-pen"></i>} position='left'>
                        <Dropdown.Item onClick={()=>{addRow(setdata,columnData,dispatch,formId,gridId,token,isMain)}}><i class="bi bi-plus-lg"></i> Add Single Row</Dropdown.Item>
                        <Dropdown.Item onClick={handleShowMulti}><i class="bi bi-grid"></i> Add Detailed Rows</Dropdown.Item>
                        </DropdownButton> : 
                        <button onClick={()=>{addRow(setdata,columnData,dispatch,formId,gridId,token,isMain)}} className='btn btn-outline-info' disabled={SendObjectIdRed.loading&&gridData.isMain}>
                          {

            SendObjectIdRed.loading&&gridData.isMain  ? <Spinner variant='warning' size='sm' /> :
            <i class="bi bi-plus-lg"></i>
                          }
                          
                          </button>
                      }
                        <button onClick={()=>{removeRows(setdata,selectedFlatRows)}} className='btn btn-outline-danger'><i class="bi bi-trash"> </i></button>
                        <button onClick={handleSave} style={{display: isMain ? 'inline-block' : 'none'}} className='btn btn-outline-success'><i title='Save' class="bi bi-floppy" ></i></button>
                    </div>
                </div>

    </>
  )
}

export default AddHead