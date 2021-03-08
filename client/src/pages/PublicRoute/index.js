/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
import React from "react"
import API from "../../utils/API"
// import Search from "../../components/Search"
import SearchHeader from "../../components/SearchHeader"
import GroceryTable from "../../components/GroceryTable"
import ExpenseTable from "../../components/ExpenseTable"


function PublicRoute() {
	const [expenses, setExpenses] = React.useState([])
	const [search, setSearch] = React.useState({
		result: [{}],
		filteredTable: [{}],
		order: "descend"
	})

	React.useEffect(() => {
		API.getBudgets()
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}, [])

	React.handleSort = () => {
		// console.log("test")
		if (this.state.order === "descend") {
			this.setState({
				order: "ascend",
			});
		} else {
			this.setState({
				order: "descend",
			});
		}
		const compareFnc = (a, b) => {
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
	// filters the table while you are typing in search
	handleSearchChange = (event) => {
		const filter = event.target.value;
		const filteredList = this.state.result.filter((item) => {
			let values = Object.values(item).join("").toLowerCase();
			return values.indexOf(filter.toLowerCase()) !== -1;
		});

		this.setState({ filteredTable: filteredList });
	};


	return (
		<div className="container">
			<SearchHeader />
			<div className="container">
			<input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => this.handleSearchChange(e)}
                />
			</div>
			<GroceryTable/>
			<ExpenseTable/>
		</div>
	)
}


export default PublicRoute