import { FormTestScoreData } from '../../../Store/Actions/TestScoreDataAct';
import { PreOnboardignScoreAct } from '../../../Store/Actions/GeneralStates';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import swal from 'sweetalert';

const DividePartySheet = ({ dataLength, handleChange, isScorVal, filterTypr, handleSave }) => {
  // console.log('DividePartySheet',dataLength)
  const dividedCount = Math.ceil(dataLength / 10);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const options = []
  const [TPRE, setTPRE] = useState(true)
  const [MA, setMA] = useState(false)
  const [DDQ, setDDQ] = useState(false)
  const [scoreDisplay, setScoreDisplay] = useState();
  const PreOnboardignScoreRed = useSelector((state) => state.PreOnboardignScoreRed)
  const [TPREscore, setTPREscore] = useState()
  const [MAscore, setMAscore] = useState()
  const [DDQscore, setDDQscore] = useState()
  const AuthRed = useSelector((state) => state.AuthRed);

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
    dispatch(PreOnboardignScoreAct({TPRE: NaN, MA: NaN, DDQ: NaN}))
    swal({
      title: 'Due Diligence Raised successfully',
      icon: 'success'
    }).then(() => {
      navigate('/addTable')
    })
  }


  function funSetScoreValTpre (e){
    setTPREscore(e) 
  }

  function funSetScoreValMa (e){
    setMAscore(e)
    
  }

  function funSetScoreValDdq (e){
    setDDQscore(e)
    
  }

    // const accList = accData.map((res)=>{return res.Associate_Vend})

  // useEffect(() => {
  //   // function funHandleSave() {
  //     // console.log('ScoreValTest TPRE',Number(PreOnboardignScoreRed.TPRE).toFixed(2));
  //     // console.log('ScoreValTest MA',Number(PreOnboardignScoreRed.MA).toFixed(2));
  //     // console.log('ScoreValTest DDQ',Number(PreOnboardignScoreRed.DDQ).toFixed(2));
  //   // dispatch(FormTestScoreData([  {
  //   //   "tpreScore": MAscore,
  //   //   "tpreRating": MAscore >= (dData.length*3)/2 ? 'High' : MAscore == 0 ? 'Low' : 'Medium',
  //   //   "isMaterial": "Material",
  //   //   "dueDilligenceScore": "Yearly",
  //   //   "vendor_ID": accList[0].split('$$')[0],
  //   //   "VENDOR_ID": accList[0].split('$$')[0]
  //   // },{
  //   //   "tpreScore": DDQscore,
  //   //   "tpreRating": DDQscore >= (dData.length*3)/2 ? 'High' : DDQscore == 0 ? 'Low' : 'Medium',
  //   //   "isMaterial": "Material",
  //   //   "dueDilligenceScore": "0.00",
  //   //   "vendor_ID": accList[0].split('$$')[0],
  //   //   "VENDOR_ID": accList[0].split('$$')[0]
  //   // },{
  //   //   "tpreScore": TPREscore,
  //   //   "tpreRating": TPREscore >= (dData.length*5)/2 ? 'High' : TPREscore == 0 ? 'Low' : 'Medium',
  //   //   "isMaterial": "Material",
  //   //   "dueDilligenceScore": "Yearly",
  //   //   "vendor_ID": accList[0].split('$$')[0],
  //   //   "VENDOR_ID": accList[0].split('$$')[0]
  //   // }],AuthRed.val))
  //   // }
  // },[clickSave])

  return (
    <>
   <div style={{display:'flex',justifyContent:'space-between' ,flexDirection:'row', alignItems:'self-end', padding:'15px', paddingTop:'10px',width:'98vw'}}>
    <div style={{display:'flex', alignItems:'center', gap:10}}>
   <span style={{ fontWeight: 'bolder', fontSize: '15px', }}>Pre-Onboarding Type :</span>
   <select className='form-select' onChange={handleChange} style={{ width: '15vw' }} value={filterTypr}>
        {/* <option value={1}>Select Type...</option> */}
        <option value={'Third Party Risk Evaluation$$Third Party Risk Evaluation'} selected={setTPRE}>Third Party Risk Evaluation</option>
        <option value={'Materiality Assessment$$Materiality Assessment'} selected={setMA}>Materiality Assessment</option>
        <option value={'Due Diligence$$Due Diligence'} selected={setDDQ}>Due Diligence</option>
      </select>
      </div>
      <div style={{display:'flex', justifyContent:'right',alignItems:'self-end'}}>
      <button onClick={handleDue} className='btn btn-success' style={{ fontSize: '15px' }}>Raise Due Diligence</button>
      <span className='mx-3' style={{ fontWeight: 'bolder', fontSize: '15px' }}>TPRE :
      <input value={Number(PreOnboardignScoreRed.TPRE).toFixed(2) == 0 ? TPREscore : (isNaN(Number(PreOnboardignScoreRed.TPRE).toFixed(2)) ? '0.00' : Number(PreOnboardignScoreRed.TPRE).toFixed(2))} className='form-control' style={{ fontWeight: 'bolder', fontSize: '15px', width: '5vw' }} onChange={(e) => funSetScoreValTpre(e)} disabled /></span>
      <span className='mx-3' style={{ fontWeight: 'bolder', fontSize: '15px' }}>MA :
        <input value={Number(PreOnboardignScoreRed.MA).toFixed(2) == 0 ? MAscore : (isNaN(Number(PreOnboardignScoreRed.MA).toFixed(2)) ? '0.00' : Number(PreOnboardignScoreRed.MA).toFixed(2))} className='form-control' style={{ fontWeight: 'bolder', fontSize: '15px', width: '5vw' }} onChange={(e) => { funSetScoreValMa(e) }} disabled /></span>
        <span className='mx-3' style={{ fontWeight: 'bolder', fontSize: '15px' }}>DDQ :
        <input value={Number(PreOnboardignScoreRed.DDQ).toFixed(2) == 0 ? DDQscore : (isNaN(Number(PreOnboardignScoreRed.DDQ).toFixed(2)) ? '0.00' : Number(PreOnboardignScoreRed.DDQ).toFixed(2))}  className='form-control' style={{ fontWeight: 'bolder', fontSize: '15px', width: '5vw' }} onChange={(e) => { funSetScoreValDdq(e) }} disabled /></span>
        <span className='mx-3' style={{ fontWeight: 'bolder', fontSize: '15px', display: filterTypr == 'Materiality Assessment$$Materiality Assessment' ? 'block' : 'none' }}>Materiality
        <input value={Number(PreOnboardignScoreRed.MA).toFixed(2) == 0 ? MAscore : Number(PreOnboardignScoreRed.MA).toFixed(2) >= 1.50 ? 'Yes' : 'No'} className='form-control' style={{ fontWeight: 'bolder', fontSize: '14px', width: '5vw', display: filterTypr == 'Materiality Assessment$$Materiality Assessment' ? 'block' : 'none' }} disabled /></span>
        <button onClick={handleSave} className='btn btn-outline-success'><i class="bi bi-floppy"></i></button>
        </div>
   </div>
    </>
  )
}

export default DividePartySheet
