import { MainObject } from './Component/Elements/commonFun'
import React, { lazy, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import MultiDropDown from './Component/Elements/MultiDropDown'
import Form from './Component/Form'
import GridForm from './Component/GridForm'
import Navbar from './Component/NavBar'
import TabsBar from './Component/Tabs'
import FormConf from './Component/FormConf'
import Home from './Component/LogInDirectory/Home'
import ProtectedRoutes from './Component/LogInDirectory/ProtectedRoutes'
import LogInPage from './Component/LogInDirectory/LogInPage'
import { useDispatch, useSelector } from 'react-redux'
import AddTable from './Component/EditViewAdd/AddTable'
import EditTable from './Component/EditViewAdd/EditTable'
import ViewTable from './Component/EditViewAdd/ViewTable'
import { Offline, Online } from 'react-detect-offline'
import { Modal } from 'react-bootstrap'
import ReportForm from './Component/Report/ReportForm'
import ConfEdit from './Component/EditViewAdd/ConfEdit'
import ReportConf from './Component/ReportConf'
import UserAddTable from './Component/UserEditViewAdd/UserAddTable'
import UserEditTable from './Component/UserEditViewAdd/UserEditTable'
import UserViewTable from './Component/UserEditViewAdd/UserViewTable'
import BassicTab from './Component/ReportTable/BassicTab'
import AssesmentTable from './Component/A3dir/AssesmentTable'
import { Columns } from './Component/ReportTable/Columns'
import Mock_data from './Component/ReportTable/MOCK_DATA_TAB'
import PendencyTab from './Component/PendencyDashboard/PendencyTab'
import PendencyDashboard from './Component/PendencyDashboard/PendencyDashboard'
import Partysheet from './Component/A3dir/Partysheet/Partysheet'
import A3HomeSheet from './Component/A3dir/A3HomeSheet'
import HomePartySheet from './Component/A3dir/Partysheet/HomePartySheet'
import EditFormConf from './Component/EditFormComp/EditFormConf'
import EditWorkFlowConf from './Component/EditFormComp/EditWorkFlowConf'
import EditDataSource from './Component/EditFormComp/EditDataSource'
import EditReport from './Component/EditFormComp/EditReport'
import { AuthSucess } from './Store/Actions/Authentication'
import { EmdAct, FormIdAct, UserDataState } from './Store/Actions/GeneralStates'
import AddTab from './Component/EditViewAdd/AddTable/AddTab'
import ReviewForm from './Component/ReviewForm/ReviewForm'
import CheckerForm from './Component/ReviewForm/CheckerForm'
import ReportReviewForm from './Component/ReportReviewForm/ReportReviewForm'
import NewA3HomeSheet from './Component/A3PartyComp/NewA3HomeSheet'
import NewPartySheet from './Component/A3PartyComp/NewPartySheet'
import ComboHomeTest from './Component/ComboHomeTest/ComboHomeTest'
import ComboPartySheet from './Component/ComboHomeTest/ComboPartySheet'


const App = () => {
  const dispatch = useDispatch()

  const [show, setshow] = useState(false)
  const [validate, setValidate] = useState(false);

  const LogInStateRed = useSelector((state) => state.LogInStateRed)

  const handleFunc = () => {
    setshow(!show)
  }

  // eval(
  //   `window.handleClick = ()=>{
  //     alert('hello world')
  //   }`
  // )

  useEffect(() => {
    dispatch(AuthSucess(sessionStorage.getItem('userData')))
    dispatch(FormIdAct(sessionStorage.getItem('formId')))
    dispatch(EmdAct(sessionStorage.getItem('emd')))
    dispatch(UserDataState(sessionStorage.getItem('userName')))
  }, [])


  return (
    <div>

      {/* {

        MainObject.modalButton('title',handleFunc)
      }{
        MainObject.modalpop('model title',<Form/>,show,handleFunc)
      } */}
      {/* <MultiDropDown/> */}
      {/* <button className='btn btn-primary' onClick={()=>{eval('handleClick()')}}>Click me</button> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<LogInPage />} />
        <Route element={<ProtectedRoutes logStatus={LogInStateRed} />}>
          <Route path='/addTable' element={<AddTable />} />
          <Route path='/editTable' element={<EditTable />} />
          <Route path='/viewTable' element={<ViewTable />} />
          <Route path='/confEdit' element={<ConfEdit />} />
          <Route path='/homepage' element={<Home />} />
          <Route path='/forms' element={<Form />} />
          <Route path='/GridForm' element={<GridForm />} />
          <Route path='/confform' element={<FormConf />} />
          <Route path='/editConfForm' element={<EditFormConf />} />
          <Route path='/editWorkFlowConf' element={<EditWorkFlowConf />} />
          <Route path='/confreport' element={<ReportConf />} />
          <Route path='/editDataSource' element={<EditDataSource />} />
          <Route path='/editReport' element={<EditReport />} />
          <Route path='/reportForm' element={<ReportForm />} />
          {/* <Route path='/reportForm' element={<BassicTab />} /> */}
          <Route path='/useraddTable' element={<UserAddTable />} />
          <Route path='/usereditTable' element={<UserEditTable />} />
          <Route path='/userviewTable' element={<UserViewTable />} />
          <Route path='/partysheet' element={<Partysheet />} />
          <Route path='/homesheet' element={<A3HomeSheet />} />
          <Route path='/homePartySheet' element={<HomePartySheet />} />
          <Route path='/pendencyDashboard' element={<PendencyDashboard />} />
          <Route path='/reviewPlan' element={<ReviewForm />} />
          <Route path='/reportReviewPlan' element={<ReportReviewForm />} />
          <Route path='/checkerForm' element={<CheckerForm />} />
          <Route path='/a3HomeSheet' element={<NewA3HomeSheet />} />
          <Route path='/a3PartySheet' element={<NewPartySheet />} />
          <Route path='/hometestsheet' element={<ComboHomeTest />} />
          <Route path='/ComboPartySheet' element={<ComboPartySheet />} />
        </Route>
        {/* <Route path='/hometestsheet' element={<ComboHomeTest/>}/> */}
      </Routes>
    </div>
  )
}

export default App
