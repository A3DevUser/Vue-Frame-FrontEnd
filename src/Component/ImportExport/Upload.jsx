import React from 'react';
import ExcelJS from 'exceljs';
import { useDispatch, useSelector } from 'react-redux';
import { ExcelDataAct } from '../../Store/Actions/GeneralStates';
import { PostExportData } from '../../Store/Actions/ExportAct';
import { Button } from 'react-bootstrap';
import swal from "sweetalert"


function ExcelReader({columnData, gridData}) {

  // console.log('dataUpload',columnData)
  // console.log('dataUpload',gridData)


  const AuthRed = useSelector((state)=>state.AuthRed)
  const UserDataStateRed = useSelector((state) => state.UserDataStateRed)

  const dispatch = useDispatch()

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const arrayBuffer = event.target.result;
      const workbook = new ExcelJS.Workbook();
      
      try {
        await workbook.xlsx.load(arrayBuffer);

        const result = [];
        workbook.eachSheet((worksheet, sheetId) => {
          worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1) {
              const rowData = {};
              row.eachCell((cell, colNumber) => {
                const filValue = worksheet.getRow(1).getCell(colNumber).value
                const sheetName = worksheet._name;
                const gridId = gridData.filter((fil)=>{return fil.gridName == sheetName})[0].gridId
                let columnName =''
                if(filValue=='MAIN OBJ ID'){
                  columnName = 'MAIN OBJ ID'
                }else{
                  columnName = columnData.filter((fil)=>{
                   return (fil.fieldName == filValue)&&(fil.gridId == gridId)
                 })[0].accessor
                }

                if(typeof cell.value=='number'){
                  rowData[columnName] = JSON.stringify(cell.value);
                  rowData['GRID_ID'] = gridId
                  // console.log('inside Upload if',rowData[columnName]);
                }else{
                  rowData[columnName] = cell.value;
                  rowData['GRID_ID'] = gridId
                  // console.log('inside Upload else',rowData[columnName]);
                }
              });
              result.push(rowData);
            }
          });
        });
        dispatch(ExcelDataAct(result)); 
        dispatch(PostExportData(UserDataStateRed,result,AuthRed.val)) // You can set the result in the component state or perform any other necessary operations
        // console.log('resultUpload',UserDataStateRed,result)
      } catch (error) {
        swal({
          title :'Alert',
          text : 'Error loading the Excel file:',
          icon: "warning",
          dangerMode: true
      })
        console.error('Error loading the Excel file:', error);
      }
    };

    if (file) {
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      {/* <input type="file"  accept=".xlsx" onChange={handleFileUpload} /> */}
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <input type="file" accept=".xlsx"  id="uploadBtn" onChange={handleFileUpload} />
        <label htmlFor="uploadBtn" className='uploadLabel btn btn-primary' style={{padding:'6px', fontFamily:'cursive'}}>
        <i className='bi bi-upload'> Upload file</i>
        </label>
      </div>
    </div>
  );
}

export default ExcelReader;
