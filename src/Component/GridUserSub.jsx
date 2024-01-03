import React from 'react'
import { useSelector } from 'react-redux'
import { MainObject } from './Elements/commonFun'

const GridUserSub = ({column,data,gridData,handleSave,disBtn,setDisBtn}) => {

  const FormDatRed = useSelector((state)=>state.FormDatRed)


  // console.log('GridFormSub',column)
  // console.log('GridFormSub',FormDatRed)

  return (
    <div>
      {
         <div>{ MainObject.table(column,data,gridData,handleSave,disBtn,setDisBtn) }</div>
        // <FormTable col={ColumnRed.val} dData={[]}/>
      }
    </div>
  )
}

export default GridUserSub
