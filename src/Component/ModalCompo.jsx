import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../Component/CSS/ModalComp.css'
import { LogInState, ResetAct } from '../Store/Actions/GeneralStates'

export const ModalCompo = ({ title, bodyDetails, show, showFunc }) => {
  const NavBarRed = useSelector((state) => state.NavBarRed)
  const FormIdRed = useSelector((state) => state.FormIdRed)

  // console.log('modalcomp')
  return (
    <div>
      <Modal show={show} fullscreen={true} scrollable={true} onHide={showFunc}>
        <Modal.Header style={{ height: '8vh' }}>
            <h5 style={{ position: 'absolute', marginTop: '-3px' }} >{NavBarRed.val.filter((fil) => { return fil.formId == FormIdRed })[0].navName}</h5>
          <div className='modalHead'>
            <button className="btn btn-primary btn-sm mx-2" onClick={showFunc}>Save</button>
            <button className="btn btn-primary btn-sm" onClick={showFunc}>Close</button>
          </div>
        </Modal.Header>
        <Modal.Body className='modalBody' style={{ overflow: 'hidden', maxHeight: 'calc(150vh - 150px)', overflowY: 'auto' }}>{bodyDetails}</Modal.Body>
        <Modal.Footer style={{ height: '50px' }}>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export const SimpleModalCompo = ({ title, bodyDetails, show, showFunc }) => {
  const dispatch = useDispatch()
  const UserDataStateRed = useSelector((state) => state.UserDataStateRed)

  const handleClick = () => {
    handleLogOut()
    showFunc()
    dispatch(ResetAct())
    window.location.reload()
  }

  const handleLogOut = () => {
    sessionStorage.removeItem('userData');
    dispatch(LogInState(false))
  }
  return (
    <div>
      <Modal show={show} centered scrollable={true} onHide={showFunc}>
        <Modal.Header closeButton>{title}</Modal.Header>
        <Modal.Body><strong>Logged In User: </strong>{UserDataStateRed}</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleClick}>Log out</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}




