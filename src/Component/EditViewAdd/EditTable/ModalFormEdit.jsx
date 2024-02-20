import { FetchModalColumnData } from '../../../Store/Actions/ModalColumn';
import { FetchModalGridData } from '../../../Store/Actions/ModalGrid';
import { FetchModalSectionData } from '../../../Store/Actions/ModalSection';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ModalFormEdit = () => {

    const dispatch = useDispatch();

    const ModalSectionRed = useSelector((state) => state.ModalSectionRed)
    const ModalColumnRed = useSelector((state) => state.ModalColumnRed)
    const FormIdRed = useSelector((state) => state.FormIdRed)
    const FormDatRed = useSelector((state) => state.FormDatRed)
    const ModalGridRed = useSelector((state) => state.ModalGridRed)
    const AuthRed = useSelector((state)=>state.AuthRed)
    const GetDataRed = useSelector((state)=> state.GetDataRed)
    const EmdRed = useSelector((state)=>state.EmdRed)

    useEffect(() => {
        dispatch(FetchModalSectionData(FormIdRed,AuthRed.val))
        dispatch(FetchModalGridData(FormIdRed,AuthRed.val))
        dispatch(FetchModalColumnData(FormIdRed,EmdRed,AuthRed.val))
      }, [])
  return (
    <div>

    </div>
  )
}

export default ModalFormEdit