/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
import Search from "../../components/Search"
import SearchHeader from "../../components/SearchHeader"

function PublicRoute() {

	return (
		<div className="container">
			<SearchHeader/>
			<Search/>
		</div>
	)
}


export default PublicRoute