import { MainObject } from '../../Component/Elements/commonFun'
import React, { useState } from 'react'
import { Button, Tooltip } from 'react-bootstrap'
import TableCell from './TableCell'
import { useSelector } from 'react-redux'
import ReportImpExp from '../ReportExp/ReportImpExp'

import GlobalFilter from './GlobalFilter'


const TableStruc = ({getTableProps,getTableBodyProps,headerGroups,prepareRow,rows,gridData,handleAddRow,handleSave,handleRemove,handleCopy,previousPage,canPreviousPage,nextPage,canNextPage,pageOptions,state,pageCount,gotoPage,setGlobalFilter,hide,funNavConf,disBtn,setdata,data}) => {
console.log('pageNewDataRows',rows)
    const EmdRed = useSelector((state)=>state.EmdRed)
    const ColumnRed = useSelector((state) => state.ColumnRed)
    const GridRed = useSelector((state) => state.GridRed)


    const { globalFilter } = state
    const { pageIndex } = state

    // const [vrmPath,setVrmPath] = useState(gridData.gridId == 'GID-902' ? '/addTable' : '')
    const vrmPath = gridData.gridId == 'GID-902' ? '/addTable' : ''

    const save = ['/viewTable','/report']
    const add = ['/viewTable','/editTable','/report','/usereditTable','/userviewTable']
    const removeDupl = ['/viewTable','/editTable','/report','/usereditTable','/userviewTable']

  return (
    <div>
 <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between',maxWidth:gridData.width, maxHeight:gridData.height}}>
    <div >
    <h6 style={{fontFamily: 'Trebuchet MS'}} className="mx-5 my-2" id={gridData.gridId}>{gridData.gridName}</h6>
    </div>
    <div style={{display:'flex', flexDirection:'row', marginBottom:'1em'}}>
    {/* {(window.location.pathname.includes('report')) ? <ReportImpExp  gridData ={GridRed.val} columnData={ColumnRed.val} data={[]} /> : <></>} */}
    {(gridData.gridId == 'GID-576')||(gridData.gridId == 'GID-641') ? MainObject.CrtButton({classNameVal:'btn btn-outline-success', widthVal:'', heightVal:'',btnName: <>{gridData.gridId == 'GID-576' ?<><i class="bi bi-plus-lg"></i> Create New Form</> : <><i class="bi bi-plus-lg"></i> Create New WorkFlow</>}</>,navForm: ''}, 
    ()=>{funNavConf(gridData.gridId)}
    ) : <></>}
        {gridData.gridId == 'GID-902' || 'GID-290' ? <><button className='btn btn-outline-info mx-2' title="Add" style={{display : (gridData.isMrow =='true'&& !add.includes(window.location.pathname)) || (window.location.pathname.includes('confform')&&gridData.isMrow =='true')  ? 'block' : 'none', }}
        // disabled={EmdRed == 'yes'}
        onClick={handleAddRow} disabled={disBtn}
        ><i class="bi bi-plus-lg"></i> </button></> : <><button className='btn btn-outline-info mx-2' title="Add" style={{display : (gridData.isMrow =='true'&& !add.includes(window.location.pathname)) || (window.location.pathname.includes('confform')&&gridData.isMrow =='true')  ? 'block' : 'none', }}
        // disabled={EmdRed == 'yes'}
        onClick={handleAddRow}
        ><i class="bi bi-plus-lg"></i> </button></>}
        {!hide ? <button className='btn btn-success mx-2' style={{display : (window.location.pathname.includes('confreport')&&gridData.isMrow =='getdata') ? 'block' : 'none'}}
        // disabled={EmdRed == 'yes'}
        onClick={handleAddRow}
        ><i class="bi bi-plus-lg"></i> Get Data </button> : <button className='btn btn-success mx-2' disabled style={{display : (window.location.pathname.includes('confreport')&&gridData.isMrow =='getdata') ? 'block' : 'none'}}
        // disabled={EmdRed == 'yes'}
        onClick={handleAddRow}
        ><i class="bi bi-plus-lg"></i> Get Data </button>}
        {gridData.gridId == 'GID-902' || 'GID-290' ? <></> : <><Button variant='btn btn-outline-danger'  title="Remove" style={{display : (gridData.isMrow =='true'&& !removeDupl.includes(window.location.pathname)) || (window.location.pathname.includes('confform')&&gridData.isMrow =='true') ? 'block' : 'none'}} onClick={handleRemove}><i class="bi bi-trash"> </i></Button></>}
        {gridData.gridId == 'GID-902' || 'GID-290' ? <></> : <><Button variant='btn btn-outline-secondary' title="Duplicate" style={{display : (gridData.isMrow =='true'&& !removeDupl.includes(window.location.pathname)) || (window.location.pathname.includes('confform')&&gridData.isMrow =='true') ? 'block' : 'none'}} className='mx-2' onClick={handleCopy}><i class="bi bi-copy"> </i></Button></>}
        {(gridData.isMain == 'true') || (window.location.pathname.includes('confform')) || (window.location.pathname.includes('confreport')) ? <button className='btn btn-outline-success' style={{width: '', height: '', display:window.location.pathname.includes('viewTable') ?'none' :'block' }} onClick={()=>{handleSave(gridData,setdata,data)}}><i title='Save' class="bi bi-floppy" ></i></button> : <></>}
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
            Go To Page <input type='number' min={0} defaultValue={pageIndex -1} onChange={
                (e)=>{
                    const PageNumber = e.target.value ? Number(e.target.value) -1 : 0
                    gotoPage(PageNumber)
                }
            }></input>
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
