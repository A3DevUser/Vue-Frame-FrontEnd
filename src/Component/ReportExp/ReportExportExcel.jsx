import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ExcelJS from 'exceljs';
import { ReportDataValidation } from './ReportDataValidation';
import { useSelector } from 'react-redux';

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


const ReportExportExcel = ({ repoGrid, repoColunm, repoData }) => {
  // console.log('griData',columnData);
  // console.log('griData',griData);
  const [exporting, setExporting] = useState(false);
  const [exportError, setExportError] = useState(null);
  const ReportTitleColumnRed = useSelector((state)=> state.ReportTitleColumnRed)
  const ReportTitleGridRed = useSelector((state)=> state.ReportTitleGridRed)
  const ReportTitleDataRed = useSelector((state) => state.ReportTitleDataRed)

  // useEffect(()=>{
  //   console.log("jsonData",FormIdRed);
    // console.log("jsonData",ReportTitleColumnRed.val);
    // console.log("jsonData",ReportTitleGridRed.val);
    // console.log("jsonData",ReportTitleDataRed.val);
  // },[])

  const range = {
    formula1: 0,
    formula2: Number.MAX_VALUE,
  };

  const handleClick = async () => {
    // console.log('exported')
    
    const workbook = new ExcelJS.Workbook();
    let worksheet = workbook.addWorksheet(repoGrid[0].rptTitle);

    const column = repoColunm.map((res)=>res.rptColLabel)
    const colAccessor = repoColunm.map((res)=>res.rptColName)
    // console.log('jsonData',ReportTitleDataRed.val);
    //  console.log('jsonData',Object.keys(ReportTitleColumnRed.val.map((res)=>res.rptColLabel)));
    // console.log('jsonData',column);
    worksheet.addRow(column)

    repoData.forEach((fres)=>{
      // console.log('jsonData',colAccessor.map((res)=>res));
      const newRow = colAccessor.map((res)=>fres[res])
            worksheet.addRow(newRow)
     })
  
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
    <div>
      <span variant="primary" onClick={handleClick} disabled={exporting}>
        {exporting ? 'Exporting...' : 'Export to Excel'}
      </span>
      {exportError && <p style={{ color: 'red' }}>{exportError}</p>}
    </div>
  );
};

export default ReportExportExcel;
