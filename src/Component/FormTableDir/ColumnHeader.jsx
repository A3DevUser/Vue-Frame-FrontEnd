import { useEffect } from "react"
import { EditableActionCell, EditableActionPopCell, EditableAnaCell, EditableAttachCell, EditableCell, EditableDateCell, EditableDdCell, EditableDdIe, EditableImporter, EditableLink, EditableLogicCell, EditableMixCell, EditableMksCell, EditableNumCell, EditableStaticCell, EditableUploader, } from "./EditableCell"

export const ColumnHeader = (colData, updateMyData, dropDown, addAndDeleteRow, gridData, data, handleOnfocus, dropDownData) => {

  return colData.filter((fil) => { return fil.gridId == gridData.gridId }).map((res) => {
    console.log('colData',res)
    if (res.cellType === 'textArea') {
      return {
        Header: res.fieldName,
        accessor: res.accessor,
        Cell: ({ cell, row }) => {
          console.log('theCellData', row.getRowProps())
          console.log('theCellData', cell)

          return <EditableCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} colObj={cell.column} parentId={cell} rowObj={cell.row} valWidth={res.subSecWidth} type={res.cellType} />
        },
        width: res.width,
        sticky: res.sticky,
      }
    } else if (res.cellType === 'dropDown') {
      let formIdVal = res.formId
      let gridIdVal = res.gridId
      let colIdVal = res.columnId
      return {
        Header: res.fieldName,
        accessor: res.accessor,
        Cell: ({ cell }) => { return <EditableDdCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} dropDown={dropDownData} rowObj={cell.row} colObj={cell.column} parentId={{ formIdVal, gridIdVal, colIdVal, json: cell.row }} handleOnfocus={handleOnfocus} /> },
        width: res.width,
        sticky: res.sticky
      }
    } else if (res.cellType === 'date') {
      return {
        Header: res.fieldName,
        accessor: res.accessor,
        Cell: ({ cell }) => { return <EditableDateCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} colObj={cell.column} parentId={cell} rowObj={cell.row} /> },
        width: res.width,
        sticky: res.sticky


      }
    } else if (res.cellType === 'number') {
      return {
        Header: res.fieldName,
        accessor: res.accessor,
        Cell: ({ cell }) => { return <EditableNumCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} dropDown={dropDown} colObj={cell.column} parentId={cell} rowObj={cell.row} valWidth={res.subSecWidth} /> },
        width: res.width,
        sticky: res.sticky


      }
    } else if (res.cellType === 'attach') {
      return {
        Header: res.fieldName,
        accessor: res.accessor,
        Cell: ({ cell }) => { return <EditableAttachCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} colObj={cell.column} parentId={cell} rowObj={cell.row} /> },
        width: res.width,
        sticky: res.sticky
      }
    } else if (res.cellType === 'addRemove') {
      return {
        Header: res.fieldName,
        accessor: res.accessor,
        Cell: ({ cell }) => { return <EditableActionCell colObj={cell.column} column={cell.column.id} row={cell.row.id} rowObj={cell.row} addAndDeleteRow={addAndDeleteRow} /> },
        width: res.width,
        sticky: res.sticky
      }
    } else if (res.cellType === 'modalBtn') {
      return {
        Header: res.fieldName,
        accessor: res.accessor,
        Cell: ({ cell }) => { return <EditableActionPopCell colObj={cell.column} column={cell.column.id} row={cell.row.id} rowObj={cell.row} gridData={gridData} /> },
        width: res.width,
        sticky: res.sticky
      }
    } else if (res.cellType === 'iEdropDown') {
      let formIdVal = res.formId
      let gridIdVal = res.gridId
      let colIdVal = res.columnId
      return {
        Header: res.fieldName,
        accessor: res.accessor,
        Cell: ({ cell }) => {
          console.log(cell)
          return <EditableDdIe column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} dropDown={dropDownData} rowObj={cell.row} colObj={cell.column} parentId={{ formIdVal, gridIdVal, colIdVal, json: cell.row }} handleOnfocus={handleOnfocus} />
        },
        width: res.width,
        sticky: res.sticky
      }
    } else if (res.cellType === 'import') {

      return {
        Header: res.fieldName,
        accessor: res.accessor,
        Cell: ({ cell }) => {
          return <EditableImporter gridData={gridData} columnData={cell.column} />
        },
        width: res.width,
        sticky: res.sticky
      }

    } else if (res.cellType === 'export') {

      return{
        Header: res.fieldName,
        accessor: res.accessor,
        Cell : ({cell})=>{
          return<EditableUploader gridData={gridData} columnData={cell.column} />
        },
        width: res.width,
        sticky: res.sticky
      }

    }else if(res.cellType == 'link'){
      let gridIdVal = res.gridId
      return{
        Header: res.fieldName,
        accessor: res.accessor,
        Cell : ({cell})=>{
          console.log('cell.row',cell.row)
          return<EditableLink lable={gridIdVal== 'GID-576' ? 'Edit Form' : 'Edit WorkFlow'} to={'/confform'} rowObj={cell.row} gridIdVal={gridIdVal} />
        },
        width: res.width,
        sticky: res.sticky
      }
    }
     else {
      return {
        Header: res.fieldName,
        accessor: res.accessor,
        width: res.width,
        sticky: res.sticky

      }
    }

  })

}