import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Col } from "../Grid";


 function BarChart ({data1}) {
console.log(data1)
    const [dataChart, setDataChart] = useState({
        labels: ["Groceries", "Utilities", "Subscription", "Total"],
        datasets: [
          {
            label: ["Expenses"],
            data: data1,
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
            borderColor:  [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
            borderWidth: 1,
          
          },
        ],
    })

return(
  <>
    <Col size="md-12">
    <div className='header'>
      <h3 className='title'>Expenses</h3>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/react16/example/src/charts/Doughnut.js'
        >
          Expenses
        </a>
      </div>
    </div>
    <Bar data={dataChart}/>
    </Col>
  </>
  )
}

export default BarChart