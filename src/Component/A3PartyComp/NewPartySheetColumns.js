import { EditableAttachCell, NewEditableCell, EditableDateCell, EditableDdCell, EditableDdqResCell, EditableMixCell, EditableNumCell, EditableRateNumCell, MARiskRatingDropDown, RiskRatingDropDown, EditableTpreResCell, EditableRrtTextCell } from "./NewEditableCellPartySheet"

const calculateColumnWidth = (tableWidth, totalColumns) => {
    return Math.floor(tableWidth / totalColumns);
};

export const NewPartysheetColumns = (col,accountData,updateMyData,setmaxScore) =>{

    // console.log('PartysheetData',col)
    // console.log('PartysheetData',accountData)

  return[  {
        Header : 'Test Details',
        accessor : 'test',
        columns : col.filter((fil)=>{return fil.parentCell =='test'}).sort((a,b)=> a.orderBy-b.orderBy).map((cres)=>{
            return {
                Header : cres.fieldName,
                accessor : cres.accessor,
                width : cres.width !== null ? cres.width : calculateColumnWidth( 0.97 * window.innerWidth, col.length)
            }
        }),
        sticky:'left'
        
    }
    ,...accountData.map((res)=>{
        // console.log('check val Party',res)
    return {
        Header : res.split('$$')[0],
        accessor : res,
        columns : col.filter((fil)=>{return fil.parentCell !=='test'}).sort((a,b)=> a.orderBy-b.orderBy).map((cres)=>{
            if(cres.cellType=='textArea'){
                return {
                    Header : cres.fieldName,
                    accessor : cres.accessor+'#'+res,
                    Cell : ({cell}) =>{return <NewEditableCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} colObj={cell.column} parentId={cell} />},
                    width : cres.width !== null ? cres.width : calculateColumnWidth( 0.97 * window.innerWidth, col.length)

                }
            }else if(cres.cellType=='attach'){
                return{
                    Header : cres.fieldName,
                    accessor : cres.accessor+'#'+res,
                    Cell : ({cell}) =>{return <EditableAttachCell  column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} colObj={cell.column}/>},
                    width : cres.width !== null ? cres.width : calculateColumnWidth( 0.97 * window.innerWidth, col.length)

                }
            }else if(cres.cellType=='mix'){
                return{
                    Header : cres.fieldName,
                    accessor : cres.accessor+'#'+res,
                    Cell : ({cell}) =>{return <EditableMixCell rowObj={cell.row}  column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} colObj={cell.column}/>},
                    width : cres.width !== null ? cres.width : calculateColumnWidth( 0.97 * window.innerWidth, col.length)
                }
            }else if(cres.cellType=='dropDown'){
                return{
                    Header : cres.fieldName,
                    accessor : cres.accessor+'#'+res,
                    Cell : ({cell}) =>{return <EditableDdCell rowObj={cell.row}  column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} colObj={cell.column}/>},
                    width : cres.width !== null ? cres.width : calculateColumnWidth( 0.97 * window.innerWidth, col.length)
                }
            }else if(cres.cellType=='rrDropDown'){
                return{
                    Header : cres.fieldName,
                    accessor : cres.accessor+'#'+res,
                    Cell : ({cell}) =>{return <RiskRatingDropDown setmaxScore={setmaxScore} column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} colObj={cell.column} parentId={cell}/>},
                    width : cres.width !== null ? cres.width : calculateColumnWidth( 0.97 * window.innerWidth, col.length)
                }
            }else if(cres.cellType=='marrDropDown'){
            return{
                Header : cres.fieldName,
                accessor : cres.accessor+'#'+res,
                Cell : ({cell}) =>{return <MARiskRatingDropDown setmaxScore={setmaxScore} column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} colObj={cell.column} parentId={cell}/>},
                width : cres.width !== null ? cres.width : calculateColumnWidth( 0.97 * window.innerWidth, col.length)
            }
        }
            else if(cres.cellType == 'rateNum'){
                return{
                    Header : cres.fieldName,
                    accessor : cres.accessor+'#'+res,
                    Cell : ({cell}) =>{
                        return <EditableRateNumCell colObj={cell.column.original} column={cell.column.id} row={cell.row.id} value={cell.value} updateMyData={updateMyData}
                        parentId={cell}
                        />
                    }
                }
            }else if(cres.cellType == 'responseDD'){
                return{
                    Header : cres.fieldName,
                    accessor : cres.accessor+'#'+res,
                    Cell : ({cell}) =>{
                        return <EditableDdqResCell rowObj={cell.row.original} colObj={cell.column.original} column={cell.column.id} row={cell.row.id} value={cell.value} updateMyData={updateMyData}
                        parentId={cell}
                        />
                    }
                }
            }else if(cres.cellType=='tpreResponseDd'){
                return {
                    Header : cres.fieldName,
                    accessor : cres.accessor+'#'+res,
                    // accessor : cres.accessor,
                    Cell : ({cell}) =>{return <EditableTpreResCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} colObj={cell.column} rowObj={cell.row} parentId={cell} />},
                    width : cres.width !== null ? cres.width : calculateColumnWidth( 0.97 * window.innerWidth, col.length)
                }
            }else if(cres.cellType=='rrDisableText'){
                return {
                    Header : cres.fieldName,
                    accessor : cres.accessor+'#'+res,
                    // accessor : cres.accessor,
                    Cell : ({cell}) =>{return <EditableRrtTextCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} colObj={cell.column} rowObj={cell.row} parentId={cell} col={col} />},
                    width : cres.width !== null ? cres.width : calculateColumnWidth( 0.97 * window.innerWidth, col.length)
                }
            }
            else{
                return {
                    Header : cres.fieldName,
                    accessor : cres.accessor+'#'+res,
                    width : cres.width !== null ? cres.width : calculateColumnWidth( 0.97 * window.innerWidth, col.length)
                }
            }

        })
    }
  })]
}