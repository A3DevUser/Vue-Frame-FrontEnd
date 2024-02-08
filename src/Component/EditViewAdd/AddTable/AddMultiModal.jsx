import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import MultiSelectAddTab from './MultiSelectAddTab'
import { useDispatch, useSelector } from 'react-redux'
import { FetchMultiModalColData } from '../../../Store/Actions/MultiModalColAct'
import { FetchMultiModalColRowData } from '../../../Store/Actions/MultiModalColRowAct'
import { MainObject } from '../../../Component/Elements/commonFun'

const AddMultiModal = ({show,showFunc,gridData,setdata}) => {

    const dispatch = useDispatch()

    const AuthRed = useSelector((state) => state.AuthRed)
    const MultiModalColRed = useSelector((state) => state.MultiModalColRed)
    const MultiModalColRowRed = useSelector((state) => state.MultiModalColRowRed)

    const [selectRows,setselectRows] =useState([])


    useEffect(()=>{
        dispatch(FetchMultiModalColData(gridData.gridId, AuthRed.val))
        dispatch(FetchMultiModalColRowData(gridData.gridId, AuthRed.val))
    },[show])

    // useEffect(()=>{
    //     console.log(selectRows)
    // },[selectRows])

    async function handleAdd(){
       await setdata((old)=>{return [...old,...selectRows.map((res,i)=>{return {...res,VF_OBJ_ID:old.length+i}})]})

       showFunc()
    }

  return (
    <>
          <Modal style={{backgroundColor:'rgba(0, 0, 0, 0.5)'}} backdrop='static' size='xl' show={show} centered scrollable={true} onHide={showFunc}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>{
            MultiModalColRed.loading ? MainObject.loader() :
            MultiModalColRowRed.loading ? MainObject.loader() :
            <MultiSelectAddTab columnData={MultiModalColRed.val} multiData={MultiModalColRowRed.val} setselectRows={setselectRows} />
            }
        </Modal.Body>
        <Modal.Footer>
            <button onClick={handleAdd} className='btn btn-success'>Add Rows</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddMultiModal