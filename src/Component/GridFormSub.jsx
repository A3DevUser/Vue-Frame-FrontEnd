import React from 'react'
import { MainObject } from './Elements/commonFun'

const GridFormSub = ({column,data,gridData,handleSave}) => {
  console.log('gridData',gridData)
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
