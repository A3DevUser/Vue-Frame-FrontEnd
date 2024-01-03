import { daysToWeeks } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useMemo } from 'react'
import { useTable, useGlobalFilter, useRowSelect, useBlockLayout,useSortBy,useFilters,usePagination } from 'react-table'
import { ColumnFilter } from './ColumnFilter'
import { Checkbox } from './Checkbox'
import { useSticky } from 'react-table-sticky'
import { useDispatch, useSelector } from 'react-redux'
import { Styles } from './AssesmentTableStyles'
import { NumberRangeColumnFilter } from './NumberRangeColumnFilter'




const OverViewTable = ({col,data}) => {
  const dispatch = useDispatch()

    const columns = useMemo(()=>[...col.map((res)=>{return {
      Header:res.fieldName,
      accessor : res.accessor,
      width : res.width
    }})],[])

    const defaultColumn = React.useMemo(
        () => ({
          Filter: ColumnFilter
        }),
        []
      )

  
      const{
          getTableProps,
          getTableBodyProps,
          headerGroups,
          page,
          nextPage,
          previousPage,
          canPreviousPage,
          canNextPage,
          pageOptions,
          gotoPage,
          pageCount,
          setPageSize,
          prepareRow,
          state,
          preGlobalFilteredRows,
          setGlobalFilter,
          selectedFlatRows
      } = useTable({
          columns,
          data,
          defaultColumn
      },
      useBlockLayout,
      useSticky,
      useFilters,
      useGlobalFilter,
      useSortBy,
      usePagination,
      useRowSelect)


      const { globalFilter } = state
      const { pageIndex, pageSize } = state


  return (
    <>
    <Styles>
        <div {...getTableProps()} className="table sticky table-hover table-striped mx-3 my-3" style={{ width: '97%', height: '65vh' }}>
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
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    <div className='container-pagination' style={{display:'flex',justifyContent:'center',gap:'1vw'}}>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: '50px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}>
          {[10,50, 100, 200].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      </Styles>
    </>
  )
}

export default OverViewTable