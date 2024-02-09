import React, { useEffect, useState } from 'react';
import PartySheetTable from './PartySheetTable';
import { useDispatch, useSelector } from 'react-redux';
import { MainObject } from '../../../Component/Elements/commonFun';
import { FetchA3PartyColumnData } from '../../../Store/Actions/A3PartyColumnAct';
import { FetchA3TestData } from '../../../Store/Actions/A3TestDataAct';
import { useLocation } from 'react-router';
import { FetchA3PsOpDataData } from '../../../Store/Actions/A3PSOpData';
import DividePartySheet from './DividePartySheet';
import { PreOnboardignScoreAct } from '../../../Store/Actions/GeneralStates';
import { FormTestScoreData } from '../../../Store/Actions/TestScoreDataAct';

const Partysheet = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const A3PartyColumnRed = useSelector((state) => state.A3PartyColumnRed);
  const A3TestRed = useSelector((state) => state.A3TestRed);
  const FormIdRed = useSelector((state) => state.FormIdRed);
  const AuthRed = useSelector((state) => state.AuthRed);
  const mainObjDataRed = useSelector((state) => state.mainObjDataRed);
  const A3PsOpDataRed = useSelector((state) => state.A3PsOpDataRed);
  const [filterTypr,setFilterTypr] = useState('Third Party Risk Evaluation$$Third Party Risk Evaluation')
  const PreOnboardignScoreRed = useSelector((state) => state.PreOnboardignScoreRed)

  const [clickSave,setClickSave] = useState(false)
  // const [TPREscore, setTPREscore] = useState()
  // const [MAscore, setMAscore] = useState()
  // const [DDQscore, setDDQscore] = useState()
  // const [maxScore,setmaxScore] = useState(0)
  // const [maxScoreTpre,setmaxScoreTpre] = useState(0)
  // console.log('location', location.state);
  const [scoreTpre,setScoreTpre] = useState(0)
  const [score,setScore] = useState(0)
  const [scoreDdq,setScoreDdq] = useState(0)

  const handleChange = (e) =>{
    setFilterTypr(e.target.value)
    dispatch(FetchA3PartyColumnData(e.target.value, 'party', AuthRed.val));
    dispatch(FetchA3TestData(e.target.value,'Pre Onboarding$$Pre Onboarding' ,AuthRed.val));  
  }

  useEffect(() => {
    dispatch(FetchA3PartyColumnData('Third Party Risk Evaluation$$Third Party Risk Evaluation', 'party', AuthRed.val));
    // dispatch(FetchA3TestData('Third Party Risk Evaluation$$Third Party Risk Evaluation','New' ,AuthRed.val));
    dispatch(FetchA3TestData('Third Party Risk Evaluation$$Third Party Risk Evaluation','Pre Onboarding$$Pre Onboarding' ,AuthRed.val));
  }, [dispatch, FormIdRed, AuthRed.val]);

  useEffect(() => {
    // console.log('A3TestRed',A3TestRed.val)
    if (location.state && A3TestRed.val.length > 0) {
      const accArray = location.state.rowData.Associate_Vend;
      const outputId = A3TestRed.val.map((res) => {
        // return 'OB-' + res.QUESTION_ID + location.state.rowData.VF_MAIN_OBJ_ID;
        return 'OB-' + res.VF_MAIN_OBJ_ID + location.state.rowData.VF_MAIN_OBJ_ID;
      });
      // console.log('outputId',outputId)
      dispatch(FetchA3PsOpDataData(outputId, AuthRed.val));
    }
  }, [ A3TestRed.val, location.state]);

  // const accList = [location.state.rowData].map((res)=>{return res.Associate_Vend})

  // useEffect(() => {
  //   console.log('ScoreValTest',TPREscore);
  //   console.log('ScoreValTest',DDQscore);
  //   console.log('ScoreValTest',MAscore);
  // },[MAscore,DDQscore,TPREscore])

  function handleSave (){
    if(!clickSave){
      setClickSave(true)
      dispatch(PreOnboardignScoreAct({TPRE: NaN, MA: NaN, DDQ: NaN}))
    }
    // dispatch(FormTestScoreData([  {
    //   "tpreScore": MAscore,
    //   "tpreRating": MAscore >= (A3TestRed.val.length*maxScore)/2 ? 'High' : MAscore == 0 ? 'Low' : 'Medium',
    //   "isMaterial": "Material",
    //   "dueDilligenceScore": "Yearly",
    //   "vendor_ID": accList[0].split('$$')[0],
    //   "VENDOR_ID": accList[0].split('$$')[0]
    // },{
    //   "tpreScore": DDQscore,
    //   "tpreRating": DDQscore >= (A3TestRed.val.length*maxScore)/2 ? 'High' : DDQscore == 0 ? 'Low' : 'Medium',
    //   "isMaterial": "Material",
    //   "dueDilligenceScore": "0.00",
    //   "vendor_ID": accList[0].split('$$')[0],
    //   "VENDOR_ID": accList[0].split('$$')[0]
    // },{
    //   "tpreScore": TPREscore,
    //   "tpreRating": TPREscore >= (A3TestRed.val.length*maxScoreTpre)/2 ? 'High' : TPREscore == 0 ? 'Low' : 'Medium',
    //   "isMaterial": "Material",
    //   "dueDilligenceScore": "Yearly",
    //   "vendor_ID": accList[0].split('$$')[0],
    //   "VENDOR_ID": accList[0].split('$$')[0]
    // }],AuthRed.val))
  }


  return (
    <>
    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
    <div >
    <DividePartySheet filterTypr={filterTypr} dataLength={10} handleChange={handleChange} handleSave={handleSave} 
    setScoreTpre={setScoreTpre} setScore={setScore} setScoreDdq={setScoreDdq}
    accData={[location.state.rowData]} dData={A3TestRed.val} clickSave={clickSave}
    //TPREscore={TPREscore} setTPREscore={setTPREscore} MAscore={MAscore} setMAscore={setMAscore} DDQscore={DDQscore} setDDQscore={setDDQscore}
    />
    </div>
    </div>
      {/* partysheet */}
      {A3PartyColumnRed.loading ? MainObject.loader() :
       A3TestRed.loading ?  MainObject.loader() : 
       A3PsOpDataRed.loading ? MainObject.loader() :

        <PartySheetTable accData={[location.state.rowData]} col={A3PartyColumnRed.val} dData={A3TestRed.val} tableData={A3PsOpDataRed.val} handleChange={handleChange} filterTypr={filterTypr} setClickSave={setClickSave} clickSave={clickSave} scoreTpre={scoreTpre} score={score} scoreDdq={scoreDdq} setScoreTpre={setScoreTpre} setScore={setScore} setScoreDdq={setScoreDdq}/>
      }
    </>
  );
};

export default Partysheet;
