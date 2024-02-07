import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import swal from 'sweetalert';

const DividePartySheet = ({ score, dataLength, handleChange, isScorVal, filterTypr }) => {
  // console.log('DividePartySheet',dataLength)
  const dividedCount = Math.ceil(dataLength / 10);
  const navigate = useNavigate()

  const options = []
  const [TPRE, setTPRE] = useState(true)
  const [MA, setMA] = useState(false)
  const [DDQ, setDDQ] = useState(false)
  const [scoreDisplay, setScoreDisplay] = useState();
  const PreOnboardignScoreRed = useSelector((state) => state.PreOnboardignScoreRed)
  const [TPREscore, setTPREscore] = useState()
  const [MAscore, setMAscore] = useState()
  const [DDQscore, setDDQscore] = useState()

  useEffect(() => {
    if (filterTypr == 'Materiality Assessment$$Materiality Assessment') {
      setTPRE(false)
      setMA(true)
      setDDQ(false)
    } else if (filterTypr == 'Due Diligence$$Due Diligence') {
      setTPRE(false)
      setMA(false)
      setDDQ(true)
    } else {
      setTPRE(true)
      setMA(false)
      setDDQ(false)
    }
  }, [filterTypr]);

  for (let index = 1; index <= dividedCount; index++) {
    options.push(<option value={index} key={index}>sheet {index}</option>)

  }


  function handleDue() {
    swal({
      title: 'Due Diligence Raised successfully',
      icon: 'success'
    }).then(() => {
      navigate('/addTable')
    })
  }


  return (
    <>
    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
      <div style={{display:'grid',gridTemplateColumns:'auto auto auto', alignItems:'center'}}>
      <div style={{paddingLeft:'20px'}}>
        <span style={{ fontWeight: 'bolder', fontSize: '15px', }}>Pre-Onboarding Type :</span></div>
        <div style={{paddingLeft:'18px'}}>
      <select className='form-select' onChange={handleChange} style={{ width: '15vw', marginRight: '30vw' }} value={filterTypr}>
        {/* <option value={1}>Select Type...</option> */}
        <option value={'Third Party Risk Evaluation$$Third Party Risk Evaluation'} selected={setTPRE}>Third Party Risk Evaluation</option>
        <option value={'Materiality Assessment$$Materiality Assessment'} selected={setMA}>Materiality Assessment</option>
        <option value={'Due Diligence$$Due Diligence'} selected={setDDQ}>Due Diligence</option>
      </select></div>
      </div>
      <div style={{marginLeft:'-90px' }}>
      <button onClick={handleDue} className='btn btn-success' style={{ fontSize: '15px', width: '11vw' }}>Raise Due Diligence</button></div>
      {/* <span className='mx-3' style={{fontWeight:'bolder', fontSize:'15px'}}>Score :</span>
    <input value={Number(score).toFixed(2)} className='form-control' style={{fontWeight:'bolder', fontSize:'15px', width:'5vw'}} disabled/> */}
    <div style={{display:'flex', flexDirection:'row', paddingLeft:'10px' }}>
      <div > 
      <span className='mx-3' style={{ fontWeight: 'bolder', fontSize: '15px' }}>TPRE :</span>
      <input value={Number(PreOnboardignScoreRed.TPRE).toFixed(2) == 0.00 ? Number(TPREscore) : Number(PreOnboardignScoreRed.TPRE).toFixed(2)} className='form-control' style={{ fontWeight: 'bolder', fontSize: '15px', width: '5vw' }} onChange={(e) => setTPREscore(e)} disabled />
      </div>
      <div>
      <span className='mx-3' style={{ fontWeight: 'bolder', fontSize: '15px' }}>MA :
        <input value={Number(PreOnboardignScoreRed.MA).toFixed(2) == 0.00 ? Number(MAscore) : Number(PreOnboardignScoreRed.MA).toFixed(2)} className='form-control' style={{ fontWeight: 'bolder', fontSize: '15px', width: '5vw' }} onChange={(e) => { setMAscore(e) }} disabled /></span>
        </div>
        <div>
      <span className='mx-3' style={{ fontWeight: 'bolder', fontSize: '15px' }}>DDQ :
        <input value={Number(PreOnboardignScoreRed.DDQ).toFixed(2) == 0.00 ? Number(DDQscore) : Number(PreOnboardignScoreRed.DDQ).toFixed(2)} className='form-control' style={{ fontWeight: 'bolder', fontSize: '15px', width: '5vw' }} onChange={(e) => { setDDQscore(e) }} disabled /></span>
        </div>
        <div>
      <span className='mx-3' style={{ fontWeight: 'bolder', fontSize: '15px', display: filterTypr == 'Materiality Assessment$$Materiality Assessment' ? 'block' : 'none' }}>Materiality
        <input value={Number(PreOnboardignScoreRed.MA).toFixed(2) == 0.00 ? Number(MAscore) : Number(PreOnboardignScoreRed.MA).toFixed(2) >= 1.50 ? 'Yes' : 'No'} className='form-control' style={{ fontWeight: 'bolder', fontSize: '15px', width: '5vw', display: filterTypr == 'Materiality Assessment$$Materiality Assessment' ? 'block' : 'none' }} disabled /></span></div>
        </div>
        </div>
    </>
  )
}

export default DividePartySheet
