import React, { useEffect, useState } from 'react';
import './LeftSidebar.css'
import { IoReorderThreeOutline } from "react-icons/io5";
import "rsuite/dist/rsuite.css";
import { useDispatch, useSelector } from 'react-redux';
import { FetchReportTitleFilterData } from '../../Store/Actions/ReportTitleFilter';
import { MainObject } from '../Elements/commonFun';


const LeftSidebar = () => {
    const [isExpanded, setExpanded] = useState(true);

    const toggleSidebar = () => {
        setExpanded(!isExpanded);
    };
        const dispatch = useDispatch()
    const FormIdRed = useSelector((state) => state.FormIdRed)
    const GridRed = useSelector((state) => state.GridRed)
    const ColumnRed = useSelector((state) => state.ColumnRed)
    const AuthRed = useSelector((state)=>state.AuthRed)
    const FormDatRed = useSelector((state) => state.FormDatRed)
    const ReportTitleFilterRed = useSelector((state) => state.ReportTitleFilterRed)

    useEffect(()=>{
        dispatch(FetchReportTitleFilterData(FormIdRed,AuthRed.val))
    },[FormIdRed])
    
    useEffect(()=>{
            console.log('LNav FormIdRed',ReportTitleFilterRed.val)
        },[ReportTitleFilterRed])

    return (
        <>
        {ReportTitleFilterRed.loading ? MainObject.loader() : <>
            <div className={`left-sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
                <div className="sidebar-header" onClick={toggleSidebar}>
                    {isExpanded ? (
                        <div  >
                            <h3 style={{ display: 'inline-block' }} >Filter</h3>
                            <IoReorderThreeOutline style={{ fontSize: '2.5em', marginLeft: '5vw' }} />
                            <hr />
                        </div>
                    ) : (
                        <IoReorderThreeOutline style={{ fontSize: '2.5em' }} />
                    )}
                </div>
            {ReportTitleFilterRed.val.map((res,i) => {
                return <>
                <div style={{ display: isExpanded ? 'block' : 'none' }}>
                    <h4 style={{ paddingLeft: '10px' }}>{res.colFilLabel}</h4>

                </div>
                <div className="sidebar-content" style={{ display: isExpanded ? 'block' : 'none', overflowY: 'auto', maxHeight: '65vh', overflowX: 'hidden' }}>
                    <input className='form-control' type={res.colFilTyp} placeholder="Enter filter..." />
                </div>                
                </>})}
                            </div>
                            <div className="sidebar-footer" style={{ display: isExpanded ? 'block' : 'none' }}>
                                <hr />
                                <button className="btn btn-secondary" style={{ marginLeft: '2em' }} >Apply Filter</button>
                            </div>        
        </>

        }

        </>
    );
};

export default LeftSidebar;
