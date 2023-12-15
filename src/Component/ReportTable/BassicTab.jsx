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


const BassicTab = ({ gridData, columnData, reportData }) => {
    const ReportTitleDataRed = useSelector((state) => state.ReportTitleDataRed)

    const [columns, setcolumns] = useState(
        // Columns
        [...columnData.map((res) => { return { Header: res.rptColLabel, accessor: res.rptColName } })]
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

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems:'center', maxWidth: '90vw', paddingLeft: '18px', marginTop: '-3px', marginBottom: '9px' }}>
                    {gridData.map((res) => { return <h4 style={{ fontFamily: 'Palatino Linotype' }} >{res.rptTitle}</h4> })}
                    <div style={{ paddingTop: '5px' }}>
                        <GlobalFilter filter={globalFilter} setfilter={setGlobalFilter} />
                    </div>
                </div>
                <Styles>
                    <div {...getTableProps()} className="table sticky mx-3 my-1 tableCont " style={{ maxHeight: '80vh', maxWidth: '90vw', overflow: 'scroll', border: 'none' }} >
                        <div className='header'>
                            {
                                headerGroups.map((headerGroup) => (
                                    <div className='tr' {...headerGroup.getHeaderGroupProps()}>
                                        {
                                            headerGroup.headers.map((column) => (
                                                <div className='th' {...column.getHeaderProps()}>{column.render('Header')}
                                                    {/* <div
                      {...column.getResizerProps()}
                      className={`resizer`}
                    /> */}
                                                </div>
                                            ))
                                        }
                                    </div>
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
                        <button className='btn btn-secondary btn-sm mx-2' title='Previous page' onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                        <button className='btn btn-secondary btn-sm' title='Next page' onClick={() => nextPage()} disabled={!canNextPage}>Next</button> 
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