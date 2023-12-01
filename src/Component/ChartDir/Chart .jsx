import React from 'react'
import './Chart.css'
import { Bar, Bubble, Doughnut, Pie, PolarArea,Chart } from 'react-chartjs-2'
// import 'react-chartjs-2/dist/react-chartjs-2.css';
import 'chart.js/auto';


const ChartComp = () => {
    const data = {labels: ['High', 'Medium', 'Low'],
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ['#B83227', '#019031', '#F3B431'],
        hoverBackgroundColor: ['#B83227', '#019031', '#F3B431'],
      },
    ]}

    const dataLine = {
      labels : [0,10,30],
      datasets : [{
          data : [0,30,100]
      }]
    }

    const dataBar = {labels: ['Universal', 'Credit', 'Concurrent'],
    datasets: [
      {
        data: [10,20,5],
        backgroundColor: ['#B83227', '#019031', '#F3B431'],
        hoverBackgroundColor: ['#B83227', '#019031', '#F3B431'],
      },
    ]}
    const dataBar4 = {labels: ['CSME', 'Gold Loan', 'Against Security','Education loan','Car Loan','Personal Loan','Staff Loan'],
    datasets: [
      {
        data: [10, 30, 15, 40, 59, 20,40],
        backgroundColor: ['#B83227', '#019031', '#F3B431'],
        hoverBackgroundColor: ['#B83227', '#019031', '#F3B431'],
      },
    ]}
    const options = {
      plugins : {
        legend: {
          position: false, // Set the position to 'right'
        }
      }
       ,
      };
  return (
    <div className='mainDiv'>
    <div className='chart-flex'>
    <div> <Chart data={data} type='doughnut' options={{plugins:{legend:{position:'left' ,maxWidth:'80'}, title:{display:true, text:'Issue Rating',align:'start',padding: {
              top: 10,
              bottom: 10
          },
          font: {
            size: 30,
            style: 'italic',
            family: 'Helvetica Neue'
          }}}}} /></div>
    <div><Chart data={dataLine} type='line' options={{plugins:{legend:{position:'false'}, title:{display:true, text:'Issue Aging',align:'start',padding: {
              top: 10,
              bottom: 10
          },
          font: {
            size: 30,
            style: 'italic',
            family: 'Helvetica Neue'
          }}}}} /></div>
    <div><Chart data={dataBar} type='bar' options={{plugins:{legend:{position:'false'}, title:{display:true, text:'Issue Vs Audit',align:'start',padding: {
              top: 10,
              bottom: 10,
          },
          font: {
            size: 30,
            style: 'italic',
            family: 'Helvetica Neue'
          }}}}} /> </div>
    <div className='item4'><Chart data={dataBar4} type='bar' options={{maintainAspectRatio:false,plugins:{legend:{position:'false'}, title:{display:true, text:'Issue Vs Productivity',align:'start',padding: {
              top: 10,
              bottom: 10,
          },
          font: {
            size: 30,
            style: 'italic',
            family: 'Helvetica Neue'
          }}}}} /> </div>
    </div>
    </div>
  )
}

export default ChartComp;