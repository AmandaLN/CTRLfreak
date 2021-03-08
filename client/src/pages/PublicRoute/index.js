/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
import React from "react"
import API from "../../utils/API"
import Search from "../../components/Search"
import SearchHeader from "../../components/SearchHeader"
import GroceryTable from "../../components/GroceryTable"
import ExpenseTable from "../../components/ExpenseTable"


function PublicRoute() {
	const [expenses, setExpenses] = React.useState([])
	const [search, setSearch] = React.useState("")

	React.useEffect(() => {
		API.getBudgets()
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}, [])


	

	return (
		<div className="container">
			<SearchHeader />
			<Search />
			<GroceryTable/>
		</div>
	)
}


export default PublicRoute