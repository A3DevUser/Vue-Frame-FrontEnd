import React, { useMemo, useState } from 'react'
import { useTable, useGlobalFilter, useFilters, usePagination, useSortBy,useBlockLayout } from 'react-table'
import GlobalFilter from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'
import { Styles } from './ReportStyles'
import '../FormTableDir/TableStyle.css'
import Mock_data from './MOCK_DATA_TAB.json'
import { Columns } from './Columns'

const BassicTab = ({gridData,columnData}) => {

    
    const [columns,setcolumns] = useState(
        Columns
        // [...columnData.map((res)=>{return {Header :res.rptColLabel, accessor:res.rptColName}})]
        );
    
    const [data,setdata] = useState([...Mock_data])
    
    console.log('columnData',columns)

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])

     const {getTableProps, 
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
        setGlobalFilter} = useTable({
            columns,
            data,
            defaultColumn
         },useFilters,useBlockLayout,useGlobalFilter,useSortBy,usePagination)

         const { globalFilter } = state
         const { pageIndex } = state
  return (
    <>
    <div style={{display:'flex', justifyContent:'end', maxWidth:'90vw'}}>
    <GlobalFilter filter={globalFilter} setfilter={setGlobalFilter}/>
    </div>
    <Styles>
    <div {...getTableProps()} className="table sticky mx-3 my-1 tableCont "  style={{maxHeight :'80vh', maxWidth:'90vw' , overflow:'scroll', border:'none' }} >
        <div className='header'>
            {
                headerGroups.map((headerGroup)=>(
            <div className='tr' {...headerGroup.getHeaderGroupProps()}>
                {
                    headerGroup.headers.map((column)=>(
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
                page.map((row)=>{
                    prepareRow(row)
                    return   <div className='tr' {...row.getRowProps()}>
                        {
                            row.cells.map((cell)=>(
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
    <div style={{display:'flex', justifyContent:'center'}}>
        <span>
            page: {' '}
            <strong>
                { pageIndex + 1} of { pageOptions.length }
            </strong>{' '}
        </span>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
    </div>
    </>
  )
}

export default BassicTab