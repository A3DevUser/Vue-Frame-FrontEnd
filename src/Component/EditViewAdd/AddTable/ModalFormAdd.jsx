import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchModalColumnData } from '../../../Store/Actions/ModalColumn';
import { FetchModalGridData } from '../../../Store/Actions/ModalGrid';
import { FetchModalSectionData } from '../../../Store/Actions/ModalSection';
import { MainObject } from '../../Elements/commonFun'
import LoadingBar from 'react-top-loading-bar';

const ModalFormAdd = ({VF_MAIN_OBJ_ID}) => {


  const dispatch = useDispatch();
  const ModalSectionRed = useSelector((state) => state.ModalSectionRed)
  const ModalColumnRed = useSelector((state) => state.ModalColumnRed)
  const FormIdRed = useSelector((state) => state.FormIdRed)
  const FormDatRed = useSelector((state) => state.FormDatRed)
  const ModalGridRed = useSelector((state) => state.ModalGridRed)
  const AuthRed = useSelector((state)=>state.AuthRed)
  const GetDataRed = useSelector((state)=> state.GetDataRed)
  const EmdRed = useSelector((state)=>state.EmdRed)
  const MainObjIdRed = useSelector((state)=>state.MainObjIdRed)



  const [defaultVal, setdefaultVal] = useState([])
  const [obj, setObj] = useState({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(23)

    dispatch(FetchModalSectionData(FormIdRed,AuthRed.val))
    dispatch(FetchModalGridData(FormIdRed,AuthRed.val))
    dispatch(FetchModalColumnData(FormIdRed,EmdRed,AuthRed.val))
  }, [])


  useEffect(() => {
    if (!ModalSectionRed.loading && !ModalColumnRed.loading && !ModalGridRed.loading) {
      // All requests have completed
      setProgress(100);
    } else if (!ModalSectionRed.loading || !ModalColumnRed.loading || !ModalGridRed.loading) {
      // At least one of the requests has completed
      setProgress(66); // You can adjust this value as needed
    }
  }, [ModalSectionRed, ModalColumnRed, ModalGridRed]);

  // useEffect(()=>{
  //   console.log('modal',ModalSectionRed)
  //   console.log('modal',ModalGridRed)
  //   console.log('modal',ModalColumnRed)
  // },[ModalSectionRed])
  useEffect(() => {
    // console.log('finalObj',ModalColumnRed)
    // console.log('finalObj',Array.isArray(FormDatRed))
    // console.log('finalObj',FormDatRed)
    // console.log(
    //   'finalObj',FormDatRed.length
    // )
    // console.log('finalObj', FormDatRed)
    if (FormDatRed.length > 2) {
      const data = FormDatRed[FormDatRed.length - 1]
      const colList = Object.keys(FormDatRed[FormDatRed.length - 1][0]);
      const grdId = ModalColumnRed.val.filter((fil) => { return colList.includes(fil.accessor) })[0].gridId

      setObj((prev) => {
        return {
          ...prev,
          [grdId]: data.map((res) => { return { ...res, gridId: grdId, ...FormDatRed[0] } })
        }
      })
    }

  }, [FormDatRed])

  // useEffect(()=>{
  //   console.log('ModalGridRed',ModalGridRed)
  // },[ModalGridRed])
  // console.log('finalObj', [[FormDatRed[0]], ...Object.values(obj)])
  // console.log('finalObj', JSON.stringify(Object.values(obj)))

  return (
    <div>
      {
        ModalSectionRed.loading ? MainObject.loader() :
        ModalGridRed.loading ? MainObject.loader() :
        ModalColumnRed.loading ? MainObject.loader() :
        MainObject.addTabs(ModalSectionRed.val,ModalGridRed.val,ModalColumnRed.val.sort((a,b)=> a.number - b.number))
      }
    </div>
  )
}

export default ModalFormAdd
