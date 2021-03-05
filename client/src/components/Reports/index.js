import React from 'react'
import { Bar } from "react-chartjs-2";
import { Col, Row } from '../Grid';
import Jumbotron from "../Jumbotron";
import { List, ListItem } from "../List";

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function Reports({budgets}) {
    console.log(budgets, "budgets budgets")
    function formatDate(date){
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate
    }


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

                            labels: ['Groceries', 'Utilities', 'Subscription', 'Total'],
                            datasets: [
                                {
                                    label: 'Budget',
                                    data: [5,8,10,20],
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
                

     
                {budgets.length ? (
              <List>
                {budgets.map(budget => {
                  return (
                    <ListItem key={budget._id}>
                      
                        <strong>
                        title : {budget.title} type: {budget.type} cost: {budget.cost} expires: {formatDate(budget.expires)}
                        </strong>
                  
                     </ListItem>
                  );
                })}
                
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
                </Col>
            </Row>
        </div>




    )
}


export default Reports