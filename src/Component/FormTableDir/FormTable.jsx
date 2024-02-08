import { useEffect, useMemo, useRef, useState } from 'react'
import { useBlockLayout, useResizeColumns, useTable, useRowSelect, usePagination, useGlobalFilter } from 'react-table'
import './TableStyle.css'
import { Styles, VerticalTableStyles, VertStyles } from './TableStyles'
import { ColumnHeader } from './ColumnHeader'
import TableStruc from './TableStruc'
import { useSticky } from 'react-table-sticky'
import { useDispatch, useSelector } from 'react-redux'
import { FormDataAct } from '../../Store/Actions/GeneralStates'
import { EditableActionCell } from './EditableCell'
import VertTableStruc from './VertTableStruc'
import { FetchDropValData } from '../../Store/Actions/DropVal'
import { MainObject } from '../Elements/commonFun'
import { Checkbox } from './Checkbox'
import { Button, Col } from 'react-bootstrap'
import { FetchObjectIdData } from '../../Store/Actions/ObjectIdAct'
import { MultiModalCompo } from '../../Component/FormMultiRowAdd/MultiModalCompo'
import { FetchMultiModalColData } from '../../Store/Actions/MultiModalColAct'
import { FetchMultiModalColRowData } from '../../Store/Actions/MultiModalColRowAct'
import { useLocation } from 'react-router'

