import React, { useEffect } from 'react'
import { useState } from 'react';
import './FilterData.css'
import { useDispatch, useSelector } from 'react-redux';
import { FetchGridData } from '../../Store/Actions/GridAct';
import { FetchColumnData } from '../../Store/Actions/Column';
import GridFormSub from '../../Component/GridFormSub';
import { MainObject } from '../../Component/Elements/commonFun';

const DummyData = [
  { id: 1, name: 'John Doe', roleNumber: '001', phoneNumber: '123-456-7890', email: 'john.doe@example.com' },
  { id: 1, name: 'Tej', roleNumber: '002', phoneNumber: '123-456-002', email: 'Tej@example.com' },
  { id: 1, name: 'Nitin', roleNumber: '003', phoneNumber: '123-456-003', email: 'nitinj@example.com' },
  { id: 1, name: 'Vishal', roleNumber: '004', phoneNumber: '123-456-004', email: 'vishal@example.com' },
];


const FilterData = () => {
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState(DummyData);
  const dispatch = useDispatch();
  const SectionRed = useSelector((state)=>state.SectionRed)
  const ColumnRed = useSelector((state) => state.ColumnRed)
  const GridRed = useSelector((state) => state.GridRed)
  const FormIdRed = useSelector((state) => state.FormIdRed)
  const FormDatRed = useSelector((state) => state.FormDatRed)
  const AuthRed = useSelector((state)=>state.AuthRed)

  const [defaultVal,setdefaultVal] =useState([])

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

  useEffect(() => {
    dispatch(FetchGridData('FORM-627',AuthRed.val))
    dispatch(FetchColumnData('FORM-627','no',AuthRed.val))
  }, [FormIdRed])

  const handleSave = ()=>{
    
  }

  return (
    <div>
    {
      GridRed.loading ? MainObject.loader() : ColumnRed.loading ? MainObject.loader() : 
      GridRed.val.filter((fil)=>{return fil.isMain }).map((res,i)=>{
      return <GridFormSub column={ColumnRed.val.sort((a,b)=>{return a.number-b.number})} data={[]} gridData={res} key={i} handleSave={handleSave}/>})
    }
  </div>
  );
}

export default FilterData;