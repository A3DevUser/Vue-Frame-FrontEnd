import React from 'react'
import { useState } from "react"
import { useAsyncDebounce } from 'react-table'

const GlobalFilter = ({ filter, setfilter }) => {

  const [value, setvalue] = useState(filter)
  const Onchange = useAsyncDebounce(value => {
    setfilter(value || undefined)
  }, 1000)

  return (
    <div >
      <span style={{ fontSize: '18px', fontWeight: 'bolder', display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <div style={{ paddingTop: '4px'}} >
          <span>
            Search: {' '}
          </span>
        </div>
        <div >
        <input placeholder='search...' className='form-control' value={value || ''} onChange={(e) => {
          setvalue(e.target.value)
          Onchange(e.target.value)
        }} />
        </div>
      </span>
    </div>
  )
}

export default GlobalFilter