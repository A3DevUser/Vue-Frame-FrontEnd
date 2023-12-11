import { MainObject } from '../../Component/Elements/commonFun';
import React from 'react'
import '../Report/ReportCont.css'
// import LeftSideNav from './LeftSidebar';
import FilterData from './FilterData';
import LeftSidebar from './LeftSidebar';

const ReportForm = () => {
    return (
        <>
        <div className='main-compo' >
            <div><LeftSidebar /></div>
            <div className='right-compo'>
                 <FilterData /> 
            </div>
        </div>
        </>
    )
}

export default ReportForm;