import React, { useEffect, useState } from "react";
import { Bar, Doughnut, defaults } from "react-chartjs-2";
import { Col, Row } from "../Grid";
import DoughnutChart from "../Doughnut";
import HR from "../HR";
import { List, ListItem } from "../List";
import API from "../../utils/API";
let totalGroceries = 0;
let back = []
let percentage = []

defaults.global.legend.position = "bottom";

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function Reports({ budgets, expensesTotal }) {
const [budgetsbyType, setbudgetsbyType] = useState({});
  const [budgetsGroceries, setGroceries] = useState(0);
  const [budgetsUtilities, setUtilities] = useState(0);
  const [budgetsSubscription, setSubscription] = useState(0);
  const [budgetsTotal, setTotal] = useState(0);

  // Load all books and store them with setBooks
  useEffect(() => {
    console.log("useEffect");
    fetch("api/users/user", {
      credentials: "include",
    })
      .then((res) => {
        console.log(`response to authenticate ${res}`);
        console.log(res, "yesyes");
        return res.json(res);
      })
      .then((data) => {
        console.log(data, "checkdata");
        getValuesType(data);
      })
      .catch((err) => {
        console.log("Error fetching authorized user.");
      });
  }, []);

  function getValuesType(data) {
    let userName = {
      user: data.username,
    };
    console.log(userName, "username");
    API.getExpensesbyType("Groceries", userName)
      .then((res) => {
        console.log("nada");
        if (res) {
            setbudgetsbyType(res.data)
          console.log(res.data, "checking  groceries");
          res.data.map((type) => {
            console.log(type._id);
            if (type._id === "groceries") {
                totalGroceries += type.totalType;
                console.log(totalGroceries)
                setGroceries(type.totalType);
                setTotal(setTotal + type.totalType)
           
            }
            if (type._id === "utilities") {
                totalGroceries += type.totalType;
                console.log(totalGroceries)
                setUtilities(type.totalType)
                setTotal(setTotal + type.totalType)
            };
            if (type._id === "subscription") {
                totalGroceries += type.totalType;
                console.log(totalGroceries)
                setSubscription(type.totalType);
                setTotal(setTotal + type.totalType)
            }
            console.log(type.totalType);
          });
    
        } else {
          console.log("No Groceries");
        }
      })
      .catch((err) => console.log(err));
  }

  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  return (
    <div className="container">
      <Row>
        <Col size="md-12">
          <h1 className="text-center">Reports</h1>
        </Col>

        <Col size="md-12">
          <h3 className="text-right ">Monthly Breakdown</h3>
          <HR />
        </Col>
        <Col size="md-12">
          <h3 className="text-right ">Charts</h3>
          <HR />
        </Col>

        {/* Styled hr line */}

        <Col size="md-12">
          <Bar
            data={{
              labels: ["Groceries", "Utilities", "Subscription", "Total"],
              datasets: [
                {
                  label: "Expenses",
                  data: [budgetsGroceries, budgetsUtilities, budgetsSubscription, expensesTotal],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                  ],
                },
              ],
            }}
            height={300}
            width={250}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </Col>
        <Row>
        {budgetsbyType.length ? (
              <>
                {budgetsbyType.map(typeGraph => {
                percentage = Math.round((typeGraph.totalType / expensesTotal) * 100)
                if (typeGraph._id === "groceries") back = ["rgba(255, 99, 132, 0.2)"]    
                if (typeGraph._id === "utilities") back = ["rgba(54, 162, 235, 0.2)"] 
                if (typeGraph._id === "subscription") back =  ["rgba(255, 206, 86, 0.2)"]
                  return (
                    <DoughnutChart key={typeGraph._id} totalGroceries = {[totalGroceries]} labels1={[typeGraph._id]} data1={[typeGraph.totalType]} background1={back} border1={back}/>
                  );
                })}
                </>
            ) : (
              <h3>No Results to Display</h3>
            )}
      
      </Row> 
        <Col size="md-12">
          <h3 className="text-right ">Most Recent Expenses</h3>
          <HR />
        </Col>
       
        <Col size="md-12">
          {/* Table need to be a little bit more up */}
          {budgets.map((budget) => {
            return (
              <ListItem key={budget._id}>
                <a href={"/budgets/" + budget._id}>
                  <strong>
                    title : {budget.title} type: {budget.type} cost:{" "}
                    {budget.cost} expires: {formatDate(budget.expires)}
                  </strong>
                </a>
              </ListItem>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default Reports;
