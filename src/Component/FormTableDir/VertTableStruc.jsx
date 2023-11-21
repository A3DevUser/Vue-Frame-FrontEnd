import React from 'react';
import TableCell from './TableCell';

const VertTableStruc = ({ getTableProps, getTableBodyProps, headerGroups, prepareRow, rows }) => {
  return (
    <div>
      <div {...getTableProps()} className="table sticky m-3" style={{ maxHeight: '40vh', maxWidth: '95vw', overflow: 'scroll' }}>
        <div className='header'>
          {
          headerGroups.map((headerGroup) => (
            <div className='tr' {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <div className='th' {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <div
                    {...column.getResizerProps()}
                    className={`resizer`}
                  />
                </div>
              ))}
            </div>
          ))
        }
        </div>
        <div className='body' {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row); // Make sure to call prepareRow for each row

            return (
              <div className='tr' {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <div className='td' {...cell.getCellProps()}>
                    <TableCell cell={cell} />
                  </div>
                ))
              }
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VertTableStruc;
