import EditExpenseModal from "../EditExpenseModal";
import "./style.css";
import Moment from 'react-moment'

const ExpenseTable = () => {
	return (
		<div className="container text-center">
			<table className="table table-hover">
				<thead className="bg-secondary">
					<tr className="text-light">
						<th scope="col"></th>
						<th scope="col">Expense</th>
						<th scope="col">Price</th>
						<th scope="col">Billing Cycle</th>
						<th scope="col">Due Date</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row" className="text-success"><i className="far fa-edit"  data-toggle="modal" data-target="#editModalCenter"/><EditExpenseModal/></th>
						<td>Netflix</td>
						<td>$13.99</td>
						<td>Monthly</td>
						<td>04/24/2021</td>
						<td className="text-danger"><i className="far fa-trash-alt" /></td>
					</tr>
					<tr>
						<th scope="row" className="text-success"><i className="far fa-edit" /></th>
						<td>Hulu</td>
						<td>$6.99</td>
						<td>Monthly</td>
						<td>04/27/2021</td>
						<td className="text-danger"><i className="far fa-trash-alt" /></td>
					</tr>
					<tr>
						<th scope="row" className="text-success"><i className="far fa-edit" /></th>
						<td>Mortage</td>
						<td>$1236.48</td>
						<td>Monthly</td>
						<td>04/01/2021</td>
						<td className="text-danger"><i className="far fa-trash-alt" /></td>
					</tr>
					<tr>
						<th scope="row" className="text-success"><i className="far fa-edit" /></th>
						<td>Insurance Premium</td>
						<td>$125.79</td>
						<td>Quarterly</td>
						<td>04/30/2021</td>
						<td className="text-danger"><i className="far fa-trash-alt" /></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default ExpenseTable;