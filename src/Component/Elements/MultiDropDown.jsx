import React from 'react'
import { Dropdown } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'; 

const MultiDropDown = () => {
  return (
    <div>
<Dropdown title="GeeksforGeeks">
    <Dropdown.Item>Item 1</Dropdown.Item>
    <Dropdown.Menu title="SubMenu">
        <Dropdown.Item>Item 2A</Dropdown.Item>
        <Dropdown.Item>Item 2B</Dropdown.Item>
        <Dropdown.Menu title='sub sub menu '>
        <Dropdown.Item>Item 2A</Dropdown.Item>
        <Dropdown.Item>Item 2B</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown.Menu>
</Dropdown>
    </div>
  )
}

export default MultiDropDown
