import React from 'react'
import { Modal } from 'react-bootstrap';

const ComboOverViewModal = () => {
    return (
        <>
            <Modal>
                <Modal.Header >OverView</Modal.Header>
                <Modal.Body>
                  <h1>body</h1>  
                    {/* <OverViewTable />       */}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ComboOverViewModal;