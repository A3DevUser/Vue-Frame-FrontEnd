import { MainObject } from '../../Component/Elements/commonFun'
import React from 'react'
import { Button, Tooltip } from 'react-bootstrap'
import TableCell from './TableCell'
import { useSelector } from 'react-redux'
import ReportImpExp from '../ReportExp/ReportImpExp'

import GlobalFilter from './GlobalFilter'


const TableStruc = ({getTableProps,getTableBodyProps,headerGroups,prepareRow,rows,gridData,handleAddRow,handleSave,handleRemove,handleCopy,previousPage,canPreviousPage,nextPage,canNextPage,pageOptions,state,pageCount,gotoPage,setGlobalFilter}) => {

    const EmdRed = useSelector((state)=>state.EmdRed)
    const ColumnRed = useSelector((state) => state.ColumnRed)
    const GridRed = useSelector((state) => state.GridRed)


    const { globalFilter } = state
    const { pageIndex } = state

    const save = ['/viewTable','/report']
    const add = ['/viewTable','/editTable','/report']
    const removeDupl = ['/viewTable','/editTable','/report']

  return (
    <div>
 <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between',maxWidth:gridData.width, maxHeight:gridData.height}}>
    <div >
    <h6 className="mx-5 my-2" id={gridData.gridId}>{gridData.gridName}</h6>
    </div>
    <div style={{display:'flex', flexDirection:'row'}}>
        <ReportImpExp  gridData ={GridRed.val} columnData={ColumnRed.val} data={[]} />
        <button className='btn btn-success mx-2' style={{display : (gridData.isMrow =='true'&& !add.includes(window.location.pathname)) || (window.location.pathname.includes('confform')&&gridData.isMrow =='true')  ? 'block' : 'none', }}
        // disabled={EmdRed == 'yes'}
        onClick={handleAddRow}
        ><i class="bi bi-plus-lg"></i> Add</button>
        <Button variant='success' style={{display : (gridData.isMrow =='true'&& !removeDupl.includes(window.location.pathname)) || (window.location.pathname.includes('confform')&&gridData.isMrow =='true') ? 'block' : 'none'}} onClick={handleRemove}><i class="bi bi-trash"> </i>Remove</Button>
        <Button variant='success' style={{display : (gridData.isMrow =='true'&& !removeDupl.includes(window.location.pathname)) || (window.location.pathname.includes('confform')&&gridData.isMrow =='true') ? 'block' : 'none'}} className='mx-2' onClick={handleCopy}><i class="bi bi-copy"> </i>Duplicate</Button>
        {(gridData.isMain == 'true') || (window.location.pathname.includes('confform')) ? MainObject.button({classNameVal:'btn btn-success', widthVal:'', heightVal:'',btnName: <><i class="bi bi-floppy"></i> Submit</>},()=>{handleSave(gridData)}) : <></>}
        {(window.location.pathname.includes('report')) ? <GlobalFilter filter={globalFilter} setfilter={setGlobalFilter}/> : <></>}
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
        <div className='body' {...getTableBodyProps()}>
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
        <div style={{display:'flex', justifyContent:'center', marginTop:'1vw', gap:'10px',alignItems:'center'}} >
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
        <button className='btn btn-secondary btn-sm ' title='First page' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button className='btn btn-secondary btn-sm ' title='Previous page' onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button className='btn btn-secondary btn-sm' title='Next page' onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
        <button className='btn btn-secondary btn-sm' title='Last page' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
    </div>
    </div>
  )
}

export default TableStruc
