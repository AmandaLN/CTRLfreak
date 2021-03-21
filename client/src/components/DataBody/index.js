import EditExpenseModal from "../EditExpenseModal";
import React from "react";
import "./style.css";
import DeleteBtn from "../DeleteBtn";
let deleteUser = {
    user: ""
}
const DataBody = ({users, deleteBudget}) => {

	console.log(users, "users en databody")
	function formatDate(date){
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate
    }

	return (

		<tbody>
        {users[0] !== undefined && users[0].user !== undefined ? (
          users.map((user) => {
			  deleteUser.user = user.user
			function dateDif(date1, date2){
				return Math.round((date2-date1)/(1000*60*60*24));
				}
			  var daysDiff = dateDif(new Date(Date.now()), new Date(formatDate(user.expenses.expires)));
			  let color = "";
			  if (daysDiff <= 3) color = " font-weight-bold text-dark bg-warning"
			  if (daysDiff <= 0) color = "font-weight-bold text-white bg-danger"
            return (
              <tr key={user.expenses.title} className={color}>
                  <td data-th="Title" className="name-cell align-middle">
                  {user.expenses.title}
                </td>
                <td data-th="Quantity" className="align-middle">
                  {user.expenses.quantity}
                </td>
				<td data-th="Expires/DueDate" className="align-middle">
                  {formatDate(user.expenses.expires)}
                </td>
                <td data-th="Cost" className="align-middle">
                    ${user.expenses.cost}.00
                </td>
				<td data-th="Type" className="align-middle">
                    {user.expenses.type} <DeleteBtn onClick={() => deleteBudget(user.expenses._id, deleteUser)} />
                </td>
				
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
		// <div className="container text-center">
		// 	<table className="table table-hover">
		// 		<thead className="bg-secondary">
		// 			<tr className="text-light">
		// 				<th scope="col"></th>
		// 				<th scope="col">Expense</th>
		// 				<th scope="col">Price</th>
		// 				<th scope="col">Billing Cycle</th>
		// 				<th scope="col">Due Date</th>
		// 				<th scope="col"></th>
		// 			</tr>
		// 		</thead>
		// 		<tbody>
		// 			<tr>
		// 				<th scope="row" className="text-success"><i className="far fa-edit"  data-toggle="modal" data-target="#editModalCenter"/><EditExpenseModal/></th>
		// 				<td>Netflix</td>
		// 				<td>$13.99</td>
		// 				<td>Monthly</td>
		// 				<td>04/24/2021</td>
		// 				<td className="text-danger"><i className="far fa-trash-alt" /></td>
		// 			</tr>
		// 			<tr>
		// 				<th scope="row" className="text-success"><i className="far fa-edit" /></th>
		// 				<td>Hulu</td>
		// 				<td>$6.99</td>
		// 				<td>Monthly</td>
		// 				<td>04/27/2021</td>
		// 				<td className="text-danger"><i className="far fa-trash-alt" /></td>
		// 			</tr>
		// 			<tr>
		// 				<th scope="row" className="text-success"><i className="far fa-edit" /></th>
		// 				<td>Mortage</td>
		// 				<td>$1236.48</td>
		// 				<td>Monthly</td>
		// 				<td>04/01/2021</td>
		// 				<td className="text-danger"><i className="far fa-trash-alt" /></td>
		// 			</tr>
		// 			<tr>
		// 				<th scope="row" className="text-success"><i className="far fa-edit" /></th>
		// 				<td>Insurance Premium</td>
		// 				<td>$125.79</td>
		// 				<td>Quarterly</td>
		// 				<td>04/30/2021</td>
		// 				<td className="text-danger"><i className="far fa-trash-alt" /></td>
		// 			</tr>
		// 		</tbody>
		// 	</table>
		// </div>
	);
}

export default DataBody;