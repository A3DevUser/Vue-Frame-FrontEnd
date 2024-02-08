import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ExcelJS from 'exceljs';
import { DataValidation } from './DataValidation';

// Function to convert Excel column letters to index
function getColumnLetter(columnNumber) {
  let columnName = '';
  while (columnNumber > 0) {
    const remainder = (columnNumber - 1) % 26;
    columnName = String.fromCharCode(65 + remainder) + columnName;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }
  return columnName;
}

const border = {
  top: { style: 'thin' },
  left: { style: 'thin' },
  bottom: { style: 'thin' },
  right: { style: 'thin' },
}


const ExportExcel = ({ griData, columnData }) => {
  const [exporting, setExporting] = useState(false);
  const [exportError, setExportError] = useState(null);
  const range = {
    formula1: 0,
    formula2: Number.MAX_VALUE,
  };

  const handleClick = async () => {
    // console.log('exported')

    const workbook = new ExcelJS.Workbook();
  
    griData.forEach((fe, i) => {
      const currentSheet = workbook.addWorksheet(fe.gridName);
  
      const columnGrid = columnData.filter((fil) => fil.gridId === fe.gridId);
      const flattenedArray = columnGrid.map((res) => ({ header: res.fieldName, key: res.columnId }));

      workbook.worksheets[i].columns = [{header : 'MAIN OBJ ID'},...flattenedArray]
      // console.log('flattenedArray',...flattenedArray)
  
      columnGrid.forEach((gres,i) => {
        const validationType = gres.cellType;
      
          const columnInd = currentSheet.getColumn(gres.columnId)
          const columnAlpha =   getColumnLetter(columnInd._number)
          currentSheet.getCell(columnAlpha+1).border=border

          if(validationType=='number'){
            for (let i = 2; i <= 1000; i++) {
              currentSheet.getCell(columnAlpha +i).dataValidation = DataValidation.numberDataValid;
            }
          }else if(validationType=='date'){
            for (let i = 2; i <= 1000; i++) {
              currentSheet.getCell(columnAlpha +i).dataValidation = DataValidation.dateDataValid;
            }
          }

          
      });
      
    });
  
    try {
      // Save the template to a blob
      const blob = await workbook.xlsx.writeBuffer();
      const blobUrl = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'newExcelFile.xlsx';
      link.click();
    } catch (error) {
      console.error('Error:', error);
      setExportError('An error occurred during the export.');
    } finally {
      setExporting(false);
    }

  };
  

  return (
    <div >
      <span variant="primary" onClick={handleClick} disabled={exporting}>
        {exporting ? 'Exporting...' : 'Export to Excel'}
      </span>
      {exportError && <p style={{ color: 'red' }}>{exportError}</p>}
    </div>
  );
};

export default ExportExcel;
