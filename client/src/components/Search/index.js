

import React from "react";
import ExpenseTable from "../ExpenseTable";
import GroceryTable from "../GroceryTable";
import API from "../../utils/API";

class Search extends React.Component {
	state = {
		result: [{}],
		filteredTable: [{}],
		order: "descend"
	};
	headings = [
        
		{ name: "Expense" },
		{ name: "Item"},
      ];
	//   order for the table
	handleSort = () => {
		if (this.state.order === "descend") {
			this.setState({
				order: "ascend",
			});
		} else {
			this.setState({
				order: "descend",
			});
		}
		const compareFnc = (a, b) => {
			if (this.state.order === "ascend") {
				if (a[heading] === undefined) {
				  return 1;
				} else if (b[heading] === undefined) {
				  return -1;
				} else if (heading === "name") {
				  return a[heading].first.localeCompare(b[heading].first);
				} else {
				  return b[heading] - a[heading];
				}
			  } else {
				if (a[heading] === undefined) {
				  return 1;
				} else if (b[heading] === undefined) {
				  return -1;
				} else if (heading === "name") {
				  return b[heading].first.localeCompare(a[heading].first);
				} else {
				  return b[heading] - a[heading];
				}
			  }
		};
		const sortedTable = this.state.filteredTable.sort(compareFnc);
		this.setState({ filteredTable: sortedTable });
	};
	// filters the table while you are typing in search
	handleSearchChange = (event) => {
		const filter = event.target.value;
		const filteredList = this.state.result.filter((item) => {
			let values = Object.values(item).join("").toLowerCase();
			return values.indexOf(filter.toLowerCase()) !== -1;
		});


		this.setState({ filteredTable: filteredList });
	};


	componentDidMount() {
		API.getBudgets().then((results) => {
		  this.setState({
			users: results.data.results,
			filteredUsers: results.data.results,
		  });
		});
	  }


	render() {
		return (
			<>
			{/* <Search handleSearchChange={this.handleSearchChange} /> */}
			<div className="container">
				<input className="form-control mr-sm-2" type="search" placeholder="Search Inventory" aria-label="Search" />
			</div>
			<thead>
                <tr>
                    {this.headings.map(({name}) => {
                        return (
                            <th 
                            className="col" 
                            key={name} 
                            
                            onClick = {() => {
                                this.handleSort(name.toLowerCase());
                            }}
                            >
                            {name}
                            <span className="pointer"></span>
                            </th>
                        );
                    })}
                </tr>
                </thead>
				<tbody>
					{/* <GroceryTable/>
					<ExpenseTable/> */}
				</tbody>
				</>
		);

		
// 	}

// }
// 	export default Search;
