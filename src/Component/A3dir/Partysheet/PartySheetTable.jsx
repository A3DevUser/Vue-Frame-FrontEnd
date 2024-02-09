import { daysToWeeks } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useMemo } from 'react'
import { useTable, useGlobalFilter, useRowSelect, useBlockLayout,useSortBy,useFilters,usePagination } from 'react-table'
import { ColumnFilter } from '../ColumnFilter'
import { Checkbox } from '../Checkbox'
import { useSticky } from 'react-table-sticky'
import { useDispatch, useSelector } from 'react-redux'
import { Styles } from '../AssesmentTableStyles'
import { PartysheetColumns } from './PartySheetColumns'
import { Button, Dropdown, DropdownButton, InputGroup, Modal } from 'react-bootstrap'
import { PostA3SaveData } from '../../../Store/Actions/A3DataSaveAct'
import A3OverviewModal from './A3OverviewModal'
import DividePartySheet from './DividePartySheet'
import swal from 'sweetalert'
import { useNavigate } from 'react-router'
import { FormTestScoreData } from '../../../Store/Actions/TestScoreDataAct'
import { PreOnboardignScoreAct } from '../../../Store/Actions/GeneralStates'




const PartySheetTable = ({col,dData,userName,accData,tableData,handleChange,filterTypr,setClickSave, clickSave,
  scoreTpre,score,scoreDdq,setScoreTpre,setScore,setScoreDdq
}) => {
const dispatch = useDispatch()
const navigate = useNavigate()

const PreOnboardignScoreRed = useSelector((state) => state.PreOnboardignScoreRed)



const accColumn = col.filter((fil)=>{return fil.parentCell=='account'}).map((res)=>{return res.accessor});
  
  const combArr = []

  

  // dData.forEach((res)=>{
  //   tableData.forEach((fe)=>{
  //     if(res.testId==fe.testId){
  //       accColumn.forEach((fres)=>{
  //         combArr.push({...res,[fres+'#'+fe.Associate_Vend] : fe[fres]})
  //       })
  //     }else{
  //       combArr.push({...res})
  //     }
  //   })
  // })

  // console.log('tDataId',
  // dData.map((res)=>{
  //   return tableData.map((fres)=>{
  //     if(res.testId==fres.testId){
  //     return accColumn.map((tres)=>{
  //       return {...res,[tres+'#'+fres.Associate_Vend]: fres[tres]}
  //     })
  //     }else{
  //       return {...res}
  //     }
  //   })
  // }).flat(2)
  // )

  


  // console.log('tDataId',combArr)

  const opData = tableData.map((res)=>{
    return accColumn.map((ares)=>{
       return {...res,[`${ares}#${res.Associate_Vend}`] : res[ares]}
     })
   }).flat()

   const finalOpData = dData.map((res)=>{
    if(opData.some((sres)=>sres.testId==res.testId)){
      return {...res,...opData.filter((fil)=>{return fil.testId==res.testId})[0]}
    }else{
      return {...res}
    }
  })


  const [maxScore,setmaxScore] = useState(0)
  const [maxScoreTpre,setmaxScoreTpre] = useState(0)
  
  const [accountData,setaccountData] = useState([...accData.slice(0,10)])
  const [columns,setcolumns]=useState([...PartysheetColumns(col,accData.slice(0,10).map((res)=>{return res.Associate_Vend}),updateMyData,setmaxScore,setmaxScoreTpre)])
  const [data,setdata]=useState(
    tableData.length > 0 ?
    [...finalOpData] : [...dData]
  );


  
  const [finalData,setfinalData] = useState({})
  const [fileArr,setfileArr] =useState()
  // const [scoreTpre,setScoreTpre] = useState(0)
  // const [score,setScore] = useState(0)
  // const [scoreDdq,setScoreDdq] = useState(0)
  const [show,setShow] = useState(false)
  const [globalSearchVal,setglobalSearchVal] = useState('')

  const mainObjDataRed = useSelector((state)=>state.mainObjDataRed)
  const AuthRed = useSelector((state)=>state.AuthRed)

  let isScorVal = 0

  if(col.filter((fil) => {
    return fil.isScoring == 'true'
  }).length > 0){
    isScorVal = col.filter((fil) => {
      return fil.isScoring == 'true'
    })[0].accessor
  }

  
  // console.log('TestColumnDatacol',isScorVal)
  useEffect(()=>{
    // console.log('TestColumnDataFind',Object.values(finalData).map((res)=>{
    //   return res[isScorVal]
    // }))
    // console.log('TestColumnDataFind',finalData)

    if(filterTypr == 'Materiality Assessment$$Materiality Assessment'){
    setScore(Object.values(finalData).reduce((acc,cur)=>{
      // console.log('maWeightAgeValue', acc)
      return acc += (cur[isScorVal] ? (Number(cur[isScorVal]))/100 : 0 )
    },0))
  }
    else if (filterTypr == 'Third Party Risk Evaluation$$Third Party Risk Evaluation'){
            // dispatch(PreOnboardignScoreAct({TPRE: Object.values(finalData).reduce((acc,cur)=>{
            //   return acc += (cur[isScorVal] ? Number(cur[isScorVal]) : 0 )
            // },0), MA: '', DDQ: ''}))
            setScoreTpre(Object.values(finalData).reduce((acc,cur)=>{
        return acc += (cur[isScorVal] ? Number(cur[isScorVal]) : 0 )
      },0)) 
    }
    else if (filterTypr == 'Due Diligence$$Due Diligence'){
            setScoreDdq(Object.values(finalData).reduce((acc,cur)=>{
        return acc += (cur[isScorVal] ? Number(cur[isScorVal]) : 0 )
      },0)) 
    }
  },[finalOpData])

  useEffect(() => {
    dispatch(PreOnboardignScoreAct({TPRE: scoreTpre, MA: score, DDQ: scoreDdq}))
  },[scoreTpre,score,scoreDdq])



    let userId = userName
    const accList = accData.map((res)=>{return res.Associate_Vend})
// console.log('vendorIdData',accList)
    const defaultColumn = React.useMemo(
        () => ({
          Filter: ColumnFilter
        }),
        []
      )


       
      const formData = new FormData()
      function updateMyData(rowIndex, columnId, value, fileData){

        if(fileData){
            formData.append('file',fileData)
            setfileArr(formData)
          }

        const colName = columnId.slice(0,columnId.indexOf('#'));
        const accNum = columnId.slice(columnId.indexOf('#')+1,columnId.length);
        // need to spread account data while setting final data
        setfinalData((old)=>( {...old,[accNum+rowIndex]:{id:accNum,...dData[rowIndex],...old[accNum+rowIndex],[colName]:value,...mainObjDataRed,...accountData.filter((fil)=>{return fil.Associate_Vend==accNum})[0]}}))

          setdata(old =>
            old.map((row, index) => {
                if (index === Number(rowIndex)) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              }
            }
            return row
          })
        )   
      }

      // useEffect(()=>{
      //   console.log('opFinalData',finalData)
      // },[finalData])

