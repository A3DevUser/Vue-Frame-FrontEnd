import React, { useEffect, useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useFilters, usePagination, useSortBy, useBlockLayout, useRowSelect } from 'react-table'
import GlobalFilter from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'
import { useSticky } from 'react-table-sticky'
import { Styles } from './AddTableStyles'
import './AddTable.css'
import AddHead from './AddHead'
import { Checkbox } from './Checkbox'
import { addRow,removeRows } from './AddTableFunctions'
import { ColumnHeader } from './ColumnHeaderAdd'
import { useDispatch, useSelector } from 'react-redux'
import { FetchDropValData } from '../../../Store/Actions/DropVal'
import { EditableActionCell } from '../../../Component/FormTableDir/EditableCell'
import { MainObject } from '../../../Component/Elements/commonFun'
import { AddTableMainFormData, AddTableMultFormData } from '../../../Store/Actions/GeneralStates'
import { AddTableReset } from '../../../Store/Actions/AddTablePostAct'


const AddTab = ({columnData, reportData,gridData,handleSave }) => {

    const dispatch = useDispatch()

    const AuthRed = useSelector((state) => state.AuthRed)
    const DropValRed = useSelector((state) => state.DropValRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)
    const SendObjectIdRed = useSelector((state)=>state.SendObjectIdRed)
    const AddTableMultFormDataRed = useSelector((state)=>state.AddTableMultFormDataRed)
    const MainObjIdRed = useSelector((state)=>state.MainObjIdRed)
    const AddTablePostRed = useSelector((state)=>state.AddTablePostRed)

    const isMain = gridData.isMain == "true" ? true : false



    const calculateColumnWidth = (tableWidth, totalColumns) => {
        return Math.floor(tableWidth / totalColumns);
    };

    const handleOnfocus = (fid, gid, cid, rData, oData, rowInd) => {
        // console.log('dropvaldata',rData)
        // console.log('dropvaldata',encodeURI(JSON.stringify(rData)))
        let rowData = encodeURI(JSON.stringify(rData))
        dispatch(FetchDropValData(fid, gid, cid, rowData, oData, rowInd, AuthRed.val))
      }

    const formData = new FormData()
    const updateMyData = (rowIndex, columnId, value, fileData) => {
      if (fileData) {
        formData.append('file', fileData)
        // formData is the final variable for fileData
      }

      if(isMain){
          setdata(old =>
            old.map((row, index) => {
              if (index == rowIndex) {
                return {
                  ...old[rowIndex],
                  [columnId]: value
                }
              }
              return row
            })
          )
      }else{
        setdata(old =>
            old.map((row, index) => {
              if (index == rowIndex) {
                return {
                  ...old[rowIndex],
                  [columnId]: value,
                  VF_MAIN_OBJ_ID : MainObjIdRed
                }
              }
              return row
            })
          )
      }
    }

    useEffect(()=>{
        if(!AddTablePostRed.loading&&data.length >0){
            setdata([])
            dispatch(AddTableReset())
        }
    },[AddTablePostRed])
    
    
    // useEffect(()=>{console.log('NewNav FormIdRed',ReportTitleDataRed.val.length)})
    
    const [data, setdata] = useState([...reportData])
    const [columns, setcolumns] = useState(
        [...ColumnHeader(columnData, updateMyData, '', '', gridData, data, handleOnfocus, DropValRed.val)]
    );
    const [show,setshow] =useState(false)
    

    useEffect(()=>{
        if(!SendObjectIdRed.loading&&gridData.isMain){
            setdata(old => 
                old.map((row,index)=>{
                    if(index == data.length-1){
                        return  {...row,VF_MAIN_OBJ_ID:SendObjectIdRed.val.objId}
                    }else{
                        return {...row}
                    }
                })
                )
            }
    },[SendObjectIdRed])

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])

    const initialState = { hiddenColumns: columnData.filter((fil) => { return fil.hideShow == 'true' && gridData.gridId == fil.gridId }).map((res) => { return res.accessor }) }


    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        //   footerGroups, 
        page,
        selectedFlatRows,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        prepareRow,
        state,
        setGlobalFilter } = useTable({
            columns,
            data,
            defaultColumn,
            autoResetPage: false,
            autoResetFilters: false,
            autoResetSortBy: false,
            initialState
        }, useFilters, useBlockLayout, useGlobalFilter, useSortBy, usePagination,useSticky,useRowSelect,(hooks) => {
            hooks.visibleColumns.push((columns) => {
              return [{
                id: 'selection',
                Header: ({ getToggleAllRowsSelectedProps }) => {
                  return <Checkbox {...getToggleAllRowsSelectedProps()} />
                },
                Cell: ({ row }) => {
                  return <Checkbox {...row.getToggleRowSelectedProps()} />
                },
                width: '50',
                sticky: 'left'
              },
              ...columns]
            })
          })

          useEffect(()=>{
            if(isMain){
                dispatch(AddTableMainFormData({[gridData.gridId] : data}))
            }else{
                dispatch(AddTableMultFormData({...AddTableMultFormDataRed,[MainObjIdRed]:
                    {...AddTableMultFormDataRed[MainObjIdRed],[gridData.gridId] : data }                
                }))
            }
          },[data])

        //   useEffect(()=>{
        //       console.log('finalData',AddTableMultFormDataRed)

        //   },[AddTableMultFormDataRed])

          function handleShowMulti(){
            setshow(!show)
        }

        function showFunc(){
            setshow(!show)
        }

        
        const { globalFilter } = state
        const { pageIndex } = state
        return (
            <>
{       show&&MainObject.addTableMultiModal(show,showFunc,gridData,setdata)}        
        {
            // SendObjectIdRed.loading  ? MainObject.loader() :
            <div style={{ padding: 'auto 1px' }} >
                <AddHead addRow={addRow} removeRows={removeRows} columnData={columnData} selectedFlatRows={selectedFlatRows} setdata={setdata} gridData={gridData} isMain={isMain} dispatch={dispatch} formId={FormIdRed} gridId={gridData.gridId} token={AuthRed.val} handleShowMulti={handleShowMulti} handleSave={handleSave}/>
                <Styles>
                    <div {...getTableProps()} className="table sticky mx-3 my-1 tableCont " style={{ maxHeight: '80vh', maxWidth: '97.3vw', overflow: 'scroll', border: 'none' }} >
                        <div className='header'>
                            {
                                headerGroups.map((headerGroup) => (
                                    <>
                                        <div className='tr' {...headerGroup.getHeaderGroupProps()}>
                                            {
                                                headerGroup.headers.map((column) => (
                                                    <div className='th' {...column.getHeaderProps()}>{column.render('Header')}
                                                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                        <div className='body' {...getTableBodyProps()}>
                            {
                                page.map((row) => {
                                    prepareRow(row)
                                    return <div className='tr' {...row.getRowProps()}>
                                        {
                                            row.cells.map((cell) => (
                                                <div className='td' {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </div>
                                            ))
                                        }
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </Styles>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '16px', paddingLeft: '18px' }}>
                    <div>
                        <span>
                            page: {' '}
                            <strong>
                                {pageIndex + 1} of {pageOptions.length}
                            </strong>{' '}
                        </span>
                        {/* <button onClick={() => previousPage()} disabled={!canPreviousPage}><TbPlayerTrackNextFilled /> Previous</button>
                        <button onClick={() => nextPage()} disabled={!canNextPage}>Next </button> */}
                        <button className='btn btn-outline-secondary btn-sm mx-2' title='Previous page' onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                        <button className='btn btn-outline-secondary btn-sm' title='Next page' onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                        {/* <Pagination><Pagination.Next /></Pagination> */}
                    </div>
                </div>
            </div>
}
        </>
    )
}

export default AddTab