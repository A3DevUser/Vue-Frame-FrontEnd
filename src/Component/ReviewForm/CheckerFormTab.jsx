import React, { useEffect, useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useFilters, usePagination, useSortBy, useBlockLayout,useRowSelect } from 'react-table'
import { ColumnFilter } from '../ReportTable/ColumnFilter'
import { Styles } from '../ReportTable/ReportStyles'
import '../FormTableDir/TableStyle.css'
import { useDispatch, useSelector } from 'react-redux'
import { useSticky } from 'react-table-sticky'
import './CheckerTab.css'
import CheckerResponseModal from './CheckerResponseModal'



const CheckerFormTab = ({columnData, reportData }) => {
    // const ReportTitleDataRed = useSelector((state) => state.ReportTitleDataRed)

    const dispatch = useDispatch()
    const AuthRed = useSelector((state)=>state.AuthRed)


    const calculateColumnWidth = (tableWidth, totalColumns) => {
        return Math.floor(tableWidth / totalColumns);
    };


const [show,setshow] = useState(false)
    const [columns, setcolumns] = useState(
        columnData
        // [...columnData.map((res) => { return { Header: res.fieldName, accessor: res.accessor, Filter: ColumnFilter, width: res.width ? res.width : calculateColumnWidth(1.0 * window.innerWidth, columnData.length) } })]
    );


    const [data, setdata] = useState([...reportData])


    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])

    const handleModal = (e) =>{
            setshow(!show)
    }
   
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
        }, useFilters, useBlockLayout, useGlobalFilter, useSortBy, usePagination,useSticky,useRowSelect)

    const { globalFilter } = state
    const { pageIndex } = state
    return (
        <>
        <CheckerResponseModal setshow={setshow} show={show} />
            <div style={{ padding: 'auto 1px' }} className='mainReviewDiv' >
                <div className='tableDiv'>
                    <div className='headerDrop'>
                        <label htmlFor="aprroveReject" id='aprroveRejectLabel'>Result </label>
                        <select id="aprroveReject" className='form-control' onChange={(e)=>{handleModal(e)}}>
                            <option value="">Select One</option>
                            <option value="approve">Approve</option>
                            <option value="reject">Reject</option>
                        </select>
                    </div>
                    <div>
                <Styles>
                    <div {...getTableProps()} className="table sticky mx-3 my-1 tableCont " style={{ maxHeight: '65vh', maxWidth: '97.3vw', overflow: 'scroll', border: 'none' }} >
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
                </div>
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
            </div>

        </>
    )
}

export default CheckerFormTab