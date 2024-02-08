
import React, { useEffect, useState } from "react"
import { MainObject } from "../../Elements/commonFun"
import { useDispatch, useSelector } from "react-redux"
import { FormDataAct, FormIdAct, MainObjId, ResetObjId } from "../../../Store/Actions/GeneralStates"
import DownloadOpt from "../../ImportExport/DownloadOpt"
import ExcelReader from "../../ImportExport/Upload"
import { Link } from "react-router-dom"
import { FetchImportColumnData } from "../../../Store/Actions/ImportColumnAct"
import { FetchImportGridData } from "../../../Store/Actions/ImportGridAct"
import RichText from "../../../Component/RichText/RichText"
import { Button, InputGroup, Modal } from "react-bootstrap"
import ModalFormAdd from "./ModalFormAdd"

export const EditableCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    rowObj : rowObj,
    valWidth : valWidth,
    type : type,
    gridIdVal: gridIdVal,
    parentId
  }) => {
    const SendConfDataRed = useSelector((state) => state.SendConfDataRed)    
    const SendReportConfDataRed = useSelector((state) => state.SendReportConfDataRed)

    const [value, setValue] = React.useState(initialValue)
    const [freeze,setFreeze] = useState()

    const onChange = e => {
      setValue(e.target.value)
    }
  

    // useEffect(()=>{
    //   if(id=='formId'){
    //     console.log('NEWSendReportConfDataRed',SendConfDataRed.val.formId)
    //     updateMyData(index, id, SendConfDataRed.val.formId,null)
    //     setFreeze(true)
    //   }else if (id =='wfId'){
    //     updateMyData(index, id, SendConfDataRed.val.wfId,null)
    //     setFreeze(true)
    //   }
    // },[SendConfDataRed])

    useEffect(()=>{
      if (gridIdVal = 'GID-015'){
        if (id == 'columnName'){
          setFreeze(true)
        }
      }

      if (id =='dsId'){
        // console.log('NEWSendReportConfDataRed',SendReportConfDataRed.val)
        updateMyData(index, id, SendReportConfDataRed.val.dsId,null)
        // setFreeze(true)
      }else if (id =='expId'){
        updateMyData(index, id, SendReportConfDataRed.val.expId,null)
        // setFreeze(true)
      }else if (id =='rptId'){
        updateMyData(index, id, SendReportConfDataRed.val.rptId,null)
        // setFreeze(true)
      }
      
    },[SendReportConfDataRed])

    const onBlur = () => {
      updateMyData(index, id, value,null)
      // console.log('maxlengthpro',colObj)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
    
    return <div>
      <textarea value={value} className='form-control' style={{width:colObj.width,border:'none'
      // , background : value ? '#28a745' : 'white', color : 'white', 
      }} onChange={onChange} onBlur={onBlur} placeholder='Type here...' maxLength={valWidth} disabled={freeze}/>
      {/* xyz */}
    </div>
  }

  // let dataObj ={}
  let freez = '';

  export const EditableDdCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData,
    dropDown : dropDown ,
    colObj:colObj,
    rowObj : rowObj,
    parentId,
    handleOnfocus,
    dropDownData : dropDownData
  }) => {
    const [value, setValue] = React.useState(initialValue)
    const [dataValdd,setdataValdd] = useState()
    
    const SendConfDataRed = useSelector((state)=> state.SendConfDataRed)
    const SendReportConfDataRed = useSelector((state) => state.SendReportConfDataRed)
    const AuthRed = useSelector((state)=>state.AuthRed)

    const onChange = e => {
      setValue(e.target.value)
      if(e.target.value == 'textArea'){
        freez = false
      }else{
        freez = true
      }
    }
  
    const onBlur = () => {
        updateMyData(index, id, value,null,'')
    }
  
    // const updatedArray = Object.values(dataValdd.reduce((acc, curr) => {
    //   acc[curr.formId] = curr;
    //   return acc;
    //   }, {}));

    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    useEffect(()=>{
      Object.keys(SendConfDataRed.val).forEach((res)=>{
        return updateMyData(index, res, SendConfDataRed.val[res],null,'')
      })

    },[SendConfDataRed])

    useEffect(() => {
      if (parentId.gridIdVal != 'GID-015'){
        Object.keys(SendReportConfDataRed.val).forEach((res)=>{
          return updateMyData(index, res, SendReportConfDataRed.val[res],null,'')
        })
      }
    },[SendReportConfDataRed])

    // useEffect(()=>{
    //   if(colObj.id == 'Review_Freq'){
    //         if(rowObj.original.cellType == 'textArea' || rowObj.original.cellType == ''){
    //           setFreeze(false)
    //         }else{
    //           setFreeze(true)
    //           setValue('')
    //         }
    //       }else{
    //         setFreeze(false)
    //       }
    // },[rowObj])

    // useEffect(()=>{console.log('dropDownec',dataValdd)},[dataValdd])

    const dispatch = useDispatch()
    const DropValRed = useSelector((state) => state.DropValRed)
    const DropDownValRed = useSelector((state)=> state.DropDownValRed)
    const ColumnRed = useSelector((state)=>state.ConfColumnRed)
    const [dropdownArray,setDropdownArray] = useState([]);

    // var dropdownArray = []

    useEffect(() => {
      if (value != null){
        setDropdownArray(value.split('$$')); 
        // console.log('valueDropValRed',initialValue)
        // console.log('valueDropValRed',value.split('$$'))
        
      }
    },[])

  return <select name={id} value={value} onFocus={()=>{handleOnfocus(parentId.formIdVal,parentId.gridIdVal,parentId.colIdVal,parentId.json.original,DropValRed.val,index)}} onChange={onChange} onBlur={onBlur} className='form-control' style={{width:colObj.width,height:'7vh', border:'none'}} disabled={rowObj.original.isDisable}>
    {value != null&&window.location.pathname == '/editTable' ? <><option value={dropdownArray[0]}>{dropdownArray[1]}</option></> : value != null&&window.location.pathname == '/editConfForm' ? <><option value={dropdownArray[0]}>{dropdownArray[1]}</option></> : value != null&&window.location.pathname == '/editWorkFlowConf' ? <><option value={dropdownArray[0]}>{dropdownArray[1]}</option></> : value != null&&window.location.pathname == '/editDataSource' ? <><option value={dropdownArray[0]}>{dropdownArray[1]}</option></> : value != null&&window.location.pathname == '/editReport' ? <><option value={dropdownArray[0]}>{dropdownArray[1]}</option></> : <><option value="">Select One</option></>}
    {/* {value != null&&window.location.pathname == ('/editConfForm') ? <><option value={dropdownArray[0]}>{dropdownArray[1]}</option></> : <><option value="">Select One</option></>} */}
      {/* <option value="">Select One</option> */}
      {
       DropValRed.loading ? <option>loading...</option> : 
       DropValRed.val.filter((fil)=>{return (fil.ColId == parentId.colIdVal)&&(fil.rowInd == index)}).map((res,i)=>{
            return <option key={i} value={res.storedValue}>{res.displayValue}</option>
      })
      }
           </select>
  }

  export const EditableNumCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    rowObj : rowObj,
    valWidth : valWidth,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)
    const [freeze,setFreeze] = useState()

  
    const onChange = e => {
      if(/^\d*\.?\d*$/.test(e.target.value)){
        if(valWidth == 4000){
          const newValue = Math.min(e.target.value, 4000);
          setValue(newValue)
        }else{
          setValue(e.target.value)
        }
      }
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,'')
      // console.log('dropDownec',colObj.id)
    }


    useEffect(()=>{
      if(colObj.id == 'dbcolLimit'){
            if(rowObj.original.cellType == 'textArea' || rowObj.original.cellType == ''){
              setFreeze(false)
            }else{
              setFreeze(true)
              setValue('')
            }
          }else{
            setFreeze(false)
          }
    },[rowObj])
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    return <div>
      <input value={value} type={'number'} className='form-control' style={{width:colObj.width, border:'none'}} onChange={onChange} onBlur={onBlur} placeholder='Type here...' disabled={freeze} 
      min={'0'}/>
    </div>
  }

  export const EditableDateCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    rowObj : rowObj,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,'')
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    return <div>
      <input value={value} type={'date'} className='form-control' style={{width:colObj.width, border:'none'}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...'  />
      {/* xyz disabled={rowObj.original.isDisable}*/}
    </div>
  }

  export const EditableMixCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData,
    dropDown,
    rowObj : obj,
    colObj:colObj,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    let opt
