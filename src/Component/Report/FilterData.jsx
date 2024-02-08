import React, { useEffect } from 'react'
import { useState } from 'react';
import './FilterData.css'
import { useDispatch, useSelector } from 'react-redux';
import { FetchGridData } from '../../Store/Actions/GridAct';
import { FetchColumnData } from '../../Store/Actions/Column';
import GridFormSub from '../../Component/GridFormSub';
import { MainObject } from '../../Component/Elements/commonFun';
import ImpExp from '../ReportExp/ReportImpExp';
import { FetchReportTitleGridData } from '../../Store/Actions/ReportTitleGrid';
import { FetchReportTitleColumnData } from '../../Store/Actions/ReportTitleColumn';
import { FetchReportTitleData } from '../../Store/Actions/ReportTitleData';

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
  const ColumnRed = [{"columnId":"RPTC-9","gridId":"RPT-9","accessor":"USERID","fieldName":"User ID","cellType":"textArea","rptColTooltip":"zzzz","width":"200","number":"1","formId":"DS-58"},
  {"columnId":"RPTC-10","gridId":"RPT-9","accessor":"USERNAME","fieldName":"User Name","cellType":"textArea","rptColTooltip":"zzzzz","width":"200","number":"2","formId":"DS-58"}]
  // useSelector((state) => state.ColumnRed)
  const GridRed = [{"gridId":"RPT-9","dbTableName":"Login Report","gridName":"Login Details Report","formId":"DS-58","rptPkg":"vf","isMain":"Report","rptType":"tabular"}]
  // useSelector((state) => state.GridRed)
  const FormIdRed = useSelector((state) => state.FormIdRed)
  const FormDatRed = useSelector((state) => state.FormDatRed)
  const AuthRed = useSelector((state)=>state.AuthRed)
  const ReportTitleColumnRed = useSelector((state)=> state.ReportTitleColumnRed)
  const ReportTitleGridRed = useSelector((state)=> state.ReportTitleGridRed)
  const ReportTitleDataRed = useSelector((state) => state.ReportTitleDataRed)

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
    // console.log('FormIdRed',FormIdRed)
    // dispatch(FetchGridData('FORM-627',AuthRed.val))
    // dispatch(FetchColumnData('FORM-627','no',AuthRed.val))
    dispatch(FetchReportTitleGridData(FormIdRed,AuthRed.val))
    dispatch(FetchReportTitleColumnData(FormIdRed,AuthRed.val))
    dispatch(FetchReportTitleData(FormIdRed,AuthRed.val))
  }, [FormIdRed])

  // useEffect(()=>{
  //   console.log('NewReport Data',ReportTitleColumnRed)
  //   // console.log('NewReport Data',ReportTitleGridRed)
  //   // console.log('NewReport Data',JSON.stringify(GridRed))
  //   // console.log('NewReport Data',JSON.stringify(ColumnRed))
  // },[ReportTitleColumnRed,ReportTitleGridRed])


  const handleSave = ()=>{
    
  }

  return (
    <div >
    {/* {
      GridRed.loading ? MainObject.loader() : ColumnRed.loading ? MainObject.loader() : 
      GridRed.val.filter((fil)=>{return fil.isMain }).map((res,i)=>{
      return <GridFormSub column={ColumnRed.val.sort((a,b)=>{return a.number-b.number})} data={DummyData} gridData={res} key={i} handleSave={handleSave}/>})
    } */}
    {
      ReportTitleGridRed.loading ? MainObject.loader() : ReportTitleColumnRed.loading ? MainObject.loader() : ReportTitleDataRed.loading ? MainObject.loader() :
      MainObject.reportTable(ReportTitleGridRed.val,ReportTitleColumnRed.val.sort((a,b)=>{return a.rptColSort-b.rptColSort}),ReportTitleDataRed.val)
      // GridRed.filter((fil)=>{return fil.isMain }).map((res,i)=>{
      // return <GridFormSub column={ColumnRed.sort((a,b)=>{return a.number-b.number})} data={DummyData} gridData={res} key={i} handleSave={handleSave}/>})
    }
  </div>
  );
}

export default FilterData;