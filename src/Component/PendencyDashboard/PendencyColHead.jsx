import { PendencyLink } from "../../Component/FormTableDir/EditableCell"

export const PendColumnHeader = (colData) => {

  return colData.map((res) => {
    return{
      Header: res.colLabel,
      accessor: res.colName,
      Cell : ({cell})=>{
        return<PendencyLink lable={'CLick'} to={'/editTable'}/>
      },
      width: '200',
      sticky: 'false'
    }
  })

}