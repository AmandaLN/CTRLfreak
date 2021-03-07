import React, { useEffect, useState } from "react";
import { Bar, Doughnut, defaults } from "react-chartjs-2";
import { Col, Row } from '../../components/Grid';
import HR from '../HR';
import { List, ListItem } from "../List";
import API from "../../utils/API";
let totalGroceries = 0;


defaults.global.legend.position = 'bottom'

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function PublicRoute({budgets, expensesTotal}) {

      
    const [budgetsGroceries, setBudgetsGroceries] = useState([])
    const [budgetsUtilities, setBudgetsUtilities] = useState([])
    const [budgetsSubscription, setBudgetsSubscription] = useState([])
    
  
    // Load all books and store them with setBooks
     useEffect(() => {
        console.log("useEffect")
        fetch('api/users/user', {
			credentials: 'include'
			})
			.then((res) => {
				console.log(`response to authenticate ${res}`);
				console.log(res, "yesyes")
				return res.json(res)
			})
			.then(  data => {
                console.log(data, "checkdata")
               let userName = {
                    user: data.username
                }
                console.log(userName, "username")
        API.getExpensesbyType("Groceries", userName)
        .then(res => {
            console.log("nada")
          if (res) {
            console.log(res.data, "checking  groceries")
            
            // console.log(expensesTotal, "totalexpenses")
            // setBudgetsGroceries(res.data[0].expenses)
            // setBudgetsUtilities(res.data[0].expenses)
            // setBudgetsSubscription(res.data[0].expenses)
            } else {
                console.log("No Groceries")
               
            }
  
   
      })
        .catch(err => console.log(err));

			})
			.catch((err) => {
				console.log('Error fetching authorized user.');
			});
 

 
  
  
  
    }, [])


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

                <Col size="md-12">
                    <h3 className="text-right ">Monthly Breakdown</h3>
					<HR/>
                </Col>


{/* Dougnuts Column need to be a bit higher */}
                <Col size="md-4">

				<Doughnut
                        data={{

                            labels: ['Gas', 'Electric', 'Water', 'Internet'],
                            datasets: [
                                {
                                    label: '#of Votes',
                                    data: [12, 19, 3, 5],
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
							legend:{

							}

                        }}
                    />
					
                </Col>

                <Col size="md-4">

				<Doughnut
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
							legend:{

							}

                        }}
                    />
                </Col>

                <Col size="md-4">
				<Doughnut
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
							legend:{

							}

                        }}
                    />
                </Col>


                <Col size="md-12">
                    <h3 className="text-right ">Charts</h3>
					<HR/>
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
                    <h3 className="text-right ">Most Recent Expenses</h3>
					<HR/>
                </Col>

                <Col size="md-12">
					{/* Table need to be a little bit more up */}
                    {budgets.map(budget => {
                    return (
                    <ListItem key={budget._id}>
                      <a href={"/budgets/" + budget._id}>
                        <strong>
                        title : {budget.title} type: {budget.type} cost: {budget.cost} expires: {formatDate(budget.expires)}
                        </strong>
                      </a>
                    </ListItem>
                  );
                })}
                </Col>
            </Row>
        </div>




    )
}


export default PublicRoute