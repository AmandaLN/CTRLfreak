/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
import React, { useEffect, useState } from "react";
import API from "../../utils/API"
// import Search from "../../components/Search"
import { List, ListItem } from "../../components/List";
import SearchHeader from "../../components/SearchHeader"
import GroceryTable from "../../components/GroceryTable"
import ExpenseTable from "../../components/ExpenseTable"


function Inventory() {

	const [budget, setExpenses] = useState([{}])
	const [search, setSearch] = useState({
		result: [{}],
		filteredTable: [{}],
		order: "descend"
	})

	const headings = [
		{ name: "Expense" },
		{ name: "Item"},
      ];




	useEffect(() => {
        let type = "groceries"
		API.getInventory(type)
			.then(res => {
				console.log(res.data, "inventory inventory")
				setExpenses(res.data)})
			.catch(err => console.log(err))
	}, [])


	// filters the table while you are typing in search

	function handleSearchChange (event) {
		const filter = event.target.value;
		const filteredList = this.state.result.filter((item) => {
			let values = Object.values(item).join("").toLowerCase();
			return values.indexOf(filter.toLowerCase()) !== -1;
		});


		this.setState({ filteredTable: filteredList });
	};
	
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
		function compareFnc (a, b) {
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
		};
		const sortedTable = this.state.filteredTable.sort(compareFnc);
		this.setState({ filteredTable: sortedTable });
	};

	return (
		<>
		<div className="container">
			<SearchHeader />
			{budget.length ? (
              <List>
                {budget.map(one => {
                  return (
                    <ListItem key={one._id}>
                      <a href={"/budgets/" + one._id}>
                        <strong>
                        title : {one.user}
                        </strong>
                      </a>
                  
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}

			{/* <GroceryTable budgets={expenses}/> */}
		</div>
		</>
	)
}


export default Inventory