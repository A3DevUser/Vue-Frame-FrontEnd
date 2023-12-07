import React from 'react';
import ReactDOM from 'react-dom';
import "rsuite/dist/rsuite.css";
import { Sidenav, Nav, Toggle } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import AddOutlineIcon from '@rsuite/icons/AddOutline';

const LeftSideNav = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState('1');
  return (
    <div className={`left-side-nav ${expanded ? 'expanded' : ''}`} >
      {/* <Toggle
        onChange={setExpanded}
        checked={expanded}
        checkedChildren="Expand"
        unCheckedChildren="Collapse"
      // <hr />
      /> */}
      <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']}>
        <Sidenav.Header>
        <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" icon={<GroupIcon />}>
              Form
            </Nav.Item>
            <Nav.Menu placement="rightStart" eventKey="3" title="DropDown" icon={<MagicIcon />}>
              <Nav.Item eventKey="3-1">Geo</Nav.Item>
              <Nav.Item eventKey="3-2">Devices</Nav.Item>
              <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
              <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Item eventKey="2" icon={<AddOutlineIcon  />}>
              About
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default LeftSideNav;