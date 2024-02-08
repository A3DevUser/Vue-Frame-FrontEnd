import axios from "axios"
import React, { useEffect, useState } from "react"
export const NewEditableCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)
    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    return <div>
      <textarea value={value} className='form-control' 
      // style={{width:colObj.width
      // // , background : value ? '#28a745' : 'white', color : 'white',
      // }} 
      style={{border:'none'}}
      onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
      {/* xyz */}
    </div>
  }

  export const EditableDdCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData,
    dropDown ,
    colObj:colObj,
    parentId

  }) => {
    const [value, setValue] = React.useState(initialValue)

    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    let opt = ['Pass','Fail','Na']
    // dropDown.filter((fil,i)=>{return i==index})[0].dropDown.split(',')

  
    return <select value={value} onChange={onChange} onBlur={onBlur} className='form-control' style={{width:colObj.width,height:'7vh', border:'none'}}>
      <option>Select One</option>
      {
        opt.map((res,i)=>{
            return <option key={i}>{res}</option>
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
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

  
    return <div>
      <input value={value} type={'number'} className='form-control' 
      // style={{width:colObj.width}} 
      onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
      {/* xyz */}
    </div>
  }

  export const EditableDateCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    return <div>
      <input value={value} type={'date'} className='form-control' 
      // style={{width:colObj.width}} 
      onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
      {/* xyz */}
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
      updateMyData(index, id, value,null)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

//     let opt
// if(dropDown.filter((fil,i)=>{return i==index})[0].mixVal){
//   opt= dropDown.filter((fil,i)=>{return i==index})[0].mixVal.split(',')
// }
  
    if(obj.original.resType==='textArea'){
      return <div>
      <textarea  value={value} className='form-control' style={{width:colObj.width, border:'none'
      }} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
    </div>
    }else if(obj.original.resType==='number'){
      return <div>
      <input value={value} type={'number'} min={0} className='form-control' style={{width:colObj.width, border:'none'}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
    </div>
    }else if(obj.original.resType==='date'){
      return <div>
      <input value={value} type={'date'} className='form-control' style={{width:colObj.width, border:'none'}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
    </div>
    }else if(obj.original.resType==='dropDown'){
      return <select value={value} onChange={onChange} onBlur={onBlur} className='form-control' style={{width:colObj.width,height:'7vh', border:'none'}}>
      <option>Select One</option>
      {/* {
        opt.map((res,i)=>{
            return <option key={i}>{res}</option>
        })

      } */}
      <option>Pass</option>
      <option>Fail</option>
      <option>Na</option>


           </select>
    }
  }

  export const EditableAttachCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
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
        <input type={'file'}   onChange={onChange}  placeholder='Enter Remark...' /> :
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
    parentId

  }) => {
    const [value, setValue] = React.useState(initialValue)

    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id.id,true)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    let opt = dropDown.filter((fil,i)=>{return i==index})[0].logicDd.split(',').map((res)=>{ return res.split('-')}).map((res)=>{ return {title :res[0], value : res[1]}})
  
    return <select value={value} onChange={onChange} onBlur={onBlur} className='form-control' style={{width:colObj.width,height:'7vh'}}>
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

  export const RiskRatingDropDown = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    parentId,
    setmaxScore
  }) =>{


    const [value, setValue] = React.useState(initialValue)
    const onChange = e => {
      setValue(e.target.value)
    }

  
    const onBlur = () => {
      // console.log(parentId)
      updateMyData(index, id, value,null,parentId.column.parent.id.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
      setmaxScore(5)
    }, [initialValue])

    return <select className="form-control" onChange={onChange} onBlur={onBlur}>
      <option value={0}>Select One...</option>
      <option value={5}>High</option>
      <option value={3}>Medium</option>
      <option value={0}>Low</option>
    </select>
  }

  export const MARiskRatingDropDown = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    parentId,
    setmaxScore
  }) =>{


    const [value, setValue] = React.useState(initialValue)
    const onChange = e => {
      setValue(e.target.value)
    }

  
    const onBlur = () => {
      // console.log(parentId)
      updateMyData(index, id, value,null,parentId.column.parent.id.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
      setmaxScore(3)
    }, [initialValue])

    return <select className="form-control" onChange={onChange} onBlur={onBlur}>
      <option value={0}>Select One...</option>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
    </select>
  }

  export const EditableRateNumCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

  
    return <div>
      <input value={value > 3 ? 3 : value <0 ? 0 : value} type={'number'} min={'0'} max={'3'} className='form-control' 
      // style={{width:colObj.width}} 
      onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
      {/* xyz */}
    </div>
  }

  export const EditableDdqResCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    rowObj:rowObj,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

  
    return <div>
      <select onChange={onChange} onBlur={onBlur} className="form-control">
        <option value={''}>Select One...</option>
        {
          rowObj.RESPONSE_DISPLAY_VAL.split(',').map((res)=>{
            return <option value={res}>{res}</option>
          })
        }
      </select>
    </div>
  }

  export const EditableTpreResCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    rowObj:rowObj,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

  
    return <div> 
      <select onChange={onChange} onBlur={onBlur} className="form-control">
        <option value={''}>Select One...</option>
        {
          rowObj.original.RESPONSE_VALUE ?
          rowObj.original.RESPONSE_VALUE.sort((a,b)=>a.storedValue- b.storedValue).map((res)=>{
            return <option value={res.storedValue}>{res.displayValue}</option>
          })
          :
          <></>
        }
      </select>
    </div>
  }

  export const EditableRrtTextCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    rowObj:rowObj,
    parentId,
    col:col
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
    const responseAcc = col.filter((res)=>{
      return res.isdependent == 'true'
    })[0].accessor

    const finalResponseAcc = Object.keys(rowObj.original).filter((res)=>{
      return res.includes(responseAcc)
    })[0]

    useEffect(()=>{
      setValue(rowObj.original[`${finalResponseAcc}`])
    },[rowObj])


    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

  
    return <div>
      <input type="text" disabled={true} value={value == 1 ? 'Low' : value ==2 ? 'Medium' : value ==3 ? 'High' : '' } className="form-control" />
    </div>
  }