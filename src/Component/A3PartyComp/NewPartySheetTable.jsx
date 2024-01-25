import React, { useEffect, useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useFilters, usePagination, useSortBy, useBlockLayout,useRowSelect } from 'react-table'
import GlobalFilter from '../ReportTable/GlobalFilter'
import { ColumnFilter } from '../ReportTable/ColumnFilter'
import { Styles } from '../ReportTable/ReportStyles'
import '../FormTableDir/TableStyle.css'
import { useDispatch, useSelector } from 'react-redux'
import { Checkbox } from '../FormTableDir/Checkbox'
import { useSticky } from 'react-table-sticky'
import { PartysheetColumns } from '../../Component/A3dir/Partysheet/PartySheetColumns'
import { useLocation } from 'react-router'

const NewPartySheetTable = ({columnData,tableData,vendorList}) => {

  const location = useLocation()

  const [data,setdata] = useState([...tableData])
  const [columns,setcolumns] = useState([...PartysheetColumns(columnData,vendorList,updateMyData)])
  const [finalData,setfinalData]=useState([])
  const [fileArr,setfileArr] =useState()
  const dispatch = useDispatch()


  const AuthRed = useSelector((state)=>state.AuthRed)

  const formData = new FormData()
  function updateMyData(rowIndex, columnId, value, fileData){

    if(fileData){
        formData.append('file',fileData)
        setfileArr(formData)
      }

    // const colName = columnId.slice(0,columnId.indexOf('#'));
    // const accNum = columnId.slice(columnId.indexOf('#')+1,columnId.length);
    // // need to spread account data while setting final data
    // setfinalData((old)=>( {...old,[accNum+rowIndex]:{id:accNum,...tableData[rowIndex],...old[accNum+rowIndex],[colName]:value,...accountData.filter((fil)=>{return fil.Associate_Vend==accNum})[0]}}))

      setdata(old =>
        old.map((row, index) => {
            if (index === Number(rowIndex)) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )   
  }

  const handleSave = () =>{

    let finData = data.map((res) => {
      return {...res, reviewId : location.state.reviewId, vendorId : '', reviewName : location.state.review_name}
    })

    console.log('savedataFinal',finData)
    dispatch(A3GetPartySheetData(finData,AuthRed.val))
    // alert('Data Saved Successfully !!')
  }

  useEffect(()=>{
    console.log('finalcolumns',columns)
  },[])

  const defaultColumn = useMemo(() => {
    return {
        Filter: ColumnFilter
    }
}, [])

  const { getTableProps,
    getTableBodyProps,
    headerGroups,
    //   footerGroups, 
    selectedFlatRows,
    page,
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
        defaultColumn
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

const { globalFilter } = state
const { pageIndex } = state

  return (
    <>
              <div className='tableDiv'>
                <div style={{display:'flex', justifyContent:'right', marginTop:'5px', marginRight:'10px'}}>
                <button onClick={handleSave} className='btn btn-success'>Save</button>
                </div>
                <Styles>
                    <div {...getTableProps()} className="table sticky mx-3 my-1 tableCont " style={{ maxHeight: '75vh', maxWidth: '97.3vw', overflow: 'scroll', border: 'none' }} >
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
    </>
  )
}

export default NewPartySheetTable