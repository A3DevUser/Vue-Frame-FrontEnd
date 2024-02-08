import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../Component/CSS/ModalComp.css'
import { LogInState, MainObjId, ResetAct } from '../Store/Actions/GeneralStates'
import MultiRowAddTab from './FormMultiRowAdd/MultiRowAddTab'
import { MainObject } from './Elements/commonFun'


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
    sessionStorage.clear()
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


export const MultiModalCompo = ({ title, bodyDetails, show, setshow, showFunc, multiData, columns }) => {
  const dispatch = useDispatch()
  const UserDataStateRed = useSelector((state) => state.UserDataStateRed)
  const MultiModalColRed = useSelector((state) => state.MultiModalColRed)
  const MultiModalColRowRed = useSelector((state) => state.MultiModalColRowRed)
  const MainObjIdRed = useSelector((state) => state.MainObjIdRed)

  let titleData = [{"Title":""}]

  let newColumnData = [{"fieldName":"Data AA","accessor":"data_a"},{"fieldName":"Data BA","accessor":"data_b"}]

  let newRowData = [{"data_a":"TEXT_C01","data_b":"TEXT_C01","VF_OBJ_ID":"0","VF_MAIN_OBJ_ID":"OBJ-123","remove":""},{"data_a":"TEXT_C02","data_b":"TEXT_C02","VF_OBJ_ID":"0","VF_MAIN_OBJ_ID":"OBJ-123","remove":""}]

  const handleMultiAdd = (selectedFlatRows) => {
    
    // console.log('MultiRow Added','Multi Row CLick')
    
    let allObj ={}
    columns.forEach((res)=> {return allObj[res.accessor]=''})

    let multiObj = MultiModalColRowRed.val.filter((fil,i)=>{
      return selectedFlatRows.some(row=> i==row.id)
    })

    for (var i = 0; i < multiObj.length; i++) {
      for (var key in allObj) {
        if(multiObj[i][key] == ''){
          multiObj[i][key] = allObj[key];
        }else{
          multiObj[i][key] = multiObj[i][key];
        }

      }
    }

    for (var i = 0; i < multiObj.length; i++) {
      multiObj[i]["VF_OBJ_ID"] = i;
      multiObj[i]["VF_MAIN_OBJ_ID"] = MainObjIdRed;
    }

    multiData((old) => {
      // console.log('SendObjectIdRed',JSON.stringify(multiObj))
      return [...multiObj]
    })

    setshow(!show)
  
  }

  useEffect(() => {
    // console.log('MultiRow Added',MultiModalColRed.val)
  },[MultiModalColRed])

  return (
    <div>
      <Modal size='xl' show={show} centered scrollable={true} onHide={showFunc}>
        <Modal.Header closeButton>{title}</Modal.Header>
        <Modal.Body>
          {MultiModalColRed.loading ? MainObject.loader() :
          MultiModalColRowRed.loading ? MainObject.loader() : <MultiRowAddTab titleData={titleData} columnData={MultiModalColRed.val} multiRowData={MultiModalColRowRed.val} handleMultiAdd={handleMultiAdd} />}</Modal.Body>
      </Modal>
    </div>
  )
}


