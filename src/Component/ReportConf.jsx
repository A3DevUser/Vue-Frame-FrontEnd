import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainObject } from './Elements/commonFun';
// import FormTable from './FormTableDir/FormTable';
import { FetchConfColumnData } from '../Store/Actions/ConfColumn'
import { FetchConfGridData } from '../Store/Actions/ConfGridAct'
import { FetchConfSectionData } from '../Store/Actions/ConfSection'
import { FormConfData } from '../Store/Actions/SendConfData';
import { useLocation, useNavigate } from 'react-router';
import './CSS/FormConf.css'
import { Alert } from 'react-bootstrap';
import swal from 'sweetalert';
import { FetchFormEditData } from '../Store/Actions/FormEditAct';

const ReportConf = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate()
    const SectionRed = useSelector((state)=>state.ConfSectionRed)
    const ColumnRed = useSelector((state)=>state.ConfColumnRed)
    const GridRed = useSelector((state)=>state.ConfGridRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)
    const FormDatRed = useSelector((state) => state.FormDatRed)
    const SendConfDataRed = useSelector((state) => state.SendConfDataRed)    
    const AuthRed = useSelector((state)=>state.AuthRed)
    const FormEditRed = useSelector((state)=>state.FormEditRed)



    const [defaultVal,setdefaultVal] =useState([])
    const [obj, setObj] = useState({});

    function funSave() {
      // console.log('finalObj',Object.values(obj))
    }

    useEffect(()=>{
        dispatch(FetchConfSectionData(FormIdRed,AuthRed.val))
        dispatch(FetchConfGridData(FormIdRed,AuthRed.val))
        dispatch(FetchConfColumnData(FormIdRed,AuthRed.val))
        dispatch(FetchFormEditData(location.state !== null ? location.state.formId : '' ,AuthRed.val))
    },[FormIdRed])

    // useEffect(()=>{
    //   console.log('location',FormEditRed)
    // },[FormEditRed])

    const width = '75vw'

    const handleSave = (val) =>{
      if(Object.keys(FormDatRed).includes(val.gridId)){
        // console.log('mainGrid Val',val.gridId)
        const FormData = FormDatRed[val.gridId].map((res) => {return {...res, ...SendConfDataRed.val, targetId: val.gridId}})
        // console.log('FormDataNewVal',JSON.stringify(FormData))
        dispatch(FormConfData(val.api,FormData,AuthRed.val))
        }
    }

  return (
    <div>
        <div style={{float:'right'}}>  </div>
        <div style={{display: 'flex', flexDirection: 'row', maxHeight:'100vh' }} className='main-div'>
            <div style={{flex: '15%',height:'89vh',maxHeight:'89vh',overflow:'scroll'}} className='bg-light secNavDiv'>
            {
                SectionRed.loading ? MainObject.loader() : GridRed.loading ? MainObject.loader() :  MainObject.SectionNav(SectionRed.val,GridRed.val,setdefaultVal)
            }
            </div>
        <div style={{flex: '95%',height:'89vh'}} data-spy="scroll" data-target='sectionNavbar' className='bg-light'>
        {
            SectionRed.loading ? MainObject.loader() : GridRed.loading ? MainObject.loader() : ColumnRed.loading ? MainObject.loader() : FormEditRed.loading ? MainObject.loader() : defaultVal&&MainObject.conftabs(SectionRed.val,GridRed.val,ColumnRed.val.sort((a,b) => parseInt(a.number) - parseInt(b.number)),FormEditRed.val,defaultVal,setdefaultVal,handleSave)
        }
        </div>
        </div>
    </div>
  )
}

export default ReportConf