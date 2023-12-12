import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchSectionData } from '../Store/Actions/Section';
import { MainObject } from './Elements/commonFun';
// import FormTable from './FormTableDir/FormTable';
import { FetchColumnData } from '../Store/Actions/Column';
import { FetchSubSectionData } from '../Store/Actions/SubSection';
import { ResetAct } from '../Store/Actions/GeneralStates';
import { FetchGridData } from '../Store/Actions/GridAct';
import LoadingBar from 'react-top-loading-bar';

const Form = () => {

    const dispatch = useDispatch();
    const SectionRed = useSelector((state)=>state.SectionRed)
    const ColumnRed = useSelector((state)=>state.ColumnRed)
    const GridRed = useSelector((state)=>state.GridRed)
    const SubSectionRed = useSelector((state)=>state.SubSectionRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)
    const FormDatRed = useSelector((state) => state.FormDatRed)


    const [defaultVal,setdefaultVal] =useState([])
    const [obj, setObj] = useState({});


    useEffect(()=>{
      // console.log('Inside Form.jsx')
        dispatch(FetchSectionData( window.location.pathname === '/GridForm' ? 'FORM-101' :  FormIdRed))
        dispatch(FetchGridData(window.location.pathname === '/GridForm' ? 'FORM-101' : FormIdRed))
        dispatch(FetchColumnData(window.location.pathname === '/GridForm' ? 'FORM-101' : FormIdRed))
    },[FormIdRed])

      // console.log('location',window.location.pathname)
    // let obj = {};
    // SubSectionRed.val.forEach((res)=>{return obj[res.subSecId]=''})  
    // console.log('newObj',obj)
    useEffect(()=>{
        if((FormDatRed[FormDatRed.length-1] != undefined)&&(FormDatRed != null)){
          if(FormDatRed[FormDatRed.length-1][0] != undefined){
             const colList = Object.keys(FormDatRed[FormDatRed.length-1][0])
             const secId = ColumnRed.val.filter((fil)=>{return colList.includes(fil.accessor) })[0].subSecId
             setObj((prevObj) => {
              return {
                ...prevObj,
                [secId]: FormDatRed[FormDatRed.length - 1],
              };
            });
          }
        }
      },[FormDatRed])

      // console.log('finalObj',Object.values(obj))

    // useEffect(()=>{
    //   console.log(SectionRed)
    //   console.log('GridRed',GridRed)
    // },[GridRed])

    const width = '75vw'

  return (
<div style={{display: 'flex', flexDirection: 'row', maxHeight:'100vh' }} className='main-div'>
  <div style={{flex: '15%'}} className='bg-light'>
  {
  SectionRed.loading ? MainObject.loader() : GridRed.loading ? MainObject.loader() :  MainObject.SectionNav(SectionRed.val,GridRed.val,setdefaultVal)
  }
  </div>
  <div style={{flex: '95%',height:'80vh', maxHeight:'80vh', overflow:'scroll'}} data-spy="scroll" data-target='sectionNavbar' className='bg-light'>
  {
        SectionRed.loading ? MainObject.loader() : GridRed.loading ? MainObject.loader() : 
         ColumnRed.loading ? MainObject.loader() :
      defaultVal&&MainObject.tabs(SectionRed.val,GridRed.val,ColumnRed.val,[],defaultVal,setdefaultVal)
        //  MainObject.accordion(SectionRed.val,SubSectionRed.val,ColumnRed.val,[],width,defaultVal,setdefaultVal) 
  }
  </div>
    </div>
  )

}

export default Form
