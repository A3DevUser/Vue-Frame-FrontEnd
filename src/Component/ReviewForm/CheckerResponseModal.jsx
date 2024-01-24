import React from 'react'
import { Modal } from 'react-bootstrap'

const CheckerResponseModal = ({show,setshow,handleDataSave,setresponse}) => {

    const handleHide = () =>{
        setshow(!show)
    }

    const handleComment =(e) =>{
        setresponse((old)=>{return {...old, reviewComment :e.target.value}})
    }

  return (
    <>
    <Modal centered size='lg' show={show} onHide={handleHide}>
        <Modal.Header closeButton >Response</Modal.Header>
        <Modal.Body>
            <textarea onBlur={handleComment} name="" id="" cols="100" rows="10"></textarea>
        </Modal.Body>
        <Modal.Footer>
            <button className='btn btn-success' onClick={handleDataSave}>Save</button>
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default CheckerResponseModal