if(dropDown.filter((fil,i)=>{return i==index})[0].mixVal){
  opt= dropDown.filter((fil,i)=>{return i==index})[0].mixVal.split(',')
}
  
    if(obj.original.inputType==='text'){
      return <div>
      <textarea value={value} className='form-control' style={{width:colObj.width, border:'none'
      }} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' disabled={obj.original.isDisable} />
    </div>
    }else if(obj.original.inputType==='number'){
      return <div>
      <input value={value} type={'number'} className='form-control' style={{width:colObj.width}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' disabled={obj.original.isDisable} />
    </div>
    }else if(obj.original.inputType==='date'){
      return <div>
      <input value={value} type={'date'} className='form-control' style={{width:colObj.width}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' disabled={obj.original.isDisable} />
    </div>
    }else if(obj.original.inputType==='dropDown'){
      return <select value={value} onChange={onChange} onBlur={onBlur} className='form-control' style={{width:colObj.width,height:'7vh'}} disabled={obj.original.isDisable}>
      <option>Select One</option>
      {
        opt.map((res,i)=>{
            return <option key={i}>{res}</option>
        })

      }
           </select>
    }
  }

  export const EditableAttachCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    rowObj : rowObj,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)

    const onChange = e => {
      let date =  Date.now()
      const modifiedFile = new File([e.target.files[0]],e.target.files[0].name.replace('.',date+'.'))
      
      setValue(modifiedFile.name )
      // const formData = new FormData()
      // formData.append('file',modifiedFile)
      updateMyData(index, id,modifiedFile.name,modifiedFile)
    }

    const handleDownload = (downTxt) =>{
      alert(downTxt)
    }

  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    const handleRemove = ()=>{
      setValue(null)
    }


    return <div>
      { value==='' || value===null || value === undefined ?
        <input type={'file'}  className='form-control' style={{width:colObj.width, border:'none'}} onChange={onChange}  placeholder='Enter Remark...' disabled={rowObj.original.isDisable} /> :
        <div ><span onClick={(e)=>{handleDownload(value)}} className='fileName'>{value}</span><br/><button className="btn btn-danger btn-sm"  onClick={handleRemove}>Remove</button></div>
      }
    </div>
  }


  export const EditableLogicCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData,
    dropDown ,
    colObj:colObj,
    rowObj : rowObj,
    parentId

  }) => {
    const [value, setValue] = React.useState(initialValue)

    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id,true)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    let opt = dropDown.filter((fil,i)=>{return i==index})[0].logicDd.split(',').map((res)=>{ return res.split('-')}).map((res)=>{ return {title :res[0], value : res[1]}})
  
    return <select value={value} onChange={onChange} onBlur={onBlur} className='form-control' style={{width:colObj.width,height:'7vh'}} disabled={rowObj.original.isDisable}>
      <option>Select One</option>
      {
        opt.map((res,i)=>{
            return <option key={i} value={res.value}>{res.title}</option>
        })

      }
           </select>
  }

  export const EditableMksCell = ({
    value: initialValue,
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    return <h3 align='center'>{value}</h3>
  }

  export const EditableAnaCell = ({
    value: initialValue,
    rowObj : obj,
  }) => {
    const [value, setValue] = React.useState(initialValue)

    useEffect(()=>{
      setValue()
    },[])
  
  
    React.useEffect(() => {
      if(initialValue==0){
        setValue(0)
      }else{
        setValue(obj.original[
          Object.keys(obj.original).filter((fil)=>{return fil.includes('$#')}).filter((fil)=>{return fil.includes('max')})[0]])
      }
    }, [initialValue])
  
    return <h3 align='center'>{value}</h3>
  }


  export const EditableStaticCell = ({
    value: initialValue,
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    return <h3 align='center'>{value}</h3>
  }

  export const EditableActionCell = ({
    row:  index ,
    column:  id ,
    addAndDeleteRow, 
    colObj:colObj,
    rowObj : rowObj
  }) => {

    

    const handleClick = (act) =>{
      // dispatch(FetchObjectIdData(FormIdRed,AuthRed.val))

      let Obj = {}
      Object.keys(rowObj.original).forEach((fe)=>{Obj[fe] =''})
      // console.log(Obj)
      addAndDeleteRow(index,Obj,act)
    }
    return <div className="container" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      {/* <button className="btn btn-success mx-1" onClick={()=>{handleClick('add')}}>Add</button> */}
      <button className="btn btn-danger" onClick={()=>{handleClick('remove')}}>
        <i class="bi bi-trash"></i>
       </button>
    </div>
  }

  export const EditableActionPopCell = ({
    row:  index ,
    column:  id ,
    colObj:colObj,
    rowObj : rowObj,
    gridData : gridData
  }) => {

    const dispatch = useDispatch()
    const[show,setshow] = useState(false)
    const FormDatRed = useSelector((state) => state.FormDatRed)


    const handleFunc = () => {
      // console.log('SendObjectIdRed',rowObj.original.VF_MAIN_OBJ_ID)
      setshow(!show)
      // console.log('rowObj',rowObj)
      dispatch(MainObjId(rowObj.original.VF_MAIN_OBJ_ID))
      dispatch(ResetObjId())
      dispatch(FormDataAct(FormDatRed))
    }

    const VF_MAIN_OBJ_ID = rowObj.original.VF_MAIN_OBJ_ID
    
    return <div style={{ display: 'flex', alignItems: 'center', height: '10vh', justifyContent: 'center'}}>
      {MainObject.modalButton('Actions', handleFunc)}
      {MainObject.modalpop('',<><ModalFormAdd VF_MAIN_OBJ_ID={VF_MAIN_OBJ_ID} /></>,show,handleFunc)}
    </div>
  }


  export const EditableImporter = ({
    gridData: gridData,
    columnData: columnData
  }) => {
const ImportColumnRed = useSelector((state)=>state.ImportColumnRed)
const ImportGridRed = useSelector((state)=>state.ImportGridRed)



    return <DownloadOpt griData={ImportGridRed.val} columnData={ImportColumnRed.val}/>
  }

  export const EditableUploader = ({
    gridData: gridData,
    columnData: columnData
  }) => {

    const ImportColumnRed = useSelector((state)=>state.ImportColumnRed)
    const ImportGridRed = useSelector((state)=>state.ImportGridRed)


    // useEffect(()=>{
    //   console.log('ImportGridRed',ImportGridRed)
    //   console.log('ImportColumnRed',ImportColumnRed)
    
    // },[ImportColumnRed,ImportGridRed])

    return<div className="container">     
      <ExcelReader gridData={ImportGridRed.val} columnData={ImportColumnRed.val}/>
      </div>

  }

  export const EditableLink = ({
    to: path,
    lable: lable,
    rowObj : rowObj,
    gridIdVal: gridIdVal 
  }) => {

    const dispatch = useDispatch()
    
    // const handleClick = () =>{
    //   if(gridIdVal == 'GID-576'){
    //       dispatch(FormIdAct('FORM-105'))
    //   }else if(gridIdVal == 'GID-641'){
    //       dispatch(FormIdAct('FORM-106'))
    //   }else{
    //     // console.log('FormDataNewVal',gridIdVal)        
    //   }

    // }
    const handleClick = () =>{
      if (gridIdVal == 'GID-576') {
        sessionStorage.setItem('formId','FORM-105')
        dispatch(FormIdAct('FORM-105'))
      } else if (gridIdVal == 'GID-641') {
        sessionStorage.setItem('formId','FORM-106')
        dispatch(FormIdAct('FORM-106'))
      } else if (gridIdVal == 'GID-924') {
        sessionStorage.setItem('formId','FORM-203')
        dispatch(FormIdAct('FORM-203'))
        // console.log('FormDataNewVal',gridIdVal)        
      }else if(gridIdVal == 'GID-925'){
        sessionStorage.setItem('formId','FORM-202')
        dispatch(FormIdAct('FORM-202'))
      }else{
        // console.log('empty');
      }
    }
    // console.log('FormDataNewVal',{formId : rowObj.original.form_id},path)
    return <Link to={{pathname : path}} state={{formId : rowObj.original.form_id}} onClick={handleClick}  >{lable}</Link>
  }

  export const EditableDdIe = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData,
    dropDown : dropDown ,
    colObj:colObj,
    rowObj : rowObj,
    parentId,
    handleOnfocus,
    dropDownData : dropDownData
  }) => {
    
    const [value, setValue] = React.useState(initialValue)
    const [dataValdd,setdataValdd] = useState()
    
    const SendConfDataRed = useSelector((state)=> state.SendConfDataRed)
    const AuthRed = useSelector((state)=>state.AuthRed)
    const dispatch = useDispatch()


    const onChange = e => {
      setValue(e.target.value)
      dispatch(FetchImportColumnData(e.target.value,AuthRed.val))
      dispatch(FetchImportGridData(e.target.value,AuthRed.val))
      // console.log('rowObj')
      // if(e.target.value == 'textArea'){
      //   freez = false
      // }else{
      //   freez = true
      // }
    }
  
    const onBlur = () => {
        updateMyData(index, id, value,null,'')
    }
  
    // const updatedArray = Object.values(dataValdd.reduce((acc, curr) => {
    //   acc[curr.formId] = curr;
    //   return acc;
    //   }, {}));

    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    // useEffect(()=>{
    //   Object.keys(SendConfDataRed.val).forEach((res)=>{
    //     return updateMyData(index, res, SendConfDataRed.val[res],null,'')
    //   })

    // },[SendConfDataRed])

    // useEffect(()=>{console.log('dropDownec',dataValdd)},[dataValdd])

    // const dispatch = useDispatch()
    const DropValRed = useSelector((state) => state.DropValRed)
    // const DropDownValRed = useSelector((state)=> state.DropDownValRed)
    // const ColumnRed = useSelector((state)=>state.ConfColumnRed)
    // console.log('DropValRed',DropValRed)

  return <select name={id} value={value} onFocus={()=>{handleOnfocus(parentId.formIdVal,parentId.gridIdVal,parentId.colIdVal,parentId.json.original,DropValRed.val,index)}} onChange={onChange} onBlur={onBlur} className='form-control' style={{width:colObj.width,height:'7vh', border:'none'}} disabled={rowObj.original.isDisable}>
      <option value="">Select One</option>
      {
       DropValRed.loading ? <option>loading...</option> : 
       DropValRed.val.filter((fil)=>{return (fil.ColId == parentId.colIdVal)&&(fil.rowInd == index)}).map((res,i)=>{
            return <option key={i} value={res.storedValue}>{res.displayValue}</option>
      })
      }
           </select>
  }

  export const PendencyLink = ({
    to: path,
    lable: lable,
  }) => {

    const dispatch = useDispatch()
    
    const handleClick = () =>{
          dispatch(FormIdAct('FORM-106'))
    }

    return <Link to={{pathname : path}} >{lable}</Link>
  }

 export const EditableRtf = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj : colObj
 }) =>{

  const [show,setshow] = useState(false)
  const [value,setvalue] = useState('')
  const [displayTxt,setDisplayTxt]=useState('')

  const handleModal = ()=>{
    setshow(!show)
  }

  useEffect(()=>{
    if(!show){
      updateMyData(index, id, value,null)
    }
  },[show])

  return( 
  <>
  {/* <Button variant="primary" onClick={handleModal}>  <i class="bi bi-file-earmark-richtext"></i>  {colObj.Header}</Button> */}
  <InputGroup>
  <textarea maxLength='5' style={{width:colObj.width}} className='form-control' onClick={handleModal} value={displayTxt} readOnly />
  <InputGroup.Text id="btnGroupAddon">
  <span style={{fontSize:'25px'}} class="bi bi-file-earmark-text"></span>
    </InputGroup.Text>
  </InputGroup>
  <Modal show={show} size="lg" centered>
    <Modal.Title style={{marginLeft:'1vw'}}>{colObj.Header}</Modal.Title>
    <Modal.Body><RichText setvalue={setvalue} setDisplayTxt={setDisplayTxt} value={value} /></Modal.Body>
    <Modal.Footer><Button onClick={handleModal}>Close</Button></Modal.Footer>
  </Modal>
  </>
  )

 }

 export const EditablePartyLink = ({
  rowObj : rowObj,
 }) =>{

  return <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
  <Link to={'/partysheet'} state={{rowData :rowObj.original}} >Assesment Form</Link>
  </div>
 }


 export const EditableHomeLink = ({}) =>{

  return (
  <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
  <Link to={'/homesheet'}>Assesment Form</Link>
  </div>)

 }


 export const EditableDisableDdCell = ({
  value: initialValue,
  row:  index ,
  column:  id ,
  updateMyData,
  dropDown : dropDown ,
  colObj:colObj,
  rowObj : rowObj,
  parentId,
  handleOnfocus,
  dropDownData : dropDownData
}) => {
  const [value, setValue] = React.useState(initialValue)
  const [dataValdd,setdataValdd] = useState()
  
  const SendConfDataRed = useSelector((state)=> state.SendConfDataRed)
  const SendReportConfDataRed = useSelector((state) => state.SendReportConfDataRed)
  const AuthRed = useSelector((state)=>state.AuthRed)

  const onChange = e => {
    setValue(e.target.value)
    if(e.target.value == 'textArea'){
      freez = false
    }else{
      freez = true
    }
  }

  const onBlur = () => {
      updateMyData(index, id, value,null,'')
  }

  // const updatedArray = Object.values(dataValdd.reduce((acc, curr) => {
  //   acc[curr.formId] = curr;
  //   return acc;
  //   }, {}));

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(()=>{
    Object.keys(SendConfDataRed.val).forEach((res)=>{
      return updateMyData(index, res, SendConfDataRed.val[res],null,'')
    })

  },[SendConfDataRed])

  useEffect(() => {
    if (parentId.gridIdVal != 'GID-015'){
      Object.keys(SendReportConfDataRed.val).forEach((res)=>{
        return updateMyData(index, res, SendReportConfDataRed.val[res],null,'')
      })
    }
  },[SendReportConfDataRed])

  // useEffect(()=>{console.log('dropDownec',dataValdd)},[dataValdd])

  const dispatch = useDispatch()
  const DropValRed = useSelector((state) => state.DropValRed)
  const DropDownValRed = useSelector((state)=> state.DropDownValRed)
  const ColumnRed = useSelector((state)=>state.ConfColumnRed)
  const [dropdownArray,setDropdownArray] = useState([]);

  // var dropdownArray = []

  useEffect(() => {
    if (value != null){
      setDropdownArray(value.split('$$')); 
      // console.log('valueDropValRed',value.split('$#'))
    }
  },[])

return <select name={id} value={value} onFocus={()=>{handleOnfocus(parentId.formIdVal,parentId.gridIdVal,parentId.colIdVal,parentId.json.original,DropValRed.val,index)}} onChange={onChange} onBlur={onBlur} className='form-control' style={{width:colObj.width,height:'7vh', border:'none'}} disabled='true'>
  {value != null&&window.location.pathname == '/editTable' ? <><option value={dropdownArray[0]}>{dropdownArray[1]}</option></> : <><option value="">Select One</option></>}
    {/* <option value="">Select One</option> */}
    {
     DropValRed.loading ? <option>loading...</option> : 
     DropValRed.val.filter((fil)=>{return (fil.ColId == parentId.colIdVal)&&(fil.rowInd == index)}).map((res,i)=>{
          return <option key={i} value={res.storedValue}>{res.displayValue}</option>
    })
    }
         </select>
}


