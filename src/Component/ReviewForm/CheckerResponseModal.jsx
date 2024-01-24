import React from 'react'
import { Modal } from 'react-bootstrap'

const CheckerResponseModal = ({show,setshow}) => {

    const handleHide = () =>{
        setshow(!show)
    }

  return (
    <>
    <Modal centered size='lg' show={show} onHide={handleHide}>
        <Modal.Header closeButton >Response</Modal.Header>
        <Modal.Body>
            <textarea name="" id="" cols="100" rows="10"></textarea>
        </Modal.Body>
        <Modal.Footer>
            <button className='btn btn-success'>Save</button>
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default CheckerResponseModal