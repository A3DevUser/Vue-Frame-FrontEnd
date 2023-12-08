import React from 'react'
import '../NavBarLeft/ReportCont.css'
// import LeftSideNav from '../LeftSideNav';
import FilterData from './FilterData';
import LeftSidebar from './LeftSidebar';

const Tp = () => {
    return (
        <div className='main-compo' >
            <div><LeftSidebar /></div>
            <div className='right-compo'> <FilterData /> </div>
        </div>
    )
}

export default Tp;