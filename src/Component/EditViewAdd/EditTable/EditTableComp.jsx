import { Styles } from '../../../Component/ReportTable/ReportStyles'
import { ColumnFilter } from '../../../Component/ReportTable/ColumnFilter'
import React, { useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useFilters, usePagination, useSortBy, useBlockLayout, useRowSelect } from 'react-table'
import { useSticky } from 'react-table-sticky'
import { Checkbox } from '../../../Component/FormTableDir/Checkbox'
import { ColumnHeaderEdit } from './ColumnHeaderEdit'
import { useDispatch, useSelector } from 'react-redux'
import { FetchDropValData } from '../../../Store/Actions/DropVal'


const EditTableComp = ({columnData, tableData,gridData,handleSave }) => {

    const dispatch = useDispatch()

    const DropValRed = useSelector((state) => state.DropValRed)
    const AuthRed = useSelector((state)=>state.AuthRed)
    const isMain = gridData.isMain == "true" ? true : false





    const [data,setdata] = useState([...tableData])
    const [columns, setcolumns] = useState([...ColumnHeaderEdit(columnData, updateMyData, '', '', gridData, data, handleOnfocus, DropValRed.val)])

    function handleOnfocus(fid, gid, cid, rData, oData, rowInd){
        // console.log('dropvaldata',rData)
        // console.log('dropvaldata',encodeURI(JSON.stringify(rData)))
        let rowData = encodeURI(JSON.stringify(rData))
        dispatch(FetchDropValData(fid, gid, cid, rowData, oData, rowInd, AuthRed.val))
      }

    const formData = new FormData()
    function updateMyData(rowIndex, columnId, value, fileData){
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

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])

    // const initialState = { hiddenColumns: columnData.filter((fil) => { return fil.hideShow == 'true' && gridData.gridId == fil.gridId }).map((res) => { return res.accessor }) }


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
            // initialState
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

          const { pageIndex } = state

  return (
    <>
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
    </>
  )
}

export default EditTableComp