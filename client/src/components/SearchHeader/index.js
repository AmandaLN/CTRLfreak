import AddExpenseModal from "../AddExpenseModal"
import AddGroceryModal from "../AddGroceryModal"
import { Col, Row, Container } from "../Grid";

const SearchHeader = () => {
	return (
		
		<div className="container text-center">
			<Row>
				<Col size="md-4">
					<h5 className="text-success font-weight-bold">Inventory</h5>
				</Col>
				<Col size="md-4">
					<h5 className="">Manage</h5>
				</Col>
				<Col size="md-4">
					<h5 className="text-success"><AddGroceryModal /></h5>
				</Col>
			</Row>
		</div>
	);
}

export default SearchHeader;