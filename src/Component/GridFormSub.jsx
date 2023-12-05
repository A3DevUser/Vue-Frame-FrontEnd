import React from 'react'
import { useSelector } from 'react-redux'
import { MainObject } from './Elements/commonFun'

const GridFormSub = ({column,data,gridData,handleSave}) => {

  const FormDatRed = useSelector((state)=>state.FormDatRed)


  console.log('GridFormSub',data)
  console.log('GridFormSub',FormDatRed)

  return (
    <div>
      {
         <div>{ MainObject.table(column,data,gridData,handleSave) }</div>
        // <FormTable col={ColumnRed.val} dData={[]}/>
      }
    </div>
  )
}

export default GridFormSub