export const DisableCell = ({
  value: initialValue,
  row:  index ,
  column:  id ,
  updateMyData, 
  colObj:colObj,
  rowObj : rowObj,
  valWidth : valWidth,
  type : type,
  gridIdVal: gridIdVal,
  parentId
}) => {
  const SendConfDataRed = useSelector((state) => state.SendConfDataRed)    
  const SendReportConfDataRed = useSelector((state) => state.SendReportConfDataRed)

  const [value, setValue] = React.useState(initialValue)
  const [freeze,setFreeze] = useState()

  const onChange = e => {
    setValue(e.target.value)
  }

  const onBlur = () => {
    updateMyData(index, id, value,null)
    // console.log('maxlengthpro',colObj)
  }

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])
  
  return <div>
    <textarea value={value} className='form-control' style={{width:colObj.width,border:'none'
    // , background : value ? '#28a745' : 'white', color : 'white', 
    }} onChange={onChange} onBlur={onBlur} placeholder='Type here...' maxLength={valWidth} disabled='true'/>
    {/* xyz */}
  </div>
}

export const  ExternalA3Link = ({
  rowObj : rowObj,
}) =>{

  const UserDataStateRed = useSelector((state)=>state.UserDataStateRed)

  const auditId = rowObj.original.VF_MAIN_OBJ_ID;

  return <a href={`http://192.168.100.233:3001/?AuditId=${auditId}&UserId=${UserDataStateRed}&auditType=Universal%20branch`} target="_blank" >Perform Assesment</a>
}