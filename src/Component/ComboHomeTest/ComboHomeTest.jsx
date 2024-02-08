import React, { useEffect, useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useFilters, usePagination, useSortBy, useBlockLayout, useRowSelect } from 'react-table'
import GlobalFilter from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'
import { Styles } from './ReportStyles'
import '../FormTableDir/TableStyle.css'
import Mock_data from './MOCK_DATA_TAB.json'
import Columns from './Columns'
import { useDispatch, useSelector } from 'react-redux'
import ReportDownloadOpt from '../ReportExp/ReportDownloadOpt'
import { HomeTestCheckBox } from './HomeTestCheckBox'


const ComboHomeTest = () => {

    const ReportTitleColumnRed = useSelector((state) => state.ReportTitleColumnRed)
    const ReportTitleGridRed = useSelector((state) => state.ReportTitleGridRed)
    const ReportTitleDataRed = useSelector((state) => state.ReportTitleDataRed)
    const AuthRed = useSelector((state) => state.AuthRed)

    const dispatch = useDispatch()

    const [columns, setcolumns] = useState(
        [{
            Header: 'Id',
            Footer: 'Id',
            accessor: 'id',
            // Filter: ColumnFilter
            // disableFilters: true
        },
        {
            Header: 'First Name',
            Footer: 'First Name',
            accessor: 'first_name'
        },
        {
            Header: 'Last Name',
            Footer: 'Last Name',
            accessor: 'last_name'
        },
        {
            Header: 'Email',
            Footer: 'Email',
            accessor: 'email',
            // disableFilters: true
        },
        {
            Header: 'Date of Birth',
            Footer: 'Date of Birth',
            accessor: 'date_of_birth',
            // disableFilters: true
        },
        {
            Header: 'Age',
            Footer: 'Age',
            accessor: 'age',
            // disableFilters: true
        },
        {
            Header: 'Country',
            Footer: 'Country',
            accessor: 'country',
            // disableFilters: true
        },
        {
            Header: 'Phone',
            Footer: 'Phone',
            accessor: 'phone',
            // disableFilters: true
        }]
    );

    const [data, setdata] = useState([...Mock_data])

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])



    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        selectedFlatRows,
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
        }, useFilters, useBlockLayout, useGlobalFilter, useSortBy, usePagination,
            useRowSelect,
            (hooks) => {
                hooks.visibleColumns.push((columns) => {
                    return [{
                        id: 'selection',
                        Header: ({ getToggleAllRowsSelectedProps }) => {
                            return <HomeTestCheckBox {...getToggleAllRowsSelectedProps()} />
                        },
                        Cell: ({ row }) => {
                            return <HomeTestCheckBox {...row.getToggleRowSelectedProps()} />
                        },
                        width: '50',
                        sticky: 'left'
                    },
                    ...columns]
                })
            })

    // useEffect(() => {
    //     console.log('selectedFlatRows', selectedFlatRows)
    // }, [selectedFlatRows])

    const { globalFilter } = state
    const { pageIndex } = state
    return (
        <>
            <div style={{ padding: 'auto 1px' }} >

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '90vw', paddingLeft: '18px', marginTop: '-3px', marginBottom: '9px' }}>

                    <div style={{ paddingTop: '-5px', marginTop: '-4px', marginRight: '-32em' }}>
                        <div>
                            <ReportDownloadOpt repoData={ReportTitleDataRed.val} repoColunm={ReportTitleColumnRed.val}
                                repoGrid={ReportTitleGridRed.val}
                            />
                        </div>
                    </div>
                    <div style={{ paddingTop: '5px', marginTop: '20px' }}>

                        {/* <div style={{ display: 'inline-block' }}> */}
                        <GlobalFilter filter={globalFilter} setfilter={setGlobalFilter} />
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
            </div>

        </>
    )
}

export default ComboHomeTest