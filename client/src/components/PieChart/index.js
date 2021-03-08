import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Col } from "../Grid";
import API from "../../utils/API";

function PieChart ({labels1, data1, background1, border1, totalGroceries, user}) {

    const [dataChart, setDataChart] = useState({
        labels: [labels1, "Total"],
        datasets: [
          {
            label: labels1,
            data: [data1, totalGroceries],
            backgroundColor: [background1, "rgba(75, 192, 192, 0.2)"], 
            borderColor: [border1, "rgba(75, 192, 192, 0.2)"]
            //   'rgba(255, 99, 132, 1)',
            //   'rgba(54, 162, 235, 1)',
            //   'rgba(255, 206, 86, 1)',
            //   'rgba(75, 192, 192, 1)',
            //   'rgba(153, 102, 255, 1)',
            //   'rgba(255, 159, 64, 1)',
            ,
            borderWidth: 1,
          },
        ],
        height: 150,
        witdh: 150,
    })
 
return(
  <>
    <Col size="md-4">
    <div className='header'>
      <h3 className='title'>{labels1}</h3>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/react16/example/src/charts/Doughnut.js'
        >
          {labels1} Page
        </a>
      </div>
    </div>
    <Pie data={dataChart} />
    </Col>
  </>
  )
}

export default PieChart