import { MainObject } from '../../Component/Elements/commonFun'
import React, { useEffect, useState } from 'react'
import { Button, Dropdown, DropdownButton, Tooltip } from 'react-bootstrap'
import TableCell from './TableCell'
import { useSelector } from 'react-redux'
import ReportImpExp from '../ReportExp/ReportImpExp'

import GlobalFilter from './GlobalFilter'
import swal from 'sweetalert'


const TableStruc = ({getTableProps,getTableBodyProps,headerGroups,prepareRow,rows,gridData,handleAddRow,handleSave,handleRemove,handleCopy,previousPage,canPreviousPage,nextPage,canNextPage,pageOptions,state,pageCount,gotoPage,setGlobalFilter,hide,funNavConf,disBtn,setdata,data,userDisBtn,funMultiRows}) => {
// console.log('pageNewDataRows',rows)
    const EmdRed = useSelector((state)=>state.EmdRed)
    const ColumnRed = useSelector((state) => state.ColumnRed)
    const GridRed = useSelector((state) => state.GridRed)


    const { globalFilter } = state
    const { pageIndex } = state

    // const [vrmPath,setVrmPath] = useState(gridData.gridId == 'GID-902' ? '/addTable' : '')
    const vrmPath = gridData.gridId == 'GID-902' ? '/addTable' : ''

    const save = ['/viewTable','/report','/editConfForm','/editWorkFlowConf','/editDataSource','/editReport','/confform']
    const add = ['/viewTable','/editTable','/report','/usereditTable','/userviewTable']
    const removeDupl = ['/viewTable','/editTable','/report','/usereditTable','/userviewTable','/useraddTable']

    // const [show,setshow] = useState(false)

    // useEffect(() => {
    //     console.log('pageNewDataRows',rows)
    // },[rows])

    // function funMultiRows() {
    //     setshow(!show)
    // }

  return (
    <div>
 <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between',maxWidth:gridData.width, maxHeight:gridData.height}}>
    <div >
    <h4 style={{fontFamily: 'Trebuchet MS'}} className="mx-3 my-2" id={gridData.gridId}>{gridData.gridName}</h4>
    </div>
    <div style={{display:'flex', flexDirection:'row', marginBottom:'1em'}}>
    {/* {(window.location.pathname.includes('report')) ? <ReportImpExp  gridData ={GridRed.val} columnData={ColumnRed.val} data={[]} /> : <></>} */}
    {/* {(gridData.gridId == 'GID-576')||(gridData.gridId == 'GID-641') ? MainObject.CrtButton({classNameVal:'btn btn-outline-success', widthVal:'', heightVal:'',btnName: <>{gridData.gridId == 'GID-576' ?<><i class="bi bi-plus-lg"></i> Create New Form</> : <><i class="bi bi-plus-lg"></i> Create New WorkFlow</>}</>,navForm: ''}, 
    ()=>{funNavConf(gridData.gridId)}
    ) : <></>} */}
    {(gridData.gridId == 'GID-576')||(gridData.gridId == 'GID-641')||(gridData.gridId == 'GID-924')||(gridData.gridId == 'GID-925') ? MainObject.CrtButton({classNameVal:'btn btn-outline-success', widthVal:'', heightVal:'',btnName: <>{gridData.gridId == 'GID-576' ?<><i class="bi bi-plus-lg"></i> Create New Form</> : <></>}{gridData.gridId == 'GID-641' ? <><i class="bi bi-plus-lg"></i> Create New WorkFlow</> : <></> }{gridData.gridId == 'GID-924' ?<><i class="bi bi-plus-lg"></i> Create Report</> : <></>}{gridData.gridId == 'GID-925' ?<><i class="bi bi-plus-lg"></i> Create Data Source</> : <></>}</>,navForm: ''}, 
    ()=>{funNavConf(gridData.gridId)}
    ) : <></>}
    {(gridData.gridId == 'GID-290') ? <><button className='btn btn-outline-info mx-2' title="Add" style={{display : (gridData.isMrow =='true'&& !add.includes(window.location.pathname)) || (window.location.pathname.includes('confform')&&gridData.isMrow =='true')  ? 'block' : 'none', }}
        // disabled={EmdRed == 'yes'}
        onClick={handleAddRow} disabled={userDisBtn}
        ><i class="bi bi-plus-lg"></i> </button></> : <></>}
        {(gridData.gridId == 'GID-902') ? <><button className='btn btn-outline-info mx-2' title="Add" style={{display : (gridData.isMrow =='true'&& !add.includes(window.location.pathname)) || (window.location.pathname.includes('confform')&&gridData.isMrow =='true')  ? 'block' : 'none', }}
        // disabled={EmdRed == 'yes'}
        onClick={handleAddRow} disabled={disBtn}
        ><i class="bi bi-plus-lg"></i> </button></> : <></>}
        { gridData.isMultiSelect == 'true' ? <>
        <div className='dropdown mx-2'>
            <DropdownButton title={<i class="bi bi-pen"></i>} position='left'>
                <Dropdown.Item onClick={()=>{handleAddRow()}}><i class="bi bi-plus-lg"></i> Add Single Row</Dropdown.Item>
                <Dropdown.Item onClick={()=>{funMultiRows(gridData.gridId)}}><i class="bi bi-grid"></i> Add Detailed Rows</Dropdown.Item>
            </DropdownButton>
        </div>
        </> : <></>}
        {gridData.isMrow == 'true'&&gridData.isMultiSelect == 'false' ? <>
        <button className='btn btn-outline-info mx-2' title="Add" style={{display : (gridData.isMrow =='true'&& !add.includes(window.location.pathname)) || (window.location.pathname.includes('confform')&&gridData.isMrow =='true')  ? 'block' : 'none', }}
        // disabled={EmdRed == 'yes'}
        onClick={handleAddRow}><i class="bi bi-plus-lg"></i> </button>
        </> : <></>}
        {window.location.pathname == '/confform' || window.location.pathname == '/confreport' ? <>
        <button className='btn btn-outline-info mx-2' title="Add" style={{display : (gridData.isMrow =='true'&& !add.includes(window.location.pathname)) || (window.location.pathname.includes('confform')&&gridData.isMrow =='true')  ? 'block' : 'none', }}
        // disabled={EmdRed == 'yes'}
        onClick={handleAddRow}><i class="bi bi-plus-lg"></i> </button>
        </> : <></>}
        {!hide ? <button className='btn btn-success mx-2' style={{display : (window.location.pathname.includes('confreport')&&gridData.isMrow =='getdata') ? 'block' : 'none'}}
        // disabled={EmdRed == 'yes'}
        onClick={handleAddRow}
        ><i class="bi bi-plus-lg"></i> Get Data </button> : <button className='btn btn-success mx-2' disabled style={{display : (window.location.pathname.includes('confreport')&&gridData.isMrow =='getdata') ? 'block' : 'none'}}
        // disabled={EmdRed == 'yes'}
        onClick={handleAddRow}
        ><i class="bi bi-plus-lg"></i> Get Data </button>}
        {gridData.gridId == 'GID-902' ? <></> : <><Button variant='btn btn-outline-danger'  title="Remove" style={{display : (gridData.isMrow =='true'&& !removeDupl.includes(window.location.pathname)) || (window.location.pathname.includes('confform')&&gridData.isMrow =='true') ? 'block' : 'none'}} onClick={handleRemove}><i class="bi bi-trash"> </i></Button></>}
        {gridData.gridId == 'GID-902' ? <></> : <><Button variant='btn btn-outline-secondary' title="Duplicate" style={{display : (gridData.isMrow =='true'&& !removeDupl.includes(window.location.pathname)) || (window.location.pathname.includes('confform')&&gridData.isMrow =='true') ? 'block' : 'none'}} className='mx-2' onClick={handleCopy}><i class="bi bi-copy"> </i></Button></>}
        {(gridData.isMain == 'true') || (save.includes(window.location.pathname)) || (window.location.pathname.includes('confreport')) ? <button className='btn btn-outline-success' style={{width: '', height: '', display:window.location.pathname.includes('viewTable') ?'none' :'block' }} onClick={()=>{handleSave(gridData,setdata,data)}}><i title='Save' class="bi bi-floppy" ></i></button> : <></>}
        {/* {(window.location.pathname.includes('report')) ? <><GlobalFilter filter={globalFilter} setfilter={setGlobalFilter}/></> : <></>} */}
  </div>
  </div>
      <div {...getTableProps()} className="table sticky mx-3 my-1 tableCont "  style={{maxHeight :gridData.height, maxWidth:gridData.width , overflow:'scroll', border:'none' }} >
        <div className='header'>
            {
                headerGroups.map((headerGroup)=>(
            <div className='tr' {...headerGroup.getHeaderGroupProps()}>
                {
                    headerGroup.headers.map((column)=>(
                        <div className='th' {...column.getHeaderProps()}>{column.render('Header')}
                                            <div
                      {...column.getResizerProps()}
                      className={`resizer`}
                    />
                        </div>
                    ))
                }
            </div>
                ))
            }
        </div>
        <div className='body'  {...getTableBodyProps()}>
            {
                rows.map((row)=>{
                    prepareRow(row)
                    return   <div className='tr' {...row.getRowProps()}>
                        {
                            row.cells.map((cell)=>(
                                <div className='td' {...cell.getCellProps()}>
                                    <TableCell cell={cell}/>
                                    </div>
                            ))
                        }
                </div>
                })
            }
        </div>
      </div>
        <div style={{display:'flex', justifyContent:'center', marginTop:'1vw', gap:'10px',alignItems:'center' }} >
        <span >
            page: {' '}
            <strong>
                { pageIndex + 1} of { pageOptions.length }
            </strong>{' | '}
            Go To Page <input type='number' min={0} defaultValue={pageIndex + 1} onChange={
                (e)=>{
                    if(e.target.value > pageOptions.length){
                        swal({
                            title :'Alert',
                            text : 'Invalid Page Number',
                            icon: "warning",
                        })
                    }else{
                        const PageNumber = e.target.value ? Number(e.target.value) -1 : 0
                        gotoPage(PageNumber)
                    }
                }
            } ></input>
        </span>
        <button className='btn btn-outline-secondary btn-sm ' title='First page' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button className='btn btn-outline-secondary btn-sm ' title='Previous page' onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button className='btn btn-outline-secondary btn-sm' title='Next page' onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
        <button className='btn btn-outline-secondary btn-sm' title='Last page' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
    </div>
    </div>
  )
}

export default TableStruc
