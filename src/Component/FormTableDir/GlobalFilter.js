import React from 'react'
import { useState } from "react"
import { useAsyncDebounce } from 'react-table'

const GlobalFilter = ({filter, setfilter}) => {

  const [value, setvalue] = useState(filter)
  const Onchange = useAsyncDebounce(value => {
    setfilter(value || undefined)
  }, 1000)
  
  return (
    <span>
        search: {' '} 
        <input className='form-control' value={value || ''} onChange={(e) => {
          setvalue(e.target.value)
          Onchange(e.target.value)
          }}/>
    </span>
  )
} 

export default GlobalFilter