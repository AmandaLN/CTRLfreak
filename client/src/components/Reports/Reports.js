import React from 'react'
import { Bar } from "react-chartjs-2";
import { Col, Row } from '../../components/Grid';


/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function PublicRoute() {

    return (

        <div className="container">
            <Row>

                <Col size="md-12">
                    <h1 className="text-center">Reports</h1>
                </Col>

                <hr />

                <Col size="md-12">
                    <h3 className="text-right">Monthly Breakdown</h3>
                </Col>



                {/* Here goes a styled breakline */}
                <hr />

                <Col size="md-4">
                    <img src="https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png" alt="placeholder" height="250" width="300" />
                </Col>
                <Col size="md-4">
                    <img src="https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png" alt="placeholder" height="250" width="300" />
                </Col>
                <Col size="md-4">
                    <img src="https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png" alt="placeholder" height="250" width="300" />
                </Col>

                {/* Need Breaklines or separation of some sort */}

                <Col size="md-12">
                    <h3 className="text-right">Chart</h3>
                </Col>

                {/* Styled hr line */}

                <Col size="md-12">

                    <Bar
                        data={{

                            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                            datasets: [
                                {
                                    label: '#of Votes',
                                    data: [12, 19, 3, 5, 2, 3],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)'
                                    ],
                                }
                            ]
                        }}
                        height={300}
                        width={250}
                        options={{
                            maintainAspectRatio: false,

                        }}
                    />
                </Col>


                <Col size="md-12">
                    <h3 className="text-right">Most Recent Expenses</h3>
                </Col>

                <Col size="md-12">
                    <table class="table table-striped">

                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </div>




    )
}


export default PublicRoute