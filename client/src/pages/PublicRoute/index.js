/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
import React, { useEffect, useState } from "react";
import API from "../../utils/API"
// import Search from "../../components/Search"
import SearchHeader from "../../components/SearchHeader"
import DataTable from "../../components/DataTable"
import DataBody from "../../components/DataBody"


function PublicRoute() {

	const [expenses, setExpenses] = useState({})
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
		API.getBudgets()
			.then(res => {
				console.log(res.data, "testingtesting")
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
			<div className="container">
			<input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => console.log(e)}
                />
			</div>

			{/* <GroceryTable budgets={expenses}/> */}
		</div>
		</>
	)
}


export default PublicRoute