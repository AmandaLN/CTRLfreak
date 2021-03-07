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
				<h5 className="text-success"><AddExpenseModal/></h5>
			</div>
			</div>
		</div>
	);
}

export default SearchHeader
// import React from "react"
// import AddModal from "../AddModal"

// export default class SearchHeader extends React.Component {
// 	constructor(props) {
// 	  super(props);
// 	  this.state = {
// 		AddModal: false,
// 	  };
// 	  this._onButtonClick = this._onButtonClick.bind(this);
// 	}

// 	_onButtonClick() {
// 	  this.setState({
// 		AddModal: true,
// 	  });
// 	}

// 	render() {
// 	  return (
// 		<div className="container text-center">
// 			<div className="row">
// 			<div className="col md-4">
// 				<h5 className="text-success font-weight-bold">Inventory</h5>
// 			</div>
// 			<div className="col md-4">
// 				<h5 className="">Manage</h5>
// 			</div>
// 			<div className="col md-4">
// 				<h5 className="text-success"><i className="fas fa-plus-circle" onClick={this._onButtonClick}></i></h5>
// 			</div>
// 			</div>
// 		</div>
// 	  );
// 	}
//   }

// export default class SearchHeader extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			showComponent: false,
// 		};
// 		this._onButtonClick = this._onButtonClick.bind(this);
// 	}

// 	_onButtonClick() {
// 		this.setState({
// 			showComponent: true,
// 		});
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<div className="container text-center">
// 					<div className="row">
// 						<div className="col md-4">
// 							<h5 className="text-success font-weight-bold">Inventory</h5>
// 						</div>
// 						<div className="col md-4">
// 							<h5 className="">Manage</h5>
// 						</div>
// 						<div className="col md-4">
// 							<h5 className="text-success"><i className="fas fa-plus-circle" onClick={this._onButtonClick}></i></h5>
// 						</div>
// 						{this.state.showComponent ?
// 							<AddModal /> :
// 							null
// 						}
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }