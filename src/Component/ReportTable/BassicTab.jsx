import React, { useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useFilters, usePagination, useSortBy, useBlockLayout } from 'react-table'
import GlobalFilter from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'
import { Styles } from './ReportStyles'
import '../FormTableDir/TableStyle.css'
import Mock_data from './MOCK_DATA_TAB.json'
import { Columns } from './Columns'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import ReportDownloadOpt from '../ReportExp/ReportDownloadOpt'


const BassicTab = ({ gridData, columnData, reportData }) => {
    const ReportTitleDataRed = useSelector((state) => state.ReportTitleDataRed)

    const calculateColumnWidth = (tableWidth, totalColumns) => {
        return Math.floor(tableWidth / totalColumns);
    };

    const [columns, setcolumns] = useState(
        // Columns
        [...columnData.map((res) => { return { Header: res.rptColLabel, accessor: res.rptColName, Filter: ColumnFilter, width: calculateColumnWidth(0.828 * window.innerWidth, columnData.length) } })]
    );

    // useEffect(()=>{console.log('NewNav FormIdRed',ReportTitleDataRed.val.length)})

    const [data, setdata] = useState([...reportData])

    console.log('columnData', columns)

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])

    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        //   footerGroups, 
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
        }, useFilters, useBlockLayout, useGlobalFilter, useSortBy, usePagination)

    const { globalFilter } = state
    const { pageIndex } = state
    return (
        <>
            <div style={{ padding: 'auto 1px' }} >

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '90vw', paddingLeft: '18px', marginTop: '-3px', marginBottom: '9px' }}>
                    {gridData.map((res) => { return <h4 style={{ fontFamily: 'Trebuchet MS' }} >{res.rptTitle}</h4> })}
                    <div style={{  paddingTop: '-5px', marginTop: '-4px', marginRight: '-32em', }}>
                            <div>
                                <ReportDownloadOpt />
                            </div>
                        </div>
                    <div style={{ paddingTop: '5px', marginTop: '20px' }}>
                        
                        {/* <div style={{ display: 'inline-block' }}> */}
                            <GlobalFilter filter={globalFilter} setfilter={setGlobalFilter} />
                        {/* </div> */}
                    </div>
                </div>
                <Styles>
                    <div {...getTableProps()} className="table sticky mx-3 my-1 tableCont " style={{ maxHeight: '80vh', maxWidth: '90vw', overflow: 'scroll', border: 'none' }} >
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
                    <div>
                        <strong>Total Records {ReportTitleDataRed.val.length}</strong>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BassicTab