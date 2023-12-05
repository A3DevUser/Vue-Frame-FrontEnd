import GridForm from "../GridForm"
import TestComp from "../../TestComp"
import React, { useEffect, useState } from "react"
import { MainObject } from "../Elements/commonFun"
import Form from "../Form"
import ModalForm from "../ModalForm"
import { useDispatch, useSelector } from "react-redux"
import { DropDownVal, FormDataAct, FormIdAct } from "../../Store/Actions/GeneralStates"
import { FetchDropValData } from "../../Store/Actions/DropVal"
import { FetchDropValSecData } from "../../Store/Actions/DropValSec"
import DownloadOpt from "../ImportExport/DownloadOpt"
import ExcelReader from "../ImportExport/Upload"
import { Link } from "react-router-dom"
import { FetchImportColumnData } from "../../Store/Actions/ImportColumnAct"
import { FetchImportGridData } from "../../Store/Actions/ImportGridAct"
import { FetchObjectIdData } from "../../Store/Actions/ObjectIdAct"
import RichText from "../../Component/RichText/RichText"
import { Button, Modal } from "react-bootstrap"

export const EditableCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    rowObj : rowObj,
    valWidth : valWidth,
    type : type,
    parentId
  }) => {
    const SendConfDataRed = useSelector((state) => state.SendConfDataRed)    

    const [value, setValue] = React.useState(initialValue)
    const [freeze,setFreeze] = useState()

    const onChange = e => {
      setValue(e.target.value)
    }
  
    // console.log('colId',id)
    useEffect(()=>{
      // console.log('fieldTypeVal',colObj)
      if(id=='formId'){
        // setValue(SendConfDataRed.val.formId)
        updateMyData(index, id, SendConfDataRed.val.formId,null)
        setFreeze(true)
      }else if (id =='wfId'){
        updateMyData(index, id, SendConfDataRed.val.wfId,null)
        setFreeze(true)
      }
    },[SendConfDataRed])
    const onBlur = () => {
      updateMyData(index, id, value,null)
      // console.log('maxlengthpro',colObj)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
    
    return <div>
      <textarea value={value} className='form-control' style={{width:colObj.width,height:'7vh',border:'none'
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

    // useEffect(()=>{console.log('dropDownec',dataValdd)},[dataValdd])

    const dispatch = useDispatch()
    const DropValRed = useSelector((state) => state.DropValRed)
    const DropDownValRed = useSelector((state)=> state.DropDownValRed)
    const ColumnRed = useSelector((state)=>state.ConfColumnRed)
    console.log('DropValRed',DropValRed)

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
    rowObj : rowObj,
  }) => {

    

    const handleClick = (act) =>{
      // dispatch(FetchObjectIdData(FormIdRed,AuthRed.val))

      let Obj = {}
      Object.keys(rowObj.original).forEach((fe)=>{Obj[fe] =''})
      // console.log(Obj)
      addAndDeleteRow(index,Obj,act)
    }
    return <div className="container">
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
      setshow(!show)
      // console.log(gridData)
      dispatch(FormDataAct(FormDatRed))
    }
    
    return <div style={{ display: 'flex', alignItems: 'center', height: '10vh', justifyContent: 'center'}}>
      {MainObject.modalButton('Actions', handleFunc)}
      {MainObject.modalpop('',<><ModalForm/></>,show,handleFunc)}
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


    useEffect(()=>{
      console.log('ImportGridRed',ImportGridRed)
      console.log('ImportColumnRed',ImportColumnRed)
    
    },[ImportColumnRed,ImportGridRed])

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
    
    const handleClick = () =>{
      if(gridIdVal == 'GID-576'){
          dispatch(FormIdAct('FORM-105'))
      }else if(gridIdVal == 'GID-641'){
          dispatch(FormIdAct('FORM-106'))
      }else{
        console.log('FormDataNewVal',gridIdVal)        
      }

    }
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
      console.log('rowObj')
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
    console.log('DropValRed',DropValRed)

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

 export const EditableRtf = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj : colObj
 }) =>{

  const [show,setshow] = useState(false)
  const [value,setvalue] = useState('')

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
  <Button variant="primary" onClick={handleModal}>  <i class="bi bi-file-earmark-richtext"></i>  {colObj.Header}</Button>
  <Modal show={show} size="lg" centered>
    <Modal.Title style={{marginLeft:'1vw'}}>{colObj.Header}</Modal.Title>
    <Modal.Body><RichText setvalue={setvalue} value={value} /></Modal.Body>
    <Modal.Footer><Button onClick={handleModal}>Close</Button></Modal.Footer>
  </Modal>
  </>
  )
 }