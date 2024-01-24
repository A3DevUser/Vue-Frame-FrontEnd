import React from 'react'

const AddHead = ({addRow,removeRows,setdata,columnData,selectedFlatRows}) => {
  return (
    <>
    <div className='headerMainClass'>
                    <div className='headingClass'>
                        <h4>Add Table</h4>
                    </div>
                    <div className='btnClass'>
                        <button onClick={()=>{addRow(setdata,columnData)}} className='btn btn-outline-info'><i class="bi bi-plus-lg"></i></button>
                        <button onClick={()=>{removeRows(setdata,selectedFlatRows)}} className='btn btn-outline-danger'><i class="bi bi-trash"> </i></button>
                        <button className='btn btn-outline-success'><i title='Save' class="bi bi-floppy" ></i></button>
                    </div>
                </div>

    </>
  )
}

export default AddHead