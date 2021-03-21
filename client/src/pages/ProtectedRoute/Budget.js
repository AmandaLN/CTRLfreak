import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from "../../utils/UserContext";
import Nav from "../../components/Nav"
import Budgets from "../../components/Budgets"
import Jumbotron from "../../components/Jumbotron";
import DataTable from "../../components/DataTable";
import DeleteBtn from "../../components/DeleteBtn";
import Reports from "../../components/Reports";
import { defaults, Bar, Pie } from "react-chartjs-2";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import HR from "../../components/HR";
let activeUser = ""
let deleteUser = {
    user: ""
}
let expensesTotal = 0;
let totalExpenses = 0;
let back = {};
let percentage = [];
let dataBar = {};
let valueGroceries = 0;
let valueUtilities = 0;
let valueSubscriptions = 0;
let Pie1,
  Pie2,
  Pie3 = {};
/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function Budget() {
	const [user, dispatch] = useContext(UserContext)
	const [value, setValue] = useState('initial');
	const [budgetsbyType, setbudgetsbyType] = useState({});
	const [budgetsGroceries, setGroceries] = useState(0);
	const [budgetsUtilities, setUtilities] = useState(0);
	const [budgetsSubscription, setSubscription] = useState(0);
	// const [user, dispatch] = useContext(UserContext);
	const [budgetsTotal, setTotal] = useState(0);
	const [budgets, setBudgets] = useState({

	})
	const [formObject, setFormObject] = useState({
	  title: "",
	  type: "",
	  quantity: "",
	  expires: "",
	  cost: "",
	})
	const buttonStyle = {
		marginRight: 10,
	  };
	  const headings = [
		{ name: "Title", width: "10%" },
		{ name: "Quantity", width: "10%" },
		{ name: "Expires/DueDate", width: "20%" },
		{ name: "Cost", width: "20%" },
		{ name: "Type", width: "10%" },
	  ];

	useEffect(() => {
		if (!user) {
			return;
		  }

		fetch('api/users/user', {
			credentials: 'include'
		})
			.then((res) => {
				console.log(`response to authenticate ${res}`);
				return res.json(res)
			})
			.then(data => {
				console.log(data, "protected route index budget page");
				activeUser = data.username
				console.log(data, "dlksdksd")
				dispatch({
					type: "GET_USER",
					payload: data
				})
				loadBudget(data.username)
				getValuesType(data.username);
			})
			.catch((err) => {
				console.log('Error fetching authorized user.');
			});
	}, []);


	function formatDate(date){
		const dateArray = date.split("-");
		const year = dateArray[0];
		const month = dateArray[1];
		const dayArray = dateArray[2].split("T");
		const day = dayArray[0];
		const formattedDate = [month, day, year].join("-");
		return formattedDate
	}
	
	  // Loads all books and sets them to books
	 function loadBudget(userName) {
		console.log(userName, "budget user")
		API.getId(userName)
		  .then(res => {
			console.log(res.data, "checking")
			if (res) {
			  expensesTotal = res.data[0].totalExpenses
			  console.log(expensesTotal, "totalexpenses")
			  setBudgets(res.data[0].expenses)
			 
			  } else {
				  console.log("no workout")
			  }
		})
		  .catch(err => console.log(err));
	  };
	  // Deletes a book from the database with a given id, then reloads books from the db
	  function deleteBudget(id) {
		console.log(id, deleteUser, "papapa")
		API.deleteBudget(id, deleteUser)
		  .then(res => loadBudget(activeUser))
		  .catch(err => console.log(err));
	  }
	  // Handles updating component state when the user types into the input field
	  function handleInputChange(event) {
		const { name, value } = event.target;
		setFormObject({...formObject, [name]: value})
	  };
	  // When the form is submitted, use the API.saveBook method to save the book data
	  // Then reload books from the database
	  function handleFormSubmit(event) {
		event.preventDefault();
	 
		if (formObject.title && formObject.type) {
		  API.updateBudget(activeUser, {
			title: formObject.title.toLowerCase(),
			type: formObject.type.toLowerCase(),
			quantity: formObject.quantity,
			expires: formObject.expires,
			cost : formObject.cost,
		  })
			.then(() => setFormObject({
			title: "",
			type: "",
			quantity: "",
			expires: "",
			cost : "",
			}))
			.then(() => loadBudget(activeUser))
			.catch(err => console.log(err));
		}
	  };

	  async function getValuesType(data) {
		let userName = {
		  user: data,
		};
		valueGroceries = 0;
		valueUtilities = 0;
		valueSubscriptions = 0;
		totalExpenses = 0;
		console.log(userName, "username");
		await API.getExpensesbyType(userName)
		  .then(async (res) => {
			console.log("nada");
			if (res) {
			  setbudgetsbyType(res.data);
			  console.log(res.data, "checking  groceries");
	
			  await res.data.map(async (type) => {
				console.log(type._id);
	
				if (type._id === "groceries") {
				  totalExpenses += type.totalType;
				  valueGroceries += type.totalType;
	
				  console.log(totalExpenses);
				  setGroceries(type.totalType);
				  setTotal(budgetsTotal + type.totalType);
				}
				if (type._id === "utilities") {
				  totalExpenses += type.totalType;
				  valueUtilities += type.totalType;
	
				  console.log(totalExpenses);
				  setUtilities(type.totalType);
				  setTotal(budgetsTotal + type.totalType);
				}
				if (type._id === "subscriptions") {
				  totalExpenses += type.totalType;
				  valueSubscriptions += type.totalType;
	
				  console.log(totalExpenses);
				  setSubscription(type.totalType);
				  setTotal(budgetsTotal + type.totalType);
				}
				console.log(type.totalType);
			  });
			} else {
			  console.log("No Groceries");
			}
		  })
		  .catch((err) => console.log(err));
		console.log(
		  valueGroceries,
		  valueUtilities,
		  valueSubscriptions,
		  totalExpenses,
		  "values values values"
		);
		dataBar = {
		  labels: ["Groceries", "Utilities", "Subscriptions", "Total"],
		  datasets: [
			{
			  label: ["Expenses"],
			  data: [
				valueGroceries,
				valueUtilities,
				valueSubscriptions,
				totalExpenses,
			  ],
			  backgroundColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(255, 159, 64, 1)",
			  ],
			  borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(255, 159, 64, 1)",
			  ],
			  borderWidth: 1,
			},
		  ],
		};
	
		Pie1 = {
		  labels: ["Groceries", "Total"],
		  datasets: [
			{
			  label: ["Groceries", "Total"],
			  data: [valueGroceries, totalExpenses],
			  backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(255, 159, 64, 1)"],
			  borderColor: ["rgba(255, 99, 132, 1)", "rgba(255, 159, 64, 1)"],
			  //   'rgba(255, 99, 132, 1)',
			  //   'rgba(54, 162, 235, 1)',
			  //   'rgba(255, 206, 86, 1)',
			  //   'rgba(75, 192, 192, 1)',
			  //   'rgba(153, 102, 255, 1)',
			  //   'rgba(255, 159, 64, 1)',
			  borderWidth: 1,
			},
		  ],
		  height: 150,
		  witdh: 150,
		};
	
		Pie2 = {
		  labels: ["Utilities", "Total"],
		  datasets: [
			{
			  label: ["Utilities", "Total"],
			  data: [valueUtilities, totalExpenses],
			  backgroundColor: ["rgba(54, 162, 235, 1)", "rgba(255, 159, 64, 1)"],
			  borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 159, 64, 1)"],
			  //   'rgba(255, 99, 132, 1)',
			  //   'rgba(54, 162, 235, 1)',
			  //   'rgba(255, 206, 86, 1)',
			  //   'rgba(75, 192, 192, 1)',
			  //   'rgba(153, 102, 255, 1)',
			  //   'rgba(255, 159, 64, 1)',
			  borderWidth: 1,
			},
		  ],
		  height: 150,
		  witdh: 150,
		};
	
		Pie3 = {
		  labels: ["Subscriptions", "Total"],
		  datasets: [
			{
			  label: ["Subscriptions", "Total"],
			  data: [valueSubscriptions, totalExpenses],
			  backgroundColor: ["rgba(255, 206, 86, 1)", "rgba(255, 159, 64, 1)"],
			  borderColor: ["rgba(255, 206, 86, 1)", "rgba(255, 159, 64, 1)"],
			  //   'rgba(255, 99, 132, 1)',
			  //   'rgba(54, 162, 235, 1)',
			  //   'rgba(255, 206, 86, 1)',
			  //   'rgba(75, 192, 192, 1)',
			  //   'rgba(153, 102, 255, 1)',
			  //   'rgba(255, 159, 64, 1)',
			  borderWidth: 1,
			},
		  ],
		  height: 150,
		  witdh: 150,
		};
	  }


	return (
		<>
			<div className="container mt-5">
      <Row>
        <Col size="md-12">
          <h1
            className="text-center text-primary font-weight-bold"
            style={{ fontSize: 72 }}
          >
            Report
          </h1>
        </Col>
        <HR />
        <HR />
        <Col size="md-12">
          <h3 className="text-center font-italic mt-5">Monthly Breakdown</h3>
        </Col>
        <Bar key={"barChart1"} data={dataBar} />
      </Row>
      <Row>
        {budgetsbyType.length ? (
          <>
            {budgetsbyType.map((typeGraph) => {
              percentage = Math.round(
                (typeGraph.totalType / expensesTotal) * 100
              );
              if (typeGraph._id === "groceries") back = Pie1;
              if (typeGraph._id === "utilities") back = Pie2;
              if (typeGraph._id === "subscriptions") back = Pie3;
              return (
                <>
                  <Col size="md-4">
                    <div className="header">
                      <h3 className="title">{typeGraph._id}</h3>
                      {/* <div className="links">
                      <Link key={typeGraph._id}style={buttonStyle} className=" btn btn-light font-weight-bold" to={{pathname: "/inventory/" + typeGraph._id, type: typeGraph._id, user: user.username}}>Subscriptions</Link>
                        <a
                          className="btn btn-gh"
                          href={"/inventory/" + typeGraph._id} 
                        >
                         {typeGraph._id} Page
                        </a>
                      </div> */}
                    </div>
                    <Pie key={typeGraph._id} data={back} />
                  </Col>
                </>
              );
            })}
          </>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Row>
      <Row>
        {/* <Col size="md-12">
          <h3 className="text-center font-italic">Most Recent Expenses</h3>
        </Col> */}
        <Col size="md-12">
          <div className="datatable">
            <h3 className="text-center font-italic">Recent Expenses</h3>
            <table
              id="table"
              className="table table-striped table-hover text-center border"
            >
              <thead className="bg-primary text-white text-center">
                <tr>
                  {headings.map(({ name, width }) => {
                    return (
                      <th className="col" key={name} style={{ width }}>
                        {name}
                        <span className="pointer"></span>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {budgets[0] !== undefined ? (
                  budgets.map((user) => {
                    function dateDif(date1, date2) {
                      return Math.round(
                        (date2 - date1) / (1000 * 60 * 60 * 24)
                      );
                    }
                    var daysDiff = dateDif(
                      new Date(Date.now()),
                      new Date(formatDate(user.expires))
                    );
                    let color = "";
                    if (daysDiff <= 3)
                      color = "bg-warning font-weight-bold text-black";
                    if (daysDiff <= 0)
                      color = "bg-danger font-weight-bold text-white";
                    return (
                      <tr key={user.title} className={color}>
                        <td data-th="Title" className="name-cell align-middle">
                          {user.title}
                        </td>
                        <td data-th="Quantity" className="align-middle">
                          {user.quantity}
                        </td>
                        <td data-th="Expires/DueDate" className="align-middle">
                          {formatDate(user.expires)}
                        </td>
                        <td data-th="Cost" className="align-middle">
                          ${user.cost}.00
                        </td>
                        <td data-th="Type" className="align-middle">
                          {user.type}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <></>
                )}
                <tr>
                  <td data-th="Title" className="align-middle font-weight-bold">
                    Total:
                  </td>
                  <td data-th="Title" className="align-middle"></td>
                  <td data-th="Title" className="align-middle"></td>
                  <td data-th="Total" className="align-middle font-weight-bold">
                    ${totalExpenses}.00
                  </td>
                  <td data-th="Title" className="align-middle "></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <br />
    </div>
		</>
	)

}

export default Budget