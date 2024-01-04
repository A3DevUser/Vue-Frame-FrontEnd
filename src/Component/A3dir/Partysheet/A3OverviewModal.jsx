import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import OverViewTable from '../A3OverViewTable'
import { useDispatch, useSelector } from 'react-redux'
import { FetchA3OverviewColumnData } from '../../../Store/Actions/A3OverViewColAct'
import { MainObject } from '../../../Component/Elements/commonFun'
import { FetchA3OverviewDataData } from '../../../Store/Actions/A3OverviewData'

const A3OverviewModal = ({show,setShow}) => {

    const dispatch = useDispatch()
    const AuthRed = useSelector((state)=>state.AuthRed)
    const A3OverviewColumnRed =  useSelector((state)=>state.A3OverviewColumnRed)
    const A3OverviewDataRed = useSelector((state)=>state.A3OverviewDataRed)


    useEffect(()=>{
        if(show){
            dispatch(FetchA3OverviewColumnData('FORM-003','party',AuthRed.val))
            dispatch(FetchA3OverviewDataData('',AuthRed.val))
        }
    },[show])

  return (
    <>
    
    <Modal
    show={show}
    size='xl'
    >
        <Modal.Header closeButton onHide={()=>setShow(false)} >OverView</Modal.Header>
        <Modal.Body>
            {
                A3OverviewColumnRed.loading ? MainObject.loader() :
                A3OverviewDataRed.loading ? MainObject.loader() :
                <OverViewTable col={A3OverviewColumnRed.val} data={A3OverviewDataRed.val} /> 
            }
        </Modal.Body>
    </Modal>
    </>
  )
}

export default A3OverviewModal