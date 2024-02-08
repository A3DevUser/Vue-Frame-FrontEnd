import React, { useEffect, useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useFilters, usePagination, useSortBy, useBlockLayout,useRowSelect } from 'react-table'
import { ColumnFilter } from '../ReportTable/ColumnFilter'
import { Styles } from '../ReportTable/ReportStyles'
import '../FormTableDir/TableStyle.css'
import { useDispatch, useSelector } from 'react-redux'
import { useSticky } from 'react-table-sticky'
import './CheckerTab.css'
import CheckerResponseModal from './CheckerResponseModal'
import { SendCheckerData } from '../../Store/Actions/SendCheckerData'
import { useNavigate } from 'react-router'



const CheckerFormTab = ({reviewId, reviewName, review_freq, review_type, sub_frequency, columnData, reportData }) => {
    // const ReportTitleDataRed = useSelector((state) => state.ReportTitleDataRed)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const AuthRed = useSelector((state)=>state.AuthRed)


    const calculateColumnWidth = (tableWidth, totalColumns) => {
        return Math.floor(tableWidth / totalColumns);
    };


const [show,setshow] = useState(false)
    const [columns, setcolumns] = useState(
        // columnData
        [...columnData.map((res) => { return { Header: res.fieldName, accessor: res.accessor, Filter: ColumnFilter, width: res.width ? res.width : calculateColumnWidth(1.0 * window.innerWidth, columnData.length) } })]
    );


    const [data, setdata] = useState([...reportData])
    const [response,setresponse] = useState({})


    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])

    const handleModal = (e) =>{
            setshow(!show)
            setresponse((old)=>{return {...old,reviewStatus : e.target.value}})
    }

    function handleDataSave(){
       setshow(!show)
       const newData = [...data]
       const finalData = newData.map((res)=>{
        return {...res,...response, reviewId : reviewId, reviewName : reviewName, review_type : review_type}
       })

    //    console.log('ModalfinalData',finalData)

       dispatch(SendCheckerData(finalData,AuthRed.val,navigate))
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
        <CheckerResponseModal setshow={setshow} show={show}  handleDataSave={handleDataSave} setresponse={setresponse}/>
            <div style={{ padding: 'auto 1px' }} className='mainReviewDiv' >
                <div className='tableDiv'>
                    {/* <div></div> */}
                    <div className='headerDrop'  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '90vw', paddingLeft: '18px', marginTop: '-3px', marginBottom: '9px' }}>
                        <div>
                        <h4>Review Title&nbsp;:-&nbsp;{reviewName}</h4>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: '3px'}}>
                        <label htmlFor="aprroveReject" id='aprroveRejectLabel'>Result </label>
                        <select id="aprroveReject" className='form-control' onChange={(e)=>{handleModal(e)}}>
                            <option value="">Select One</option>
                            <option value="Approved">Approve</option>
                            <option value="Rejected">Reject</option>
                        </select>
                        </div>
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