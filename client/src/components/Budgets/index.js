import React, { useEffect, useState, useContext } from "react";
import Jumbotron from "../Jumbotron";
import GroceryTable from "../GroceryTable";
import { UserContext } from "../../utils/UserContext";
import DeleteBtn from "../DeleteBtn";
import Reports from "../Reports";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
let activeUser
let deleteUser = {
    user: ""
}
let expensesTotal = 0;

 function Budgets() {
  // Setting our component's initial state
  // const [user, dispatch] = useContext(UserContext);
  const [budgets, setBudgets] = useState([])
  const [formObject, setFormObject] = useState({
    title: "",
    type: "",
    quantity: "",
    expires: "",
    cost: "",
  })
  
  // Load all books and store them with setBooks
   useEffect(() => {
 
    fetch('api/users/user', {
			credentials: 'include'
			})
			.then((res) => {
				console.log(`response to authenticate ${res}`);
				console.log(res, "yesyes")
				return res.json(res)
			})
			.then(  data => {
        activeUser = data.username
        deleteUser.user = data.username
        console.log(data, "protected route index");
	      console.log(activeUser, "testing budget username")
        loadBudget(data.username)
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

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Budget</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Type of Expense (required)"
                value={formObject.title}
              />
              <Input
                onChange={handleInputChange}
                name="type"
                placeholder="Type of budget(required)"
                value={formObject.type}
              />
              <Input
                onChange={handleInputChange}
                name="quantity"
                placeholder="Quantity (Optional)"
                value={formObject.quantity}
              />
                  <Input
                onChange={handleInputChange}
                name="expires"
                placeholder="Expire Date or Due Date (required)"
                value={formObject.expires}
              />
                  <Input
                onChange={handleInputChange}
                name="cost"
                placeholder="Cost (Optional)"
                value={formObject.cost}
              />
              <FormBtn
                disabled={!(formObject.type && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Item
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Budget</h1>
            </Jumbotron>
            {budgets.length ? (
              <List>
                {budgets.map(budget => {
                  return (
                    <ListItem key={budget._id}>
                      <a href={"/budgets/" + budget._id}>
                        <strong>
                        title : {budget.title} type: {budget.type} cost: {budget.cost} expires: {formatDate(budget.expires)}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => deleteBudget(budget._id)} />
                    </ListItem>
                  );
                })}
                Total Cost: {expensesTotal}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            
          </Col>
        </Row>
        <Reports expensesTotal = {expensesTotal} budgets={budgets}/>
        <GroceryTable budgets={budgets}/>
      </Container>
    );
  }


export default Budgets;