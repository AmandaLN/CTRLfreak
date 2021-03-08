
import EditGroceryModal from "../EditGroceryModal"
import { List, ListItem } from "../List";
import SearchHeader from "../SearchHeader";
import "./style.css";
import Moment from 'react-moment'

const GroceryTable = ({budgets}) => {

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
					let hour = ""
					let rest = Date.now() - formatDate(budget.expires)
					console.log(rest, "time")
                if (rest == 0) {
					hour = "today"
				}
				else if (hour < 0) {
					hour = "expired"
				}
				else if (hour < 4) {
					hour = "almost"
				}
				else {
					hour = ""
				}
                  return (
                    <ListItem key={budget._id} className={hour}>
                      <a href={"/budgets/" + budget._id}>
                        <strong>
                        title : {budget.title} type: {budget.type} cost: {budget.cost} expires: {budget.expires}
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