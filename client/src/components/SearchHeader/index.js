import AddExpenseModal from "../AddExpenseModal"
import AddGroceryModal from "../AddGroceryModal"
import { Col, Row, Container } from "../Grid";
import React from "react";


const SearchHeader = ({handleSearchChange, typeLocation, user, getInventory}) => {
	return (
		
		<div className="container text-center mt-5">
			<Row>
				<Col size="md-4">
					<h5 className="text-primary font-weight-bold">Inventory</h5>
				</Col>
				<Col size="md-4">
					<h5 className="">Manage</h5>
				</Col>
				<Col size="md-4">
					<h5 className="text-primary"><AddGroceryModal typeLocation={typeLocation} user={user} getInventory={getInventory}/></h5>
				</Col>
			</Row>
			<Row>
			<div className="container">
			<input
                    className="form-control mr-sm-2 bg-light"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => handleSearchChange(e)}
                />
			</div>
			</Row>
		</div>
	);
}

export default SearchHeader;