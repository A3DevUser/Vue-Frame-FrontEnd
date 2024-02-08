import React, { useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useFilters, usePagination, useSortBy, useBlockLayout, useRowSelect } from 'react-table'
import GlobalFilter from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'
import { Styles } from './ReportStyles'
import '../FormTableDir/TableStyle.css'
import Mock_data from './MOCK_DATA_TAB.json'
import { Columns } from './Columns'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import ReportDownloadOpt from '../ReportExp/ReportDownloadOpt'
import TableCell from '../../Component/FormTableDir/TableCell'
import { Link } from 'react-router-dom'
import { MultiCheckBox } from './MultiCheckBox'
import { useSticky } from 'react-table-sticky'
import { Checkbox } from '../../Component/A3dir/Checkbox'



const MultiRowAddTab = ({ titleData, columnData, multiRowData, handleMultiAdd }) => {

    const calculateColumnWidth = (tableWidth, totalColumns) => {
        return Math.floor(tableWidth / totalColumns);
    };

    // console.log('columnDataHeaderNew',columnData)

    const [columns, setcolumns] = useState(
        // Columns
        [...columnData.map((res) => {
            if(res.cellType == 'link'){
                return { Header: res.fieldName, 
                    accessor: res.accessor, 
                    Cell : ({cell}) =>{
                        return <Link to={{pathname : '/editTable'}} state={{formId: cell.row.original.formId,daysFlag:res.accessor}} 
                        // onClick={() => handleFormId(cell.row.original.formId, res.accessor)}
                        >{cell.value}</Link>
                    },
                    width: calculateColumnWidth(1 * window.innerWidth, columnData.length) } 
            }else{
                return { Header: res.fieldName, 
                   accessor: res.accessor, 
                   width: calculateColumnWidth(0.500 * window.innerWidth, columnData.length) } 
            }
            
            })]
    );

    // useEffect(()=>{console.log('NewNav FormIdRed',ReportTitleDataRed.val.length)})

    const [data, setdata] = useState([...multiRowData])

    // console.log('columnData', columns)

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])



    const { getTableProps,
        getTableBodyProps,
        headerGroups,
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
        },
        useBlockLayout,useFilters, useGlobalFilter, useSortBy, usePagination,
        useSticky,
        useRowSelect,
        (hooks)=>{
          hooks.visibleColumns.push((columns)=>{
            return [{
              id :'selection',
              Header : ({getToggleAllRowsSelectedProps})=>{
                return <MultiCheckBox {...getToggleAllRowsSelectedProps()}/>
              },
              Cell : ({row}) =>{
                return <MultiCheckBox {...row.getToggleRowSelectedProps()}/>
              },
              width:'50',
              sticky : 'left'
            },
            ...columns]
          })
        })


    const { globalFilter } = state
    const { pageIndex } = state

    return (
        <>
            <div style={{ padding: 'auto 1px' }} >

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '90vw', paddingLeft: '18px', marginTop: '-3px', marginBottom: '9px' }}>
                    {titleData.map((res) => { return <h4 style={{ fontFamily: 'Trebuchet MS' }} >{res.Title}</h4> })}
                    {/* <div style={{ paddingTop: '-5px', marginTop: '-4px', marginRight: '-32em' }}>
                        <div>
                            <ReportDownloadOpt repoData = {ReportTitleDataRed.val} repoColunm = {ReportTitleColumnRed.val} 
                                    repoGrid = {ReportTitleGridRed.val}
                            />
                        </div>
                    </div> */}
                    <div style={{ paddingTop: '5px', marginTop: '20px' }}>

                        {/* <div style={{ display: 'inline-block' }}> */}
                        {/* <GlobalFilter filter={globalFilter} setfilter={setGlobalFilter} /> */}
                        <button className='btn btn-outline-success' style={{width: '', height: '', display:window.location.pathname.includes('viewTable') ?'none' :'block' }} onClick={()=>{handleMultiAdd(selectedFlatRows)}}><i title='Save' class="bi bi-plus-lg" ></i> Add to Grid</button>
                        {/* </div> */}
                    </div>
                </div>
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
                                                    <TableCell cell={cell}/>
                                                    {/* {cell.render('Cell')} */}
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
                    {/* <div>
                        <strong>Total Records {ReportTitleDataRed.val.length}</strong>
                    </div> */}
                </div>
            </div>

        </>
    )
}

export default MultiRowAddTab