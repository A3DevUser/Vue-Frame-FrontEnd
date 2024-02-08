import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainObject } from '../Elements/commonFun';
// import FormTable from './FormTableDir/FormTable';
// import { FetchConfColumnData } from '../Store/Actions/ConfColumn'
// import { FetchConfGridData } from '../Store/Actions/ConfGridAct'
// import { FetchConfSectionData } from '../Store/Actions/ConfSection'
// import { FormConfData } from '../Store/Actions/SendConfData';
import { useLocation, useNavigate } from 'react-router';
import '../CSS/FormConf.css'
import { Alert } from 'react-bootstrap';
import swal from 'sweetalert';
import { FetchFormEditData } from '../../Store/Actions/FormEditAct';
import { FetchDataSouConfSectionData } from '../../Store/Actions/DataSouConfSection';
import { FetchDataSouConfGridActData } from '../../Store/Actions/DataSouConfGridAct';
import { FetchDataSouConfColumnData } from '../../Store/Actions/DataSouConfColumn';
import { FormReportConfData } from '../../Store/Actions/SendReportConfData';
import { FetchDataSourceEditData } from '../../Store/Actions/DataSourceEdit';

const EditDataSource = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate()
    const SectionRed = useSelector((state)=>state.DataSouConfSectionRed)
    const ColumnRed = useSelector((state)=>state.DataSouConfColumnRed)
    const GridRed = useSelector((state)=>state.DataSouConfGridRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)
    const FormDatRed = useSelector((state) => state.FormDatRed)
    const SendConfDataRed = useSelector((state) => state.SendConfDataRed)    
    const SendReportConfDataRed = useSelector((state) => state.SendReportConfDataRed)
    const AuthRed = useSelector((state)=>state.AuthRed)
    const DataSourceEditRed = useSelector((state)=>state.DataSourceEditRed)

    // console.log('FormIdRed',FormIdRed);
    // console.log('FormIdRed',SectionRed);
    // console.log('FormIdRed',ColumnRed);
    // console.log('FormIdRed',GridRed);
    // console.log('WorkFlowEditRed SectionRed ',SectionRed);
    // console.log('WorkFlowEditRed GridRed ',GridRed);
    // console.log('WorkFlowEditRed ColumnRed ',ColumnRed);
    // console.log('WorkFlowEditRed FormIdRed ',FormIdRed);
    // console.log('WorkFlowEditRed FormDatRed ',FormDatRed);
    // console.log('WorkFlowEditRed DataSourceEditRed ',DataSourceEditRed);

    const [defaultVal,setdefaultVal] =useState([])
    const [obj, setObj] = useState({});

    function funSave() {
      // console.log('finalObj',Object.values(obj))
    }

    useEffect(()=>{
        dispatch(FetchDataSouConfSectionData(FormIdRed,AuthRed.val))
        dispatch(FetchDataSouConfGridActData(FormIdRed,AuthRed.val))
        dispatch(FetchDataSouConfColumnData(FormIdRed,AuthRed.val))
        dispatch(FetchDataSourceEditData(location.state !== null ? location.state.formId : '' ,AuthRed.val))
        // console.log('DataSourceEditRed',DataSourceEditRed);
    },[FormIdRed])

    // useEffect(()=>{
    //   console.log('location',FormEditRed)
    // },[FormEditRed])

    const width = '75vw'
    // ...SendReportConfDataRed.val, , targetId: val.gridId
    const handleSave = (val) =>{
      if(Object.keys(FormDatRed).includes(val.gridId)){
        if (val.gridId == 'GID-015'){
          const FormData = FormDatRed[val.gridId].map((res) => {return {...res}})
          // console.log('mainGrid Val else',FormData)
          dispatch(FormReportConfData(val.api,FormData,AuthRed.val ))
        }else{
          const FormData = FormDatRed[val.gridId].map((res) => {return {...res, ...SendReportConfDataRed.val, targetId: val.gridId}})
          // console.log('mainGrid Val else',FormData)
          dispatch(FormReportConfData(val.api,FormData,AuthRed.val))
        }
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
            SectionRed.loading ? MainObject.loader() : GridRed.loading ? MainObject.loader() : ColumnRed.loading ? MainObject.loader() : DataSourceEditRed.loading ? MainObject.loader() : defaultVal&&MainObject.conftabs(SectionRed.val,GridRed.val,ColumnRed.val.sort((a,b) => parseInt(a.number) - parseInt(b.number)),DataSourceEditRed.val,defaultVal,setdefaultVal,handleSave)
        }
        </div>
        </div>
    </div>
  )
}

export default EditDataSource;