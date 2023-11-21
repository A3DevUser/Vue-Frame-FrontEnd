import  { useEffect, useMemo, useRef, useState } from 'react'
import { useBlockLayout, useResizeColumns, useTable,useRowSelect } from 'react-table'
import './TableStyle.css'
import { Styles,VerticalTableStyles, VertStyles } from './TableStyles'
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
import { Button } from 'react-bootstrap'

const FormTable = ({col,dData,gridData,handleSave}) => {
    const [data,setdata]=useState([])
    const [chngRow,setchngRow]=useState({})
    const [finalArr, setfinalArr] =useState([])
    const prevDData = useRef(dData);

    
  
    const FormDatRed = useSelector((state) => state.FormDatRed)
    const EmdRed = useSelector((state)=>state.EmdRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)
    const DropValRed = useSelector((state) => state.DropValRed)
    const AuthRed = useSelector((state)=>state.AuthRed)



    useEffect(()=>{
      if(EmdRed=='add'){
        setdata([])
      }
    },[EmdRed])

    // const mySelRowState = useSelector((state)=>state.selectedRowState)
    // const AreaSchemeDateSetRed = useSelector((state)=>state.AreaSchemeDateSetRed)

    const dispatch = useDispatch()
  
  
  const formData = new FormData()
    const updateMyData = (rowIndex, columnId, value, fileData) => {
  if(fileData){
    formData.append('file',fileData)
    // formData is the final variable for fileData
  }
  
      setchngRow({rowIndex})
      setdata(old =>
        old.map((row, index) => {
          if (index == rowIndex) {
            return {
              ...old[rowIndex],
              [columnId]: value,
              ['auditId'] : 'auditId'
            }
          }
          return row
        })
      )
    }
  
    const addAndDeleteRow = (index,obj,action) => {
      if(action=='add'){
      // setdata((old)=>{
      //   return old.map((res,i)=>{
      //     if(i == index){
      //       return [{...res},{...obj}]
      //     }else{
      //       return res
      //     }
      //   }).flat()
      // })
      setdata((old)=>{return [...old,obj]})
    }else{
          setdata((old)=>{
            return old.filter((fil,i)=>{
              return i !== Number(index)})
          })
      }
    }
    const handleOnfocus = (fid,gid,cid,rData,oData,rowInd) =>{
      // console.log('dropvaldata',encodeURI(JSON.stringify(rData)))
      let rowData = encodeURI(JSON.stringify(rData))
      dispatch(FetchDropValData(fid,gid,cid,rowData,oData,rowInd,AuthRed.val))
    }

      const[columns,setcolumns]=useState(
        gridData.isMrow =='true' ?
          [...ColumnHeader(col,updateMyData,'',addAndDeleteRow,gridData,data,handleOnfocus,DropValRed.val),
        {Header : "Remove",
        accessor : 'remove',
        sticky : 'right',
        Cell : ({cell}) =>{return <EditableActionCell colObj={cell.column} column={cell.column.id} row={cell.row.id} rowObj={cell.row} addAndDeleteRow={addAndDeleteRow}/> },
      }]
       :
       ColumnHeader(col,updateMyData,'',addAndDeleteRow,gridData,data,handleOnfocus,DropValRed.val)
    
    )
      // console.log('logColDtls',ColumnHeader(col,updateMyData,'',addAndDeleteRow,gridData,data,handleOnfocus,DropValRed.val))

      useEffect(()=>{
        setcolumns(
          gridData.isMrow =='true' ?
          [...ColumnHeader(col,updateMyData,'',addAndDeleteRow,gridData,data,handleOnfocus,DropValRed.val),
        {Header : "Remove",
        accessor : 'remove',
        sticky : 'right',
        Cell : ({cell}) =>{return <EditableActionCell colObj={cell.column} column={cell.column.id} row={cell.row.id} rowObj={cell.row} addAndDeleteRow={addAndDeleteRow} data={data.length}/>},
      }]
       :
       ColumnHeader(col,updateMyData,'',addAndDeleteRow,gridData,data,handleOnfocus,DropValRed.val)
      )
      },[col])
  
      useEffect(()=>{
        if(dData !== data){
          setdata([...dData])   
        }
      },[dData,data])
  
        useEffect(()=>{
          if(window.location.pathname == '/confform'){
            dispatch(FormDataAct({...FormDatRed,[gridData.gridId] : data}) )   
          }else{
            dispatch(FormDataAct({...FormDatRed,[gridData.gridId] : data.map((res)=>{return {...res,GRID_ID:gridData.gridId, formId :FormIdRed }})}) )  
          }

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
          },[data])

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


        
          const handleAddRow = ()=>{
            let obj ={}
            
            columns.forEach((res)=> obj[res.accessor]='')
            console.log('GridFormSub',obj)
            addAndDeleteRow('',obj,'add')
          }

          const handleRemove = () =>{
            console.log('selectedFlatRows',selectedFlatRows)

            setdata(old =>{
              return old.filter((fil,i)=>{
                return !selectedFlatRows.some(row=> i==row.id)
              })
            })
          }

          const handleCopy = () =>{
            setdata(old=>{return [...old,...selectedFlatRows.map((res)=>{return res.original})]})
          }

          // useEffect(() => {
          //   // Check if dData has changed since the last render
          //   if (prevDData.current !== dData) {
          //     // Update the local state only if there's a change
          //     setdata([...dData]);
        
          //     // Update the previous value of dData
          //     prevDData.current = dData;
          //   }
          // }, [dData]);

          const initialState = { hiddenColumns : col.filter((fil)=>{return fil.hideShow=='true'}).map((res)=>{return res.accessor})}

          console.log('initialState',initialState)
  
      const tableInstance = useTable({
          columns,
          data,
          initialState
          
      },useBlockLayout,useResizeColumns,useSticky,useRowSelect,(hooks)=>{
        hooks.visibleColumns.push((columns)=>{
          return [{
            id :'selection',
            Header : ({getToggleAllRowsSelectedProps})=>{
              return <Checkbox {...getToggleAllRowsSelectedProps()}/>
            },
            Cell : ({row}) =>{
              return <Checkbox {...row.getToggleRowSelectedProps()}/>
            },
            width:'50',
            sticky : 'left'
          },
          ...columns]
        })
      })
  
  const {getTableProps,getTableBodyProps,headerGroups,prepareRow,rows,selectedFlatRows} = tableInstance

    return (
      <div >
        <Styles>
          <div style={{display:'flex'}}>
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
        <TableStruc getTableBodyProps={getTableBodyProps} getTableProps={getTableProps}  headerGroups={headerGroups} prepareRow={prepareRow} rows={rows} handleSave={handleSave} handleAddRow={handleAddRow} gridData={gridData} handleRemove={handleRemove} handleCopy={handleCopy} />
        </Styles>
    </div>
  )
}

export default FormTable
