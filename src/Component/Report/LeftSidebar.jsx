import React, { useState } from 'react';
import './LeftSidebar.css'
import { IoReorderThreeOutline } from "react-icons/io5";
import "rsuite/dist/rsuite.css";


const LeftSidebar = () => {
    const [isExpanded, setExpanded] = useState(true);

    const toggleSidebar = () => {
      setExpanded(!isExpanded);
    };

    return (
        <>
            <div className={`left-sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
                <div className="sidebar-header" onClick={toggleSidebar}>
                    {isExpanded ? (
                        <>
                            <h3 style={{ paddingLeft: '10x' }}>Filter <IoReorderThreeOutline className='line-icon' /></h3>
                            <hr />
                        </>
                    ) : (
                        <IoReorderThreeOutline style={{ fontSize: '2.5em' }} />
                    )}
                </div>
                <div style={{ display: isExpanded ? 'block' : 'none' }}>
                    <h4 style={{ paddingLeft: '10px' }}>Form</h4>

                </div>
                <div className="sidebar-content" style={{ display: isExpanded ? 'block' : 'none', overflowY: 'auto', maxHeight: '65vh', overflowX: 'hidden' }}>
                    <input className='form-control' type="text" placeholder="Enter filter..." />
                </div>
            </div>
            <div className="sidebar-footer" style={{ display: isExpanded ? 'block' : 'none' }}>
                <button className="btn btn-secondary" style={{ marginLeft: '2em' }} >Apply Filter</button>
            </div>
        </>
    );
};

export default LeftSidebar;