const FormTable = ({ col, dData, gridData, handleSave, funNavConf, disBtn, setDisBtn }) => {
  const [data, setdata] = useState([...dData])
  const [chngRow, setchngRow] = useState({})
  const [finalArr, setfinalArr] = useState([])
  const prevDData = useRef(dData);
  const [userDisBtn, setUserDisBtn] = useState(false)

  const FormDatRed = useSelector((state) => state.FormDatRed)
  const EmdRed = useSelector((state) => state.EmdRed)
  const FormIdRed = useSelector((state) => state.FormIdRed)
  const DropValRed = useSelector((state) => state.DropValRed)
  const AuthRed = useSelector((state) => state.AuthRed)
  const SendConfDataRed = useSelector((state) => state.SendConfDataRed)
  const SendObjectIdRed = useSelector((state) => state.SendObjectIdRed)
  const MainObjIdRed = useSelector((state) => state.MainObjIdRed)
  const FormEditRed = useSelector((state) => state.FormEditRed)
  const WorkFlowEditRed = useSelector((state) => state.WorkFlowEditRed)
  const EditReportRed = useSelector((state)=>state.EditReportRed)
  const MultiModalColRed = useSelector((state) => state.MultiModalColRed)
  const MultiModalColRowRed = useSelector((state) => state.MultiModalColRowRed)

  const SendReportConfDataRed = useSelector((state) => state.SendReportConfDataRed)
  const [localData, setLocalData] = useState([])
  const [hide, setHide] = useState(false)
  const [localVal, setLocalVal] = useState([])
  const location = useLocation()

  // console.log('dData',dData)

  useEffect(() => {
    setLocalData(SendReportConfDataRed.val)
  }, [SendReportConfDataRed])


    useEffect(()=>{
      if(EmdRed=='add'&&window.location.pathname.includes('editTable')){
        if(Object.keys(FormDatRed).includes(gridData.gridId)){
          if(gridData.isMain=='true'){
            setdata([...FormDatRed[gridData.gridId]])
            // console.log('CheckFormData',[...FormDatRed[gridData.gridId]].length)
              
              // if([...FormDatRed[gridData.gridId]].length >= 1 && gridData.gridId == 'GID-902'){
              //   setDisBtn(true)
              // }

          // if ([...FormDatRed[gridData.gridId]].length >= 1 && gridData.gridId == 'GID-902') {
          //   setDisBtn(true)
          // }

          // if([...FormDatRed[gridData.gridId]].length >= 1 && gridData.gridId == 'GID-290'){
          //   setUserDisBtn(true)
          // }

        } else {
          // console.log('VF_MAIN_OBJ_ID_new',FormDatRed)
          if (Object.keys(FormDatRed[gridData.gridId]).includes(MainObjIdRed)) {
            setdata([...FormDatRed[gridData.gridId][MainObjIdRed]
              //   .filter((fil) => {
              //   return fil.VF_MAIN_OBJ_ID == MainObjIdRed
              //  })
            ])
          }
        }
      } else {
        let dataObj = {}
        col.filter((fil) => { return fil.gridId == gridData.gridId }).forEach((fe) => { dataObj[fe.accessor] = '' })
        setdata([])
      }
    }
  }, [gridData])


  // const mySelRowState = useSelector((state)=>state.selectedRowState)
  // const AreaSchemeDateSetRed = useSelector((state)=>state.AreaSchemeDateSetRed)

  const dispatch = useDispatch()


  const formData = new FormData()
  const updateMyData = (rowIndex, columnId, value, fileData) => {
    if (fileData) {
      formData.append('file', fileData)
      // formData is the final variable for fileData
    }

    if (window.location.pathname == '/addTable') {
      if (value.length !== 0) {
        dispatch(FetchObjectIdData(FormIdRed, AuthRed.val, rowIndex))
      }
    }



    setchngRow({ rowIndex })
    setdata(old =>
      old.map((row, index) => {
        if (index == rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value
            // ['auditId'] : 'auditId'
          }
        }
        return row
      })
    )
  }

  // const addAndDeleteRow = (index,obj,action) => {   ---old Add Delete Row Tez

  //   if(action=='add' || action == 'Useradd'){
  //   // setdata((old)=>{
  //   //   return old.map((res,i)=>{
  //   //     if(i == index){
  //   //       return [{...res},{...obj}]
  //   //     }else{
  //   //       return res
  //   //     }
  //   //   }).flat()
  //   // })
  //   if(gridData.isMain == 'true'){
  //     // console.log('gridData',gridData);
  //     setdata((old)=>
  //     {return [...old,{...obj}]})
  //   }else if(gridData.gridId == 'GID-015'){
  //     setdata(localData)
  //   }
  //   else{
  //     setdata((old)=>{return [...old,{...obj,VF_OBJ_ID:index,VF_MAIN_OBJ_ID:MainObjIdRed}]})

  //   }

  // }else{
  //       setdata((old)=>{
  //         return old.filter((fil,i)=>{
  //           return i !== Number(index)})
  //       })
  //   }

  //   if (gridData.gridId == 'GID-902'){
  //     setDisBtn(false)              
  //   }
  //   if (gridData.gridId == 'GID-290'){
  //     setUserDisBtn(false)
  //   }
  // }

  const [dropdownArray,setDropdownArray] = useState([]);
  const pages = ['/editConfForm']
  useEffect(() => {
    // console.log('new dropArry',[...FormEditRed.val][0].DATA[0].formId);
    if(([...FormEditRed.val][0]  !== null) && pages.includes(window.location.pathname) ){
      let EditFormId = [...FormEditRed.val][0].DATA[0].formId
      const droparrcon = EditFormId.split('$$')
      setDropdownArray(droparrcon)
      // console.log('new dropArry from');
    }
    else if(([...WorkFlowEditRed.val][0]  !== null)&& window.location.pathname == ('/editWorkFlowConf')){
      let EditWorkFlow = [...WorkFlowEditRed.val][0].DATA[0].wfId
      const droparrcon = EditWorkFlow.split('$$')
      setDropdownArray(droparrcon)
      // console.log('new dropArry workflow');
    }
    else if(([...EditReportRed.val][0]  !== null) && window.location.pathname == ('/editReport')){
      // let EditReport = [...EditReportRed.val][0].DATA[0].dsId
      if(gridData.gridId == "GID-017"){
        let EditReport = [...EditReportRed.val][0].DATA[0].dsId
      const droparrcon = EditReport.split('$$')
      setDropdownArray(droparrcon)
      // console.log('new dropArry reportDsid',droparrcon);
      }else if(gridData.gridId == "GID-018"){
        let EditReportFil = [...EditReportRed.val][0].DATA[0].rptId
          const droparrcon = EditReportFil.split('$$')
          setDropdownArray(droparrcon)
          // console.log('new dropArry reportRpti',droparrcon);
      }
  }},[FormEditRed,WorkFlowEditRed,EditReportRed])
  

  const addAndDeleteRow = (index, obj, action) => {      //Tez
  
    
    if (action == 'add' || action == 'Useradd') {
      // setdata((old)=>{
      //   return old.map((res,i)=>{
      //     if(i == index){
      //       return [{...res},{...obj}]
      //     }else{
      //       return res
      //     }
      //   }).flat()
      // })



      if (gridData.isMain == 'true') {


        // console.log('gridData check val', gridData.gridId == "GID-008")

        setdata((old) => { return [...old, { ...obj }] })
      } else if (gridData.gridId == 'GID-015') {
        setdata(localData)
      }
      else {
        const constDDGID = ["GID-003", "GID-004"]
        if (gridData.gridId == "GID-003" && window.location.pathname == ('/editConfForm')) {
          let EditFormId = [...FormEditRed.val][0].DATA[0].formId
          // console.log('new update data obj', [...FormEditRed.val][0].DATA[0].formId)
          if ([...FormEditRed.val][0].DATA[0].formId != '' && window.location.pathname == ('/editConfForm')) {
            setdata((old) => { return [...old, { ...obj, formId: dropdownArray[0] }] })
          }
        } else if ( gridData.gridId == "GID-004" && window.location.pathname == ('/editConfForm') ) {
          let EditFormId = [...FormEditRed.val][0].DATA[0].formId
          // console.log('new update data obj', [...FormEditRed.val][0].DATA[0].formId)
          if ([...FormEditRed.val][0].DATA[0].formId != '' && window.location.pathname == ('/editConfForm')) {
            setdata((old) => { return [...old, { ...obj, formId: dropdownArray[0] }] })
          }
        }
         else if (gridData.gridId == "GID-008" && window.location.pathname == ('/editWorkFlowConf')) {
          let EditWorkFlow = [...WorkFlowEditRed.val][0].DATA[0].wfId
          if ([...WorkFlowEditRed.val][0].DATA[0].wfId !== '' && window.location.pathname == ('/editWorkFlowConf')) {
            setdata((old) => { return [...old, { ...obj, wfId: dropdownArray[0] }] })
          }
          // console.log('gridData check val', gridData.gridId == "GID-008")
        }
        else if (gridData.gridId == "GID-017" && window.location.pathname == ('/editReport')) {
          let EditReport = [...EditReportRed.val][0].DATA[0].dsId
          if ([...EditReportRed.val][0].DATA[0].dsId !== '' && window.location.pathname == ('/editReport')) {
            setdata((old) => { return [...old, { ...obj, dsId: dropdownArray[0] }] })
          }
          // console.log('gridData check val', gridData.gridId == "GID-017")
        }
        else if (gridData.gridId == "GID-018" && window.location.pathname == ('/editReport')) {
          let EditReportFil = [...EditReportRed.val][0].DATA[0].rptId
          if ([...EditReportRed.val][0].DATA[0].rptId !== '' && window.location.pathname == ('/editReport')) {
            setdata((old) => { return [...old, { ...obj, rptId: dropdownArray[0] }] })
          }
          // console.log('gridData check val', gridData.gridId == "GID-018")
        }
        else {
          // console.log('SendObjectIdRed','Inside Normal add')
          // console.log('gridData check val', gridData.gridId == "GID-008")
          // console.log('gridData check val', [...WorkFlowEditRed.val][0].DATA[0].wfId)
          setdata((old) => { return [...old, { ...obj, VF_OBJ_ID: index, VF_MAIN_OBJ_ID: MainObjIdRed }] })
        }
      }

    } else {
      setdata((old) => {
        return old.filter((fil, i) => {
          return i !== Number(index)
        })
      })
    }

    if (gridData.gridId == 'GID-902'){
      setDisBtn(false)              
    }
    if (gridData.gridId == 'GID-290'){
      setUserDisBtn(false)
    }
    
  }                                           //Tez


  const handleOnfocus = (fid, gid, cid, rData, oData, rowInd) => {
    // console.log('dropvaldata',rData)
    // console.log('dropvaldata',encodeURI(JSON.stringify(rData)))
    let rowData = encodeURI(JSON.stringify(rData))
    dispatch(FetchDropValData(fid, gid, cid, rowData, oData, rowInd, AuthRed.val))
  }

  const [columns, setcolumns] = useState(
    (gridData.isMrow == 'true' )&&(window.location.pathname !=='/editTable') ?
      [...ColumnHeader(col, updateMyData, '', addAndDeleteRow, gridData, data, handleOnfocus, DropValRed.val, location),
      {
        Header: "Remove",
        accessor: 'remove',
        sticky: 'right',
        Cell: ({ cell }) => { return <EditableActionCell colObj={cell.column} column={cell.column.id} row={cell.row.id} rowObj={cell.row} addAndDeleteRow={addAndDeleteRow} /> },
      }]
      :
      ColumnHeader(col, updateMyData, '', addAndDeleteRow, gridData, data, handleOnfocus, DropValRed.val, location)

  )
  // console.log(ColumnHeader(col,updateMyData))

  useEffect(() => {
    setcolumns(
      (gridData.isMrow == 'true' )&&(window.location.pathname !=='/editTable') ?
        [...ColumnHeader(col, updateMyData, '', addAndDeleteRow, gridData, data, handleOnfocus, DropValRed.val, location),
        {
          Header: "Remove",
          accessor: 'remove',
          sticky: 'right',
          Cell: ({ cell }) => { return <EditableActionCell colObj={cell.column} column={cell.column.id} row={cell.row.id} rowObj={cell.row} addAndDeleteRow={addAndDeleteRow} data={data.length} /> },
        }]
        :
        ColumnHeader(col, updateMyData, '', addAndDeleteRow, gridData, data, handleOnfocus, DropValRed.val, location)
    )
  }, [col])

  // useEffect(()=>{
  //   if(dData !== data){
  //     setdata([...dData])   
  //   }
  // },[dData])

  // useEffect(()=>{
  //   console.log('FormDatRed',FormDatRed)
  // },[FormDatRed])
 
  useEffect(() => {                                                 //Tez
    // console.log('opData',{...FormDatRed,[gridData.gridId] : data})
    if (window.location.pathname == '/confform') {
      // console.log('FormTable confform', { ...FormDatRed, [gridData.gridId]: data });
      dispatch(FormDataAct({ ...FormDatRed, [gridData.gridId]: data }))
    } else if (window.location.pathname == '/editConfForm') {
      // console.log('FormTable editConfForm', { ...FormDatRed, [gridData.gridId]: data });
      dispatch(FormDataAct({ ...FormDatRed, [gridData.gridId]: data }))
    }
    else if (window.location.pathname == '/editDataSource') {
      // console.log('FormTable editDataSource', { ...FormDatRed, [gridData.gridId]: data });
      dispatch(FormDataAct({ ...FormDatRed, [gridData.gridId]: data }))
    }
    else if (window.location.pathname == '/editReport') {
      // console.log('FormTable editReport', { ...FormDatRed, [gridData.gridId]: data });
      dispatch(FormDataAct({ ...FormDatRed, [gridData.gridId]: data }))
    }
    else if (window.location.pathname == '/editWorkFlowConf') {
      // console.log('FormTable editWorkFlowConf', { ...FormDatRed, [gridData.gridId]: data });
      dispatch(FormDataAct({ ...FormDatRed, [gridData.gridId]: data }))
    }
    else if (window.location.pathname == '/confreport') {
      // console.log('FormTable confreport', { ...FormDatRed, [gridData.gridId]: data });
      // console.log('Submit Report Conf',FormDatRed)
      dispatch(FormDataAct({ ...FormDatRed, [gridData.gridId]: data }))
    }
    else {
      if (gridData.isMain !== 'true') {
        dispatch(FormDataAct({
          ...FormDatRed, [gridData.gridId]: {
            ...FormDatRed[gridData.gridId],
            [MainObjIdRed]: data.map((res) => { return { ...res, GRID_ID: gridData.gridId, formId: FormIdRed } })
          }
        }))
      } else {
        dispatch(FormDataAct({ ...FormDatRed, [gridData.gridId]: data.map((res) => { return { ...res, GRID_ID: gridData.gridId, formId: FormIdRed } }) }))
      }
    }     //Tez

    //   if(data.length > 0){
    //   setfinalArr((old)=>{
    //     if(old.some((sres)=>{return sres.id == data[chngRow].id})){
    //       return old.map((res)=>{
    //         if(res.id == data[chngRow].id){
    //           return data[chngRow]
    //         }else{
    //           return res
    //         }
    //       })
    //     }else{
    //       return [...old,data[chngRow]]
    //     }
    //   })
    //   }
  }, [data])

  // const defaultColumn = useMemo(
  //   () => ({
  //     // minWidth: 30,
  //     // width: 150,
  //     // maxWidth: 400
  //   }),
  //   []
  // );
  // useEffect(()=>{
  //   console.log('tableColumns',columns)
  // },[columns])

  // useEffect(()=>{
  //   console.log(finalArr)
  // },[finalArr])

  const handleAddRow = () => {
    if (gridData.gridId == 'GID-015') {
      // const rowInd = localData.length
      localData.map((res, index) => {
        // console.log('addAndDeleteRow',res)
        addAndDeleteRow(index, res, 'add')
      })
      setHide(true)
    } else {
      let obj = {}
      const rowInd = data.length
      columns.forEach((res) => { return obj[res.accessor] = '' })
      // console.log('addAndDeleteRow',obj)
      addAndDeleteRow(rowInd, obj, (gridData.gridId == 'GID-290') ? 'Useradd' : 'add')
    }
    if (gridData.gridId == 'GID-902') {
      setDisBtn(true)
    }
    if (gridData.gridId == 'GID-290') {
      setUserDisBtn(true)
    }

  }

  const handleRemove = () => {

    // console.log('handleRemove', 'inside handelRemove')

    setdata(old => {
      return old.filter((fil, i) => {
        return !selectedFlatRows.some(row => i == row.id)
      })
    })

  }

  const handleCopy = () => {
    setdata(old => { return [...old, ...selectedFlatRows.map((res) => { return res.original })] })
  }

  // useEffect(() => {
  //   if (data.length > 0 && !SendObjectIdRed.loading) {
  //     console.log('SendObjectIdRed', SendObjectIdRed.val.rowId,data,gridData.gridId)
  //     if (data[SendObjectIdRed.val.rowId]['VF_MAIN_OBJ_ID'].length == 0) {
  //       setdata(old =>
  //         old.map((row, index) => {
  //           if (index == SendObjectIdRed.val.rowId) {
  //             return {
  //               ...old[SendObjectIdRed.val.rowId],
  //               ['VF_MAIN_OBJ_ID']: SendObjectIdRed.val.objId
  //               // ['auditId'] : 'auditId'
  //             }
  //           }
  //           return row
  //         })
  //       )
  //       // data[SendObjectIdRed.val.rowId]['VF_MAIN_OBJ_ID']==SendObjectIdRed.val.objId
  //     }
  //   }
  // }, [SendObjectIdRed])

  // useEffect(()=>{
  //   console.log('FormDatRed.val',FormDatRed)
  //   console.log('FormDatRed.val',data)

  // },[FormDatRed])
  // useEffect(() => {
  //   // Check if dData has changed since the last render
  //   if (prevDData.current !== dData) {
  //     // Update the local state only if there's a change
  //     setdata([...dData]);

  //     // Update the previous value of dData
  //     prevDData.current = dData;
  //   }
  // }, [dData]);

  const initialState = { hiddenColumns: col.filter((fil) => { return fil.hideShow == 'true' && gridData.gridId == fil.gridId }).map((res) => { return res.accessor }) }

  // console.log(`initialState ${gridData.gridId}`,col.filter((fil)=>{return fil.hideShow=='true'}))

  const tableInstance = useTable({
    columns,
    data,
    autoResetPage: false,
    autoResetFilters: false,
    autoResetSortBy: false,
    initialState
  }, useBlockLayout, useGlobalFilter, usePagination, useResizeColumns, useSticky, useRowSelect, (hooks) => {
    hooks.visibleColumns.push((columns) => {
      return [{
        id: 'selection',
        Header: ({ getToggleAllRowsSelectedProps }) => {
          return <Checkbox {...getToggleAllRowsSelectedProps()} />
        },
        Cell: ({ row }) => {
          return <Checkbox {...row.getToggleRowSelectedProps()} />
        },
        width: '50',
        sticky: 'left'
      },
      ...columns]
    })
  })

  const [show,setshow] = useState(false)

  function funMultiRows(gridId) {
    setshow(!show)
    dispatch(FetchMultiModalColData(gridId, AuthRed.val))
    dispatch(FetchMultiModalColRowData(gridId, AuthRed.val))
  }

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page, selectedFlatRows, previousPage, canPreviousPage, nextPage, canNextPage, pageOptions, state, gotoPage, pageCount, setGlobalFilter } = tableInstance

  return (
    <div >
      <Styles>
        <div style={{ display: 'flex' }}>
          {/* <h6 className="mx-5 my-2" id={gridData.gridId}>{gridData.gridName}</h6> */}
          {/* <div style={{flex:'1'}}>
        <button className='btn btn-success mx-2' style={{float:'right', display : gridData.isMrow =='true' ? 'block' : 'none',flex:'1' }}
        // disabled={EmdRed == 'yes'}
        onClick={handleAddRow}
        ><i class="bi bi-plus-lg"></i> Add</button>
        <Button variant='success' style={{float:'right',display : gridData.isMrow =='true' ? 'block' : 'none'}}><i class="bi bi-trash"> </i>Remove</Button>
        <Button variant='success' style={{float:'right',display : gridData.isMrow =='true' ? 'block' : 'none'}} className='mx-2'><i class="bi bi-copy"> </i>Duplicate</Button>

        <div style={{float:'right'}}>
          
          {
    MainObject.button({classNameVal:'btn btn-success', widthVal:'', heightVal:'',btnName: <><i class="bi bi-floppy"></i> Save</>},()=>{handleSave(gridData)})
  }
  </div>
                </div> */}
          </div>
          {MainObject.MultiModalCompo('MultiRow Details','',show,setshow,funMultiRows,setdata,columns)}
          {/* <MultiModalCompo title='MultiRow Details' bodyDetails = '' show={show} setshow={setshow} funMultiRows={funMultiRows} setdata={setdata} columns={columns}/> */}
        <TableStruc getTableBodyProps={getTableBodyProps} getTableProps={getTableProps}  headerGroups={headerGroups} prepareRow={prepareRow} rows={page} handleSave={handleSave} handleAddRow={handleAddRow} gridData={gridData} handleRemove={handleRemove} handleCopy={handleCopy} previousPage={previousPage} canPreviousPage={canPreviousPage} nextPage={nextPage} canNextPage={canNextPage} pageOptions={pageOptions} state={state} gotoPage={gotoPage} pageCount={pageCount} setGlobalFilter={setGlobalFilter} hide={hide} funNavConf={funNavConf} disBtn={disBtn} setdata={setdata} data={data} userDisBtn={userDisBtn} funMultiRows={funMultiRows} />
        </Styles>
    </div>
  )
}

export default FormTable
