import React, { useEffect, useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useFilters, usePagination, useSortBy, useBlockLayout, useRowSelect } from 'react-table'
import GlobalFilter from '../ReportTable/GlobalFilter'
import { ColumnFilter } from '../ReportTable/ColumnFilter'
import { Styles } from '../ReportTable/ReportStyles'
import '../FormTableDir/TableStyle.css'
import { Checkbox } from '../FormTableDir/Checkbox'
import { useSticky } from 'react-table-sticky'
import ComboOverViewModal from './ComboOverViewModal'
import ComboDevidePartySheet from './ComboDevidePartySheet'

const ComboPartySheetTable = ({ columnData, tableData }) => {

    const [data, setdata] = useState([...tableData])
    const [columns, setcolumns] = useState([...columnData
        // ...columnData.map((res)=>{
        // return {Header: res.fieldName, accessor : res.accessor}})
    ])


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
        rows,
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
        }, useFilters, useBlockLayout, useGlobalFilter, useSortBy, usePagination, useSticky, useRowSelect, (hooks) => {
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
            {/* <ComboOverViewModal  /> */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className='my-2' style={{ display: 'flex', justifyContent: 'space-between', width: '97%', gap: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ComboDevidePartySheet />
                    </div>
                    <button className='btn btn-outline-success'><i class="bi bi-floppy"></i></button>
                </div>
                <div>
                    <Styles>
                        <div {...getTableProps()} className="table sticky table-hover table-striped mx-3" style={{ width: '97%', height: '75vh' }}>
                            <div className="header">
                                {headerGroups.map((headerGroup) => (
                                    <div className='tr' {...headerGroup.getHeaderGroupProps()}>
                                        {
                                            headerGroup.headers.map((column) => (
                                                <div {...column.getHeaderProps(column.getSortByToggleProps())} className="th">
                                                    <div ></div>
                                                    {column.render('Header')}
                                                    <span>
                                                        {column.isSorted
                                                            ? column.isSortedDesc
                                                                ? ' 🔽'
                                                                : ' 🔼'
                                                            : ''}
                                                    </span>
                                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))}
                            </div>
                            <div {...getTableBodyProps()} className="body">
                                {page.map((row) => {
                                    prepareRow(row);
                                    return (
                                        <div {...row.getRowProps()} className="tr">
                                            {row.cells.map((cell) => (
                                                <div {...cell.getCellProps()} className="td">
                                                    <center>
                                                        {cell.render('Cell')}
                                                    </center>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '16px', paddingLeft: '18px' }}>
                            <div>
                                <span>
                                    page: {' '}
                                    <strong>
                                        {pageIndex + 1} of {pageOptions.length}
                                    </strong>{' '}
                                </span>
                                <button className='btn btn-outline-secondary btn-sm mx-2' title='Previous page' onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                                <button className='btn btn-outline-secondary btn-sm' title='Next page' onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                            </div>
                            <div>
                                <strong>Total Records 00</strong>
                            </div>
                        </div>
                        <pre>
                            <code>
                                {JSON.stringify(
                                    {
                                        selectedFlatRows: selectedFlatRows.map((row) => row.original),
                                    },
                                    null,
                                    2
                                )}
                            </code>
                        </pre>
                    </Styles>
                </div>
            </div>
        </>
    )
}

export default ComboPartySheetTable