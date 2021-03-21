
import EditGroceryModal from "../EditGroceryModal"
import { List, ListItem } from "../List";
import SearchHeader from "../SearchHeader";
import DeleteBtn from "../DeleteBtn";
import DataBody from "../DataBody";
import "./style.css";
import Moment from 'react-moment'
let deleteUser = {
    user: ""
}
let total

const GroceryTable = ({filterBudget, headings, deleteBudget}) => {
    total = 0;
console.log(filterBudget, "this is the right none")
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
		// <div className="container text-center">
		
		// 		        {budgets.length ? (
        //        <List>
        //         {budgets.map(budget => {
		// 			let hour = ""
		// 			let rest = Date.now() - formatDate(budget.expires)
		// 			console.log(rest, "time")
        //         if (rest == 0) {
		// 			hour = "today"
		// 		}
		// 		else if (hour < 0) {
		// 			hour = "expired"
		// 		}
		// 		else if (hour < 4) {
		// 			hour = "almost"
		// 		}
		// 		else {
		// 			hour = ""
		// 		}
        //           return (

        //             <ListItem key={budget._id} className="bg-danger">

        //               <a href={"/budgets/" + budget._id}>
        //                 <strong >
        //                 Type : {budget.id} cost: {budget.totalExpenses}
        //                 </strong>
        //               </a>
                      
        //             </ListItem>
        //           );
        //         })}
        //       </List>
        //     ) : (
        //       <h3>No Results to Display</h3>
        //     )}

		// </div>

<div className="datatable">
            <table id="table" className="table table-striped table-hover">
            <thead className="bg-primary text-white border border-dark">
                <tr>
                    {headings.map(({name, width}) => {
                        return (
                            <th 
                            className="col" 
                            key={name} 
                            style={{width}}
                        
                            >
                            {name}
                            <span className="pointer"></span>
                            </th>
                        );
                    })}
                </tr>
                </thead>
                <tbody>
        {filterBudget[0] !== undefined && filterBudget[0].user !== undefined ? (
          filterBudget.map((user) => {
			  deleteUser.user = filterBudget.user
              total = total + user.expenses.cost
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
        <tr>
                  <td data-th="Title" className="align-middle font-weight-bold">
                    Total:
                  </td>
                  <td data-th="Title" className="align-middle"></td>
                  <td data-th="Title" className="align-middle"></td>
                  <td data-th="Total" className="align-middle font-weight-bold">
                    ${total}.00
                  </td>
                  <td data-th="Title" className="align-middle "></td>
        </tr>
      </tbody>
                    {/* <DataBody users={users} deleteBudget={deleteBudget}/> */}
            </table>
        </div>

	);
}

export default GroceryTable;