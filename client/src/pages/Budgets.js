import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Budgets() {
  // Setting our component's initial state
  const [budgets, setBudgets] = useState([])
  const [formObject, setFormObject] = useState({
    title: "",
    type: "",
    quantity: "",
    user: "",
    expires: "",
    cost: "",
    date: Date.now(),
  })

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBudget()
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
  function loadBudget() {
    API.getBudgets()
      .then(res => {
        setBudgets(res.data)
        console.log(res)
    }
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBudget(id) {
    API.deleteBudget(id)
      .then(res => loadBudget())
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
      API.saveBudget({
        title: formObject.title,
        type: formObject.type,
        quantity: formObject.quantity,
        user: formObject.user,
        expires: formObject.expires,
        cost : formObject.cost,
      })
        .then(() => setFormObject({
        title: "",
        type: "",
        quantity: "",
        user: "",
        expires: "",
        cost : "",
        }))
        .then(() => loadBudget())
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
                placeholder="Title (required)"
                value={formObject.title}
              />
              <Input
                onChange={handleInputChange}
                name="type"
                placeholder="type (required)"
                value={formObject.type}
              />
              <Input
                onChange={handleInputChange}
                name="quantity"
                placeholder="quantity (Optional)"
                value={formObject.quantity}
              />
                  <Input
                onChange={handleInputChange}
                name="expires"
                placeholder="expires (Optional)"
                value={formObject.expires}
              />
                  <Input
                onChange={handleInputChange}
                name="cost"
                placeholder="cost (Optional)"
                value={formObject.cost}
              />
              <FormBtn
                disabled={!(formObject.type && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Book
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
                          Title: {budget.title} || Quantity: {budget.quantity} || Expires: {budget.expires} || Buy by: {formatDate(budget.date)} Cost: {budget.cost} || Type {budget.type}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => deleteBudget(budget._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Budgets;