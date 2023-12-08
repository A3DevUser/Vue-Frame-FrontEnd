import React from 'react'
import { useState } from 'react';
import './FilterData.css'

const DummyData = [
  { id: 1, name: 'John Doe', roleNumber: '001', phoneNumber: '123-456-7890', email: 'john.doe@example.com' },
  { id: 1, name: 'Tej', roleNumber: '002', phoneNumber: '123-456-002', email: 'Tej@example.com' },
  { id: 1, name: 'Nitin', roleNumber: '003', phoneNumber: '123-456-003', email: 'nitinj@example.com' },
  { id: 1, name: 'Vishal', roleNumber: '004', phoneNumber: '123-456-004', email: 'vishal@example.com' },
];


const FilterData = () => {
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState(DummyData);

  const handleFilterChange = (event) => {
    const inputValue = event.target.value;
    setFilter(inputValue);

    if (inputValue.trim() === '') {
      setFilteredData(DummyData);
    }
  };

  const handleFilterClick = () => {
    const filteredResults = DummyData.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.roleNumber}</td>
              <td>{item.name}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
        <br />
      </table>
      {/* <center>
        <input type="text" value={filter} onChange={handleFilterChange} placeholder="Enter name..." />
        <button className='submit' onClick={handleFilterClick}>Filter</button>
      </center> */}
    </div>
  );
}

export default FilterData;