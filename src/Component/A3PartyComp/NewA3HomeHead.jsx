import React from 'react'

const NewA3HomeHead = ({ getA3HomeData, getData, location,handleNavigate }) => {
  return (
    <>
      <div className='card card-body'>
        <strong style={{ fontSize: '18px' }} >Review Details<br /></strong>
        <div style={{fontSize:'14px'}} > Review Name : {location.state.review_name} 
            <button className='btn btn-success' style={{marginLeft:'75vw'}} onClick={handleNavigate}>Generate</button>
        </div>
      </div>
      {/* <div className='card card-body vendorFilterDiv'>
        <label htmlFor="vendorFilter" id='vendorFilterLabel'>Vendor Type: </label>
        <select onChange={getA3HomeData} name="" id="vendorFilter" className='form-control vendorFilter'>
            <option value="">Select type</option>
            <option value="New">New</option>
            <option value="Existing">Existing</option>
        </select>
        <button onClick={getData} className='btn btn-success'>Fetch Vendors</button>
    </div> */}
    </>
  )
}

export default NewA3HomeHead