console.log('DataRowCount',dData)
      // function handleSave(){
      //   // alert(dData.length)
      //   const dataList = Object.values(finalData);
      //   dispatch(FormTestScoreData([  {
      //     "tpreScore": score,
      //     "tpreRating": score >= (dData.length*maxScore)/2 ? 'High' : score == 0 ? 'Low' : 'Medium',
      //     "isMaterial": "Material",
      //     "dueDilligenceScore": "Yearly",
      //     "vendor_ID": accList[0].split('$$')[0],
      //     "VENDOR_ID": accList[0].split('$$')[0]
      //   }],AuthRed.val))
      //   dispatch(PostA3SaveData(dataList,AuthRed.val,navigate))
      // }

      useEffect(() => {
        if(clickSave){
          console.log('ScoreValTest TPRE',Number(PreOnboardignScoreRed.TPRE).toFixed(2));
          console.log('ScoreValTest MA',Number(PreOnboardignScoreRed.MA).toFixed(2));
          console.log('ScoreValTest DDQ',Number(PreOnboardignScoreRed.DDQ).toFixed(2));
          const dataList = Object.values(finalData);
          dispatch(FormTestScoreData([  {
            "tpreScore": Number(PreOnboardignScoreRed.MA).toFixed(2),
            "tpreRating": Number(PreOnboardignScoreRed.MA).toFixed(2) >= (dData.length*maxScore)/2 ? 'High' : Number(PreOnboardignScoreRed.MA).toFixed(2) == 0 ? 'Low' : 'Medium',
            "isMaterial": "Material",
            "dueDilligenceScore": "0.00",
            "vendor_ID": accList[0].split('$$')[0],
            "VENDOR_ID": accList[0].split('$$')[0]
          },{
            "tpreScore": Number(PreOnboardignScoreRed.DDQ).toFixed(2),
            "tpreRating": Number(PreOnboardignScoreRed.DDQ).toFixed(2) >= (dData.length*maxScore)/2 ? 'High' : Number(PreOnboardignScoreRed.DDQ).toFixed(2) == 0 ? 'Low' : 'Medium',
            "isMaterial": "Material",
            "dueDilligenceScore": "Yearly",
            "vendor_ID": accList[0].split('$$')[0],
            "VENDOR_ID": accList[0].split('$$')[0]
          },{
            "tpreScore": Number(PreOnboardignScoreRed.TPRE).toFixed(2),
            "tpreRating": Number(PreOnboardignScoreRed.TPRE).toFixed(2) >= (dData.length*maxScoreTpre)/2 ? 'High' : Number(PreOnboardignScoreRed.TPRE).toFixed(2) == 0 ? 'Low' : 'Medium',
            "isMaterial": "Material",
            "dueDilligenceScore": "Yearly",
            "vendor_ID": accList[0].split('$$')[0],
            "VENDOR_ID": accList[0].split('$$')[0]
          }],AuthRed.val))
          dispatch(PostA3SaveData(dataList,AuthRed.val,navigate))
        }
      },[clickSave])

    //   function handleChange(e){
    //     const rangeLowCount = (((e.target.value)-1)*10);
    //     const rangeHighCount = ((e.target.value)*10)
    //     // setaccountData(()=>{return accData.slice(rangeLowCount,rangeHighCount)})

    //     setcolumns([...PartysheetColumns(col,accData.slice(rangeLowCount,rangeHighCount).map((res)=>{return res.Associate_Vend}),updateMyData)])

    //     // console.log('DividePartySheet',accData.slice(rangeLowCount,rangeHighCount))

    // }

    function handleSearchChange(e){
      setglobalSearchVal(e.target.value)
    }

    function handleSearch(){
     if(accList.indexOf(globalSearchVal) == -1){
      return swal({
        title :'Alert',
        text : 'No data found for '+globalSearchVal,
        icon: "warning",
        dangerMode: true
    })
     }else{
       const sheetNum = Math.ceil( accList.indexOf(globalSearchVal)==0 ? 0.1 : accList.indexOf(globalSearchVal)/10)
       handleChange({target:{value:sheetNum}})
     }
      
    }
  
      const{
          getTableProps,
          getTableBodyProps,
          headerGroups,
          page,
          rows,
          nextPage,
          previousPage,
          canPreviousPage,
          canNextPage,
          pageOptions,
          gotoPage,
          pageCount,
          setPageSize,
          prepareRow,
          state,
          preGlobalFilteredRows,
          setGlobalFilter,
          selectedFlatRows
      } = useTable({
          columns,
          data,
          defaultColumn
      },
      useBlockLayout,
      useSticky,
      useFilters,
      useGlobalFilter,
      useSortBy,
      usePagination,
      useRowSelect)


      const { globalFilter } = state
      const { pageIndex, pageSize } = state


  return (
    <>
    <A3OverviewModal show={show} setShow={setShow} />
    <div style={{display:'flex', flexDirection:'column'}}>
      {/* <div className='my-2' style={{display:'flex',justifyContent:'space-between',width: '97%', gap:10}}> */}
        {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}> */}
        {/* <span style={{fontSize:25}} class="bi bi-arrow-left-circle-fill"></span> */}
        {/* <DividePartySheet score={score} filterTypr={filterTypr} dataLength={accData.length} handleChange={handleChange}/> */}
        {/* </div> */}
        {/* <div>
        <DropdownButton variant='success' title='Overview'>
          <Dropdown.Item onClick={()=>setShow(true)}>Sheet Summary</Dropdown.Item>
          <Dropdown.Item onClick={()=>setShow(true)}>Assesment Summary</Dropdown.Item>
        </DropdownButton>
        </div>
        <InputGroup style={{width:'15vw'}}>
        <input type="search" list='acc' onChange={handleSearchChange} className='form-control'  placeholder='Search...' />
        <datalist id='acc'>
          {
            accData.map((res)=>{
              return <option>{res.Associate_Vend}</option>
            })
          }
        </datalist>
        <InputGroup.Text style={{cursor:'pointer'}} onClick={handleSearch}>
        <i class="bi bi-search"></i>
        </InputGroup.Text>
        </InputGroup> */}
        {/* <button onClick={handleSave} className='btn btn-outline-success'><i class="bi bi-floppy"></i></button> */}
      {/* </div> */}
      <div>
    <Styles>
        <div {...getTableProps()} className="table sticky table-hover table-striped mx-3" style={{ width: '97%', height:'75vh' }}>
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div className='tr' {...headerGroup.getHeaderGroupProps()}>
            {
                headerGroup.headers.map((column) => (
                    <div {...column.getHeaderProps(column.getSortByToggleProps())} className="th">
                  <div ></div>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                </div>
                ))
            }
        </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      </Styles>
      </div>
      </div>
    </>
  )
}

export default PartySheetTable