import React from 'react'
import { useNavigate } from 'react-router';
import swal from 'sweetalert';

const DividePartySheet = ({score,dataLength,handleChange,isScorVal}) => {
    // console.log('DividePartySheet',dataLength)
    const dividedCount = Math.ceil(dataLength/10);
    const navigate = useNavigate()

    const options = []

    for (let index = 1; index <= dividedCount; index++) {
        options.push(<option value={index} key={index}>sheet {index}</option>)
        
    }


    function handleDue(){
      swal({
        title: 'Due Diligence Raised successfully',
        icon :'success'
      }).then(()=>{
        navigate('/addTable')
      })
    }


  return (
    <>
    <span className='mx-3' style={{fontWeight:'bolder', fontSize:'15px'}}>Pre-Onboarding Type :</span>
    <select className='form-select' onChange={handleChange} style={{width:'15vw',marginRight:'30vw'}}>
        <option value={1}>Select Type...</option>
        <option value={'TPRM New vendor risk assessment - TPRE'}>TPRE</option>
        <option value={'Determination of Material Outsourcing'}>MA</option>
        <option value={'Due diligence Questionnaire'}>DDQ</option>
    </select>
    <button onClick={handleDue}  className='btn btn-success' style={{ fontSize:'15px', width:'11vw'}}>Raise Due Diligence</button>
    <span className='mx-3' style={{fontWeight:'bolder', fontSize:'15px'}}>Score :</span>
    <input value={score} className='form-control' style={{fontWeight:'bolder', fontSize:'15px', width:'15vw'}} disabled/>

    </>
  )
}

export default DividePartySheet
