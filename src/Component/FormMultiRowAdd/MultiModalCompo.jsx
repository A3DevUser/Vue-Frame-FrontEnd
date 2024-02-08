import { useState } from "react"
import { Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import MultiRowAddTab from "./MultiRowAddTab"

export const MultiModalCompo = ({ title, bodyDetails, show, setshow, showFunc, multiData, columns }) => {
  const dispatch = useDispatch()
  const UserDataStateRed = useSelector((state) => state.UserDataStateRed)

  let titleData = [{"Title":""}]

  let newColumnData = [{"formId":"FORM-722","columnId":"COL-3965","fieldName":"Cost Code","accessor":"Cost_Code","columnFilterType":'',"secId":'',"cellType":"disableTextCell","width":"200","subSecId":'',"subSecName":'',"subSecWidth":'',"subSecType":'',"orderNo":"1","catgoryId":'',"gridId":"GID-784","sticky":'',"dbcolLimit":"4000","dbcolConst":"NOT ''","hideShow":'',"targetId":"GID-005"},{"formId":"FORM-722","columnId":"COL-3966","fieldName":"Cost Code Name","accessor":"Cost_Code_Name","columnFilterType":'',"secId":'',"cellType":"disableTextCell","width":"200","subSecId":'',"subSecName":'',"subSecWidth":'',"subSecType":'',"orderNo":"2","catgoryId":'',"gridId":"GID-784","sticky":'',"dbcolLimit":"4000","dbcolConst":"NOT ''","hideShow":'',"targetId":"GID-005"}]

  let newRowData = [{"Cost_Code":"TEXT_C01","Cost_Code_Name":"TEXT_C01","Department_Name":"","Process":"","VF_OBJ_ID":"","VF_STATUS":"","VF_ACTION":"","VF_STAGE":"","VF_PROCESS_INSTANCE_ID":"","VF_INSTANCE_ID":"","VF_GRID_ID":"","VF_CREATED_BY":"","VF_CREATED_ON":"","VF_MODIFIED_BY":"","VF_MODIFIED_ON":"","VF_ORGANISATION_ID":"","VF_NEXT_ROLE":"","VF_MAIN_OBJ_ID":"","VF_CURRENT_USER":"","VF_ROLE":"","remove":""},{"Cost_Code":"TEXT_C02","Cost_Code_Name":"TEXT_C02","Department_Name":"","Process":"","VF_OBJ_ID":"","VF_STATUS":"","VF_ACTION":"","VF_STAGE":"","VF_PROCESS_INSTANCE_ID":"","VF_INSTANCE_ID":"","VF_GRID_ID":"","VF_CREATED_BY":"","VF_CREATED_ON":"","VF_MODIFIED_BY":"","VF_MODIFIED_ON":"","VF_ORGANISATION_ID":"","VF_NEXT_ROLE":"","VF_MAIN_OBJ_ID":"","VF_CURRENT_USER":"","VF_ROLE":"","remove":""}]

  const [rowData,setRowData] = useState(newRowData)
  const [flag,setFlag] = useState(true)

  const handleMultiAdd = (selectedFlatRows) => {
    
    // console.log('MultiRow Added','Multi Row CLick')
    
    let obj ={}
    columns.forEach((res)=> {return obj[res.accessor]=''})
  
    setRowData(old =>{
      return newRowData.filter((fil,i)=>{
        return selectedFlatRows.some(row=> i==row.id)
      })
    })
    
    setshow(!show)
  
  }

  // useEffect(() => {
  //   multiData((old) => {
  //     return rowData
  //   })
  //   setFlag(false)
  // },[rowData])

  // useEffect(() => {
  //   setRowData(newRowData)
  // },[flag])

  return (
    <div>
      <Modal size='xl' show={show} centered scrollable={true} onHide={showFunc}>
        <Modal.Header closeButton>{title}</Modal.Header>
        <Modal.Body><MultiRowAddTab titleData={titleData} columnData={newColumnData} pendencyData={newRowData} handleMultiAdd={handleMultiAdd} /></Modal.Body>
      </Modal>
    </div>
  )
}
