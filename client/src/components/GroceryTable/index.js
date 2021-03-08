import EditGroceryModal from "../EditGroceryModal";
import "./style.css";
import Moment from 'react-moment'

const GroceryTable = () => {
	return (
		<div className="container text-center">
			<table className="table table-hover">
				<thead className="bg-secondary">
					<tr className="text-light">
						<th scope="col"></th>
						<th scope="col">Item</th>
						<th scope="col">Quantity</th>
						<th scope="col">Cost</th>
						<th scope="col">Expires</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row" className="text-success"><i className="far fa-edit" data-toggle="modal" data-target="#editGroceryModalCenter"/><EditGroceryModal/></th>
						<td>Brown Egg</td>
						<td>12</td>
						<td>$3.99</td>
						<td>10/10/2021</td>
						<td className="text-danger"><i className="far fa-trash-alt" /></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default GroceryTable;