import React from 'react'

const DividePartySheet = ({dataLength,handleChange}) => {
    // console.log('DividePartySheet',dataLength)
    const dividedCount = Math.ceil(dataLength/10);

    const options = []

    for (let index = 1; index <= dividedCount; index++) {
        options.push(<option value={index} key={index}>sheet {index}</option>)
        
    }



  return (
    <>
    <span className='mx-3' style={{fontWeight:'bolder', fontSize:'15px'}}>Pre-Onboarding Type :</span>
    <select className='form-select' onChange={handleChange} style={{width:'15vw',marginRight:'45vw'}}>
        <option value={1}>Select Type...</option>
        <option value={'TPRM New vendor risk assessment - TPRE'}>TPRE</option>
        <option value={'Determination of Material Outsourcing'}>MA</option>
        <option value={'Due diligence Questionnaire'}>DDQ</option>
    </select>
    </>
  )
}

export default DividePartySheet