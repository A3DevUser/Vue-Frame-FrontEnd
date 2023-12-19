import React from 'react'
import jspdf from 'jspdf'
import 'jspdf-autotable';
import { Button } from 'react-bootstrap';


const ReportExportPdf = ({ Data, repoData, repoColunm }) => {
  // console.log("data",Data);
  const handleClick = () => {
    const doc = new jspdf({
      orientation: "landscape",

    });

    // console.log('repoData',repoData)
    // Define the columns and rows
    const columns = [];
    const rows = [];
    const rowData = [];

    // Extract the column headers from JSON keys
    repoColunm.map((res) => res.rptColLabel).forEach(key => {
      columns.push(key);
    });


    // console.log('repoData',repoColunm.map((res)=>res.rptColLabel))
    repoColunm.map((res) => res.rptColName).forEach(fre => {
            // console.log('repoData',fre);
            rowData.push(fre)
    })

    // Extract the data rows
    repoData.forEach(data => {
      const row = [];
      rowData.forEach(column => {
        row.push(data[column]);
      });
      rows.push(row);
    });

    // Add the data to the PDF
    doc.autoTable({
      head: [columns],
      body: rows,
    });

    // Save or download the PDF
    doc.save('data.pdf');
  }

  return (
    <div>
      <span onClick={handleClick}>Export to Pdf</span>
    </div>
  )
}

export default ReportExportPdf
