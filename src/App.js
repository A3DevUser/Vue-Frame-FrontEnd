import { MainObject } from './Component/Elements/commonFun'
import React, { useState } from 'react'
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
import { useSelector } from 'react-redux'
import AddTable from './Component/EditViewAdd/AddTable'
import EditTable from './Component/EditViewAdd/EditTable'
import ViewTable from './Component/EditViewAdd/ViewTable'
import {Offline,Online} from 'react-detect-offline'
import { Modal } from 'react-bootstrap'
const App = () => {

  const [show, setshow] = useState(false)
  const [validate, setValidate] = useState(false);

  const LogInStateRed = useSelector((state)=>state.LogInStateRed)

  const handleFunc = () => {
    setshow(!show)
  }

  // eval(
  //   `window.handleClick = ()=>{
  //     alert('hello world')
  //   }`
  // )

  return (
    <div>
<Offline>
  <div style={{ width: '100vw', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
    <span style={{ fontSize: '150px' }} class="bi bi-wifi-off"></span>
  </div>
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
  <ul>
  <h3>No internet</h3><br/>
  <h5>Try:</h5><br/>
    <li>Checking the network cables, modem, and router</li>
    <li>Reconnecting to Wi-Fi</li>
  </ul>
</div>

</Offline>

      {/* {

        MainObject.modalButton('title',handleFunc)
      }{
        MainObject.modalpop('model title',<Form/>,show,handleFunc)
      } */}
      {/* <MultiDropDown/> */}
      {/* <button className='btn btn-primary' onClick={()=>{eval('handleClick()')}}>Click me</button> */}
      <Online>
      <Navbar />
      <Routes>
        <Route path='/' element={<LogInPage/>} />
        <Route element={<ProtectedRoutes logStatus={LogInStateRed}/>}>
          <Route path='/addTable' element={<AddTable/>} />
          <Route path='/editTable' element={<EditTable/>} />
          <Route path='/viewTable' element={<ViewTable/>} />
          <Route path='/homepage' element={<Home  />} />
          <Route path='/forms' element={<Form />} />
          <Route path='/GridForm' element={<GridForm />} />
          <Route path='/confform' element={<FormConf />} />
        </Route>
      // </Routes>
      </Online>
    </div>
  )
}

export default App
