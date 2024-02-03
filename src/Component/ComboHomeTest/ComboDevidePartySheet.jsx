import React from 'react'
import swal from "sweetalert"

const ComboDevidePartySheet = () => {

    const handelAlert = () => {
        swal({
            title : 'Alert',
            text : 'Data Save Successfully',
            icon: "success",
        })
        // alert('No Data...')
    }

  return (
    <>
    <span className='mx-3' style={{fontWeight:'bolder', fontSize:'15px'}}>Pre-Onboarding Type :</span>
    <select className='form-select'  style={{width:'15vw',marginRight:'30vw'}}>
        <option value={1}>Select One...</option>
        <option >Data 1</option>
        <option >Data 2</option>
        <option >Data 3</option>
    </select>
    <button onClick={handelAlert}  className='btn btn-success' style={{ width:'13vw', height:'5.5vh'}}>Raise Due Diligence</button>
    <span className='mx-3' style={{fontWeight:'bolder', fontSize:'15px'}}>Score :</span>
    <input  className='form-control' style={{fontWeight:'bolder', fontSize:'15px', width:'15vw', height:'5.5vh'}} disabled/>
    </>
  )
}

export default ComboDevidePartySheet;