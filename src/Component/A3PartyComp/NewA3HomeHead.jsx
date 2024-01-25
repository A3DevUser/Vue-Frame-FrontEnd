import React from 'react'

const NewA3HomeHead = ({getA3HomeData,getData,location}) => {
  return (
    <>
    <div className='card card-body'>
        <strong>Review Details<br/></strong>
        Review Name : {location.state.review_name}
    </div>
    <div className='card card-body vendorFilterDiv'>
        <label htmlFor="vendorFilter" id='vendorFilterLabel'>Vendor Type: </label>
        <select onChange={getA3HomeData} name="" id="vendorFilter" className='form-control vendorFilter'>
            <option value="">Select type</option>
            <option value="New">New</option>
            <option value="Existing">Existing</option>
        </select>
        <button onClick={getData} className='btn btn-success'>Fetch Vendors</button>
    </div>
    </>
  )
}

export default NewA3HomeHead