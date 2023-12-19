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
      <span style={{ fontSize: '16px', fontWeight: 'bolder', display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <div style={{ marginTop:'-10px', marginRight:'-5px'}} >
          <span>
            <i className='fa fa-search'></i> {' '}
          </span>
        </div>
        <div >
        <input placeholder='search...' className='form-control' style={{height:'4.5vh', width:'12vw', marginRight:'-5px', marginTop:'-13px', marginBottom:'10px'}} value={value || ''} onChange={(e) => {
          setvalue(e.target.value)
          Onchange(e.target.value)
        }} />
        </div>
        {/* <div style={{ marginTop:'-10px', marginRight:'-5px'}} >
          <span>
            <i className='fa fa-search'></i> {' '}
          </span> 
        </div> */}
      </span>
    </div>
  )
}

export default GlobalFilter