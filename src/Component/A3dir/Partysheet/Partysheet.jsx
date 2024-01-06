import React, { useEffect } from 'react';
import PartySheetTable from './PartySheetTable';
import { useDispatch, useSelector } from 'react-redux';
import { MainObject } from '../../../Component/Elements/commonFun';
import { FetchA3PartyColumnData } from '../../../Store/Actions/A3PartyColumnAct';
import { FetchA3TestData } from '../../../Store/Actions/A3TestDataAct';
import { useLocation } from 'react-router';
import { FetchA3PsOpDataData } from '../../../Store/Actions/A3PSOpData';

const Partysheet = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const A3PartyColumnRed = useSelector((state) => state.A3PartyColumnRed);
  const A3TestRed = useSelector((state) => state.A3TestRed);
  const FormIdRed = useSelector((state) => state.FormIdRed);
  const AuthRed = useSelector((state) => state.AuthRed);
  const mainObjDataRed = useSelector((state) => state.mainObjDataRed);
  const A3PsOpDataRed = useSelector((state) => state.A3PsOpDataRed);

  console.log('location', location.state);

  useEffect(() => {
    dispatch(FetchA3PartyColumnData(FormIdRed, 'party', AuthRed.val));
    dispatch(FetchA3TestData(FormIdRed, AuthRed.val));
  }, [dispatch, FormIdRed, AuthRed.val]);

  useEffect(() => {
    if (location.state && A3TestRed.val.length > 0) {
      const accArray = location.state.rowData.Associate_Vend;
      const outputId = A3TestRed.val.map((res) => {
        return 'OB-' + res.testId + accArray + location.state.rowData.VF_MAIN_OBJ_ID;
      });
      console.log('outputId',outputId)
      dispatch(FetchA3PsOpDataData(outputId, AuthRed.val));
    }
  }, [ A3TestRed.val, location.state]);

  useEffect(() => {
    console.log('A3PsOpDataRed', A3PsOpDataRed);
  }, [A3PsOpDataRed]);

  return (
    <>
      {/* partysheet */}
      {A3PartyColumnRed.loading || A3TestRed.loading ? (
        MainObject.loader()
      ) : (
        <PartySheetTable accData={[location.state.rowData]} col={A3PartyColumnRed.val} dData={A3TestRed.val} />
      )}
    </>
  );
};

export default Partysheet;
