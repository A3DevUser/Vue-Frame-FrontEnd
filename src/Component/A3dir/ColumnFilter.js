import React from 'react'

export const ColumnFilter = ({column}) => {
  // console.log('columnNew',column)
    const { filterValue, setFilter,Header } = column
  return (
    <span>
        {/* search: {' '} */}
        <input placeholder={`Search ${Header}`} className='form-control form-control-sm' value={filterValue || ''} onChange={(e) => {setFilter(e.target.value)}}/>
    </span>
  )
}
