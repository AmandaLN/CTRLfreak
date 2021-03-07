import AddExpenseModal from "../AddExpenseModal"
import AddGroceryModal from "../AddGroceryModal"


const SearchHeader = () => {
	return (
		<div className="container text-center">
			<div className="row">
				<div className="col md-4">
					<h5 className="text-success font-weight-bold">Inventory</h5>
				</div>
				<div className="col md-4">
					<h5 className="">Manage</h5>
				</div>
				<div className="col md-4">
					<h5 className="text-success"><AddExpenseModal /></h5>
				</div>
			</div>
		</div>
	);
}

export default SearchHeader;