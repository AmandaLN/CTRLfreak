
import EditGroceryModal from "../EditGroceryModal"
import { List, ListItem } from "../List";
import SearchHeader from "../SearchHeader";
import "./style.css";
import Moment from 'react-moment'

const GroceryTable = ({budgets}) => {
console.log(budgets, "this is the right none")
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
		<div className="container text-center">
		
				        {budgets.length ? (
               <List>
                {budgets.map(budget => {
                ``
                  return (
                    <ListItem key={budget._id} className="bg-danger">
                      <a href={"/budgets/" + budget._id}>
                        <strong >
                        Type : {budget.id} cost: {budget.totalExpenses}
                        </strong>
                      </a>
                      
                    </ListItem>
                  );
                })}
   
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}

		</div>
	);
}

export default GroceryTable;