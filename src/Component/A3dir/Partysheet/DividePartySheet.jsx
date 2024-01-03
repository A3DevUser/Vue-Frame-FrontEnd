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
    <span className='mx-2' style={{fontWeight:'bolder', fontSize:'20px'}}>Party Sheet :</span>
    <select className='form-select' onChange={handleChange} style={{width:'15vw',marginRight:'42vw'}}>
        <option value={1}>Select Sheet...</option>
        {
            options
        }
    </select>
    </>
  )
}

export default DividePartySheet