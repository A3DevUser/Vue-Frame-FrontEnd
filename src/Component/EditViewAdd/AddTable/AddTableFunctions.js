import { FetchObjectIdData } from "../../../Store/Actions/ObjectIdAct"
import { useDispatch } from "react-redux"

export function removeRows(setdata,selectedFlatRows){
    setdata(old => {
        return old.filter((fil, i) => {
          return !selectedFlatRows.some(row => i == row.id)
        })
      })
  }

 export async function addRow(setdata,columnData,dispatch,formId,gridId,token,isMain){
    let dataObj = {}
    await columnData.forEach((fres,i)=>{
        dataObj[fres.accessor]=''
    })
    if(isMain){
      setdata(old =>{return [...old,{...dataObj,GRID_ID:gridId,formId:formId}]})
    }else{
      setdata(old =>{return [...old,{...dataObj,GRID_ID:gridId,formId:formId,VF_OBJ_ID:old.length}]})
    }
    if(isMain){
      dispatch(FetchObjectIdData(formId,token,0))
    }
}
