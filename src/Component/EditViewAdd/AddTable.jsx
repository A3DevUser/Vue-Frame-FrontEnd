import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostFormExcelData } from '../../Store/Actions/FormExcelPostAct'
import { FetchWFCommonData } from '../../Store/Actions/WorkFlowCommon'
import { FetchColumnData } from '../../Store/Actions/Column'
import { FetchGridData } from '../../Store/Actions/GridAct'
import { MainObject } from '../../Component/Elements/commonFun'
import GridFormSub from '../../Component/GridFormSub'
import { FormDataAct } from '../../Store/Actions/GeneralStates'
import swal from 'sweetalert'
import AddTab from './AddTable/AddTab'
import { PostAddTableData } from '../../Store/Actions/AddTablePostAct'

const AddTable = () => {
    const dispatch = useDispatch()


    const ColumnRed = useSelector((state)=>state.ColumnRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)
    const GridRed = useSelector((state)=>state.GridRed)
    const FormDatRed = useSelector((state)=>state.FormDatRed)
    const EmdRed = useSelector((state)=>state.EmdRed)
    const ExcelDataRed = useSelector((state)=>state.ExcelDataRed)
    const AuthRed = useSelector((state)=>state.AuthRed)
    const UserDataStateRed = useSelector((state)=>state.UserDataStateRed)
    const SendObjectIdRed = useSelector((state)=>state.SendObjectIdRed)

    const AddTableMultFormDataRed = useSelector((state)=>state.AddTableMultFormDataRed)
    const AddTableFormDataRed = useSelector((state)=>state.AddTableFormDataRed)
    const AddTablePostRed = useSelector((state)=>state.AddTablePostRed)


    const [disBtn,setDisBtn] = useState(false)
    // const [dataObj,setDataObj] = useState({})
    const [dataValidation,setDataValidation] = useState(false)

    useEffect(()=>{
    dispatch(FetchGridData(FormIdRed,AuthRed.val))
    dispatch(FetchColumnData(FormIdRed,EmdRed,AuthRed.val))  
    },[FormIdRed])

    // const handleSave = (gridData,setdata,data) =>{
    //     // console.log('FormDatRed',Object.values(FormDatRed).filter((fil)=>{return fil.length > 0})) 
    //     // console.log('FormDatRed',ExcelDataRed)
    //    console.log('newFormDataRed',FormDatRed)
    //       // dispatch(PostFormExcelData(res)) 

    //       // console.log('FormDatRedData',FormDatRed)

    //       // Object.values(FormDatRed).forEach((res)=>{
    //       //   dispatch(PostFormExcelData(res,AuthRed.val)) 
    //       // })

    //       // Object.keys(FormDatRed).forEach((res)=>{
    //       //   dispatch(FetchWFCommonData(res,AuthRed.val))
    //       // })

    //         if(data.some(res => (FormIdRed == 'FORM-722' ? res.VF_ACTION == '' || res.VF_ACTION == null || res.VF_ORGANISATION_ID == '' || res.VF_ORGANISATION_ID == null || res.Cost_Code == '' || res.Cost_Code_Name == '' || res.Department_Name == '' || res.Process == '' || res.Process == null : FormIdRed == 'FORM-704' ? res.VF_ACTION == '' || res.VF_ACTION == null || res.VF_ORGANISATION_ID == '' || res.VF_ORGANISATION_ID == null || res.Vendor_Name == '' || res.Vendor_Code == '' || res.Vendor_Pan_No == '' || res.Vendor_Email == '' || res.Vendor_Type == '' || res.Vendor_Type == null : FormIdRed == 'FORM-703' ? res.VF_ACTION == '' || res.VF_ACTION == null || res.VF_ORGANISATION_ID == '' || res.VF_ORGANISATION_ID == null || res.Critical == '' || res.act_classific == '' || res.Act_desc == '' || res.Act_Name == '' || res.Act_No == '' || res.Activity_Type == '' || res.Risk_level == '' || res.Sensitivity == '' || res.Process == '' || res.Cost_Code == '' : FormIdRed == 'FORM-842' ? res.VF_ACTION == '' || res.VF_ACTION == null || res.VF_ORGANISATION_ID == '' || res.VF_ORGANISATION_ID == null || res.Assessment_Type == '' || res.Review_Year == '' || res.Activity_name == '' || res.Cost_Code == '' || res.State == '' || res.City == '' || res.Associate_Vend == '' || res.Business_Unit == '' || res.Vendor_Status == '' || res.onboarding_date == '' || res.Review_Freq == '' || res.review_cycle == '' : FormIdRed == 'FORM-885' ? res.VF_ACTION == '' || res.VF_ACTION == null || res.VF_ORGANISATION_ID == '' || res.VF_ORGANISATION_ID == null || res.Review_Type == '' || res.Review_Freq == '' || res.Sub_Frequency == '' || res.Associate_Act == '' || res.Associate_Ven == '' || res.Business_Unit == '' || res.Vendor_Name == '' || res.Vendor_Status == '' || res.Vendor_OnB_Date == '' || res.Assessment_Type == '' : ''))){
    //           swal({
    //             title :'Alert',
    //             text : 'Field cant be Empty, Kindly Fill All the Details!',
    //             icon: "warning",
    //         })
    //         }else{
    //             // setDataValidation(true)
    //             console.log('FormDatRed',JSON.stringify(FormDatRed))
    //             Object.keys(FormDatRed).forEach((res)=>{
    //               if(Array.isArray(FormDatRed[res])){
    //                 // console.log('UPDATEUSERDATA',FormDatRed[res].forEach(obj => obj["VF_CREATED_BY"] = UserDataStateRed))
    //                 // let finData = FormDatRed[res].forEach(obj => obj["VF_CREATED_BY"] = UserDataStateRed)
    //                 // console.log('UPDATEUSERDATA',finData)
    //                 dispatch(PostFormExcelData(UserDataStateRed,FormDatRed[res],AuthRed.val,setdata,setDisBtn)) 
    //                 // setDataValidation(false)
    //                 // console.log('FormDatRedDatanew',FormDatRed[res])
    //               }else{
    //                 Object.values(FormDatRed[res]).forEach((fres)=>{
    //                   dispatch(PostFormExcelData(UserDataStateRed,fres,AuthRed.val,setdata,setDisBtn))
    //                   // setDataValidation(false)
    //                 })
      
    //               }
    //             })
    //         }
    //   }

    useEffect(()=>{
    },[GridRed,ColumnRed])

      function handleSave(){
        Object.values(AddTableFormDataRed).forEach((res)=>{
          dispatch(PostAddTableData(UserDataStateRed,res,AuthRed.val,setDisBtn))
        })

        Object.values(AddTableMultFormDataRed).forEach((res)=>{
          dispatch(PostAddTableData(UserDataStateRed,Object.values(res)[0],AuthRed.val,setDisBtn))
        })
        
      }

      useEffect(()=>{
        // console.log('AddTableMultFormDataRed',AddTableMultFormDataRed.length)
        // if (Array.isArray(AddTableMultFormDataRed)){
        

        // Object.values(AddTableMultFormDataRed).map((res) => {
        //     return Object.keys(res)[0]
        //  }).forEach((fe) => {
        //   Object.values(AddTableMultFormDataRed).forEach((fres) => {
        //     console.log('AddTableFormDataRed',fres)
        //   })
        //  })
        // }
        
      },[AddTableMultFormDataRed,AddTableFormDataRed])

  return (
<div style={{marginTop:'3vh', paddingLeft:'1.3rem',paddingRight:'1rem'}}>
      {
        GridRed.loading ? MainObject.loader() :
        ColumnRed.loading  ? MainObject.loader() :
        GridRed.val.filter((fil)=>{return fil.isMain }).map((res,i)=>{
          let dataObj = {}
          ColumnRed.val.filter((fil)=>{
            return fil.gridId == res.gridId
          }).forEach((fe)=>{return dataObj[fe.accessor]=''})
         return  <AddTab columnData={ColumnRed.val.sort((a,b)=>{return a.number-b.number})} reportData={AddTableFormDataRed.hasOwnProperty(res.gridId) ? AddTableFormDataRed[res.gridId].length == 0 ? [] : AddTableFormDataRed[res.gridId] : [] } gridData={res} handleSave={handleSave}  />
        //  <GridFormSub column={ColumnRed.val.sort((a,b)=>{return a.number-b.number})} data=
        //  {[]}
        //  gridData={res} key={i} handleSave={handleSave} disBtn={disBtn} setDisBtn={setDisBtn}/>
        })
      }
    </div>
  )
}

export default AddTable
