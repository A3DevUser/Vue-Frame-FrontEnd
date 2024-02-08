import React, { useEffect, useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useFilters, usePagination, useSortBy, useBlockLayout,useRowSelect } from 'react-table'
import GlobalFilter from '../ReportTable/GlobalFilter'
import { ColumnFilter } from '../ReportTable/ColumnFilter'
import { Styles } from '../ReportTable/ReportStyles'
import '../FormTableDir/TableStyle.css'
import './ReviewHome.css'
import { useDispatch, useSelector } from 'react-redux'
import { FetchReviewFreq, FetchReviewSubFreq } from '../../Store/Actions/ReviewFilterAct'
import { FetchReviewDataData } from '../../Store/Actions/ReviewFormDataAct'
import { Checkbox } from '../FormTableDir/Checkbox'
import { useSticky } from 'react-table-sticky'
import { SendReviewData } from '../../Store/Actions/SendReviewDataAct'
import { useLocation } from 'react-router'



const ReportReviewHome = ({ gridData, columnData, reportData }) => {
    // const ReportTitleDataRed = useSelector((state) => state.ReportTitleDataRed)

    const dispatch = useDispatch()
    const location = useLocation()
    const AuthRed = useSelector((state)=>state.AuthRed)
    const ReviewTypeFilterRed = useSelector((state)=>state.ReviewTypeFilterRed)
    const ReviewFreqFilterRed = useSelector((state)=>state.ReviewFreqFilterRed)
    const ReviewSubFreqFilterRed = useSelector((state)=>state.ReviewSubFreqFilterRed)
    const ReviewDataRed = useSelector((state)=>state.ReviewDataRed)

    const [reviewFilter,setreviewFilter] = useState([...reportData])

    // useEffect(()=>{
    //     console.log('ReviewTypeFilterRed',ReviewTypeFilterRed)
    // },[ReviewTypeFilterRed])

    const calculateColumnWidth = (tableWidth, totalColumns) => {
        return Math.floor(tableWidth / totalColumns);
    };



    const [columns, setcolumns] = useState(
        // Columns
        [...columnData.map((res) => { return { Header: res.fieldName, accessor: res.accessor, Filter: ColumnFilter, width: res.width ? res.width : calculateColumnWidth(1.0 * window.innerWidth, columnData.length) } })]
    );

    // console.log(columnData)
    // useEffect(()=>{console.log('NewNav FormIdRed',ReportTitleDataRed.val.length)})

    const [data, setdata] = useState([
        ...reportData
    ])

    // console.log('columnDatareportData', reportData)

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])

    useEffect(()=>{
        if(!ReviewDataRed.loading){
            setdata(old =>{return [...ReviewDataRed.val]})
        }
    },[ReviewDataRed])

    const handleTypeChange = (e) =>{
        const reviewType = e.target.value
        dispatch(FetchReviewFreq(reviewType,AuthRed.val))
        setreviewFilter((old)=>{return {...old,[e.target.id]:reviewType}})
    }

    const handleFreqChange = (e) =>{
        const reviewFreq = e.target.value
        dispatch(FetchReviewSubFreq(reviewFreq,AuthRed.val))
        setreviewFilter((old)=>{return {...old,[e.target.id]:reviewFreq}})
    }

    const handleSubfreq = (e) =>{
        const reviewSubFreq = e.target.value
        setreviewFilter((old)=>{return {...old,[e.target.id]:reviewSubFreq}})
    }

    const handleReview = () =>{

        let newData = [...selectedFlatRows.map((res)=>{return res.original})]
        const finalData = newData.map((res)=>{
            return {ASSOCIATE_VEND : res.ASSOCIATE_VEND,VENDOR_ID:'',...res, reviewFreq: data[0].REVIEW_FREQ, reviewSubFreq: data[0].REVIEW_CYCLE, reviewName: location.state.reviewName, reviewType: 'Cyclic Review'}
        })
        // console.log('reviewFilter re-gen data',finalData)

        dispatch(SendReviewData(finalData,AuthRed.val))
    }
    
    const handleVendors = () =>{
        dispatch(FetchReviewDataData(reviewFilter.reviewFreq,reviewFilter.reviewSubFreq,AuthRed.val))
    }

    const handleBlur = (e) =>{
        const reviewName = e.target.value
        setreviewFilter((old)=>{return {...old,[e.target.id]:reviewName}})
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
            <div style={{ padding: 'auto 1px' }} className='mainReviewDiv' >
                <div className='collapseHead'>
                    <div className='collapseHead1 card card-body'>
                    <div className='dropDownFil'>
                        <label htmlFor="reviewType">Review type: </label>
                        <input placeholder='Review type...' className='form-control reviewInput' type="text" value={'Cyclic Review'} id='reviewType' disabled/>
                        </div>
                        <div className='dropDownFil'>
                        <label htmlFor="reviewFreq">Review frequency: </label>
                        <input placeholder='Review frequency...' className='form-control reviewInput' type="text" value={data[0].REVIEW_FREQ} id='reviewFreq' disabled/>
                        </div>
                        <div className='dropDownFil'>
                        <label htmlFor="reviewSubFreq">Review sub-frequency: </label>
                        <input placeholder='Review sub-frequency...' className='form-control reviewInput' type="text" value={data[0].REVIEW_CYCLE} id='reviewSubfreq' disabled/>
                        </div>
                        <div className='dropDownFil'>
                            <label htmlFor='reviewName'>Review Name</label>
                            <input placeholder='Review Name...' className='form-control reviewInput' type="text" value={location.state.reviewName} id='reviewName' disabled/>
                        </div>
                        {/* <div className='dropDownFil'>
                            <button onClick={handleVendors} className='btn btn-success'>Load Vendors</button>
                        </div> */}

                    </div>
                    <div className='collapseHead2'>
                        <button className='btn btn-success' onClick={handleReview}>Re-Generate Review</button>
                    </div>
                </div>
                <div className='tableDiv'>
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

export default ReportReviewHome