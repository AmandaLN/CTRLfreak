/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
import React, { useEffect, useState } from "react";
import API from "../../utils/API";
// import UserContext from "../../utils/UserContext";
// import Search from "../../components/Search"
import { List, ListItem } from "../../components/List";

import SearchHeader from "../../components/SearchHeader";
import GroceryTable from "../../components/GroceryTable";
import ExpenseTable from "../../components/ExpenseTable";
let activeUser;
let budgetInventory = [];

function Inventory() {
  const [budget, setExpenses] = useState([{}]);
  // const { user } = useContext(UserContext);

  useEffect(() => {
    console.log("inventory load");
    fetch("api/users/user", {
      credentials: "include",
    })
      .then((res) => {
        console.log(res, " inventory");
        return res.json(res);
      })
      .then((data) => {
        activeUser = data.username;
        console.log(data, "protected route index");
        console.log(activeUser, "testing budget username");
        getTypeInventory(data.username);
      })
      .catch((err) => {
        console.log("Error fetching authorized user.");
      });
  }, []);
  // filters the table while you are typing in search
  async function getTypeInventory(user1) {
    let type = "groceries";
    let username = {
      user: "rafa",
    };
    await API.getInventory(type, username)
      .then((res) => {
        console.log(res.data, "inventory inventory");
		console.log(res.data[0].expenses.title, "checking expenses title")
		budgetInventory = res.data
        setExpenses(res.data);
	
      })
      .catch((err) => console.log(err));
  }

  function handleSearchChange(event) {
    const filter = event.target.value;
    const filteredList = this.state.result.filter((item) => {
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });

    this.setState({ filteredTable: filteredList });
  }

  function handleSort() {
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend",
      });
    } else {
      this.setState({
        order: "descend",
      });
    }
    function compareFnc(a, b) {
      if (this.state.order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    }
    const sortedTable = this.state.filteredTable.sort(compareFnc);
    this.setState({ filteredTable: sortedTable });
  }

  return (
    <>
      <div className="container">
        <SearchHeader />
        {budgetInventory.length ? (
          <List>
            {budgetInventory.map((one) => {
              return (
                <>
                  <ListItem key={one.expenses.title}>
                    <a href={"/budgets/" + one.expenses._id}>
                      <strong>
                        title : {one.expenses.title} cost: {one.expenses.cost}
                      </strong>
                    </a>
                  </ListItem>
                </>
              );
            })}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}

        {/* <GroceryTable budgets={expenses}/> */}
      </div>
    </>
  );
}

export default Inventory;
