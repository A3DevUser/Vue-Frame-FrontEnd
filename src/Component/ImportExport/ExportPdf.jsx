import React from 'react'
import jspdf  from 'jspdf'
import 'jspdf-autotable';
import { Button } from 'react-bootstrap';


const ExportPdf = ({Data}) => {
const handleClick = () =>{
const doc = new jspdf({
  orientation: "landscape",

});

// Define the columns and rows
const columns = [];
const rows = [];

// Extract the column headers from JSON keys
Object.keys(Data[0]).forEach(key => {
  columns.push(key);
});

// Extract the data rows
Data.forEach(data => {
  const row = [];
  columns.forEach(column => {
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

export default ExportPdf
