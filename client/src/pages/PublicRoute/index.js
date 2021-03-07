/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
import Search from "../../components/Search"
import SearchHeader from "../../components/SearchHeader"
import GroceryTable from "../../components/GroceryTable"
import ExpenseTable from "../../components/ExpenseTable"


function PublicRoute() {

	return (
		<div className="container">
			<SearchHeader/>
			<Search/>
			<ExpenseTable/>
		</div>
	)
}


export default PublicRoute