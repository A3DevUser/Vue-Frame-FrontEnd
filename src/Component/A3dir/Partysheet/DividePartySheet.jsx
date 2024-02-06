import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import swal from 'sweetalert';

const DividePartySheet = ({score,dataLength,handleChange,isScorVal,filterTypr}) => {
    // console.log('DividePartySheet',dataLength)
    const dividedCount = Math.ceil(dataLength/10);
    const navigate = useNavigate()

    const options = []
    // const [TPRE,setTPRE] = useState(true)
    // const [MA,setMA] = useState(false)
    // const [DDQ,setDDQ] = useState(false)

    // useEffect(() => {
      
    //   if(filterTypr == 'Materiality Assessment$$Materiality Assessment'){
    //     setTPRE(false)
    //     setMA(true)
    //     setDDQ(false)
    //   }else if(filterTypr == 'Due Diligence$$Due Diligence'){
    //     setTPRE(false)
    //     setMA(false)
    //     setDDQ(true)
    //   }else{
    //     setTPRE(true)
    //     setMA(false)
    //     setDDQ(false)
    //   }
    // }, [filterTypr]);

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
    <select className='form-select' onChange={handleChange} style={{width:'15vw',marginRight:'30vw'}} value={filterTypr}>
        {/* <option value={1}>Select Type...</option> */}
        <option value={'Third Party Risk Evaluation$$Third Party Risk Evaluation'} >Third Party Risk Evaluation</option>
        <option value={'Materiality Assessment$$Materiality Assessment'} >Materiality Assessment</option>
        <option value={'Due Diligence$$Due Diligence'} >Due Diligence</option>
    </select>
    <button onClick={handleDue}  className='btn btn-success' style={{ fontSize:'15px', width:'11vw'}}>Raise Due Diligence</button>
    <span className='mx-3' style={{fontWeight:'bolder', fontSize:'15px'}}>Score :</span>
    <input value={Number(score).toFixed(2)} className='form-control' style={{fontWeight:'bolder', fontSize:'15px', width:'5vw'}} disabled/>
    <span className='mx-3' style={{fontWeight:'bolder', fontSize:'15px', display: filterTypr == 'Materiality Assessment$$Materiality Assessment' ? 'block' : 'none' }}>Materiality :</span>
    <input value={Number(score).toFixed(2) >= 1.50 ? 'Yes' : 'No'} className='form-control' style={{fontWeight:'bolder', fontSize:'15px', width:'5vw', display: filterTypr == 'Materiality Assessment$$Materiality Assessment' ? 'block' : 'none'}} disabled/>

    </>
  )
}

export default DividePartySheet
