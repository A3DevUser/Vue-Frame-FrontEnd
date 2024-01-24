export function removeRows(setdata,selectedFlatRows){
    setdata(old => {
        return old.filter((fil, i) => {
          return !selectedFlatRows.some(row => i == row.id)
        })
      })
  }

 export async function addRow(setdata,columnData){
    let dataObj = {}
    await columnData.forEach((fres,i)=>{
        dataObj[fres.accessor]=fres.accessor+i
    })
    setdata(old =>{return [...old,dataObj]})
}
