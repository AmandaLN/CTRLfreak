// require("react-bootstrap/ModalHeader")

// const AddModal = (props) => {
// 	return (
// 		<Modal
// 		{...props}
// 		size="lg"
// 		aria-labelledby="contained-modal-title-vcenter"
// 		centered
// 	  >
// 		<Modal.Header closeButton>
// 		  <Modal.Title id="contained-modal-title-vcenter">
// 			Modal heading
// 		  </Modal.Title>
// 		</Modal.Header>
// 		<Modal.Body>
// 		  <h4>Centered Modal</h4>
// 		  <p>
// 			Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
// 			dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
// 			consectetur ac, vestibulum at eros.
// 		  </p>
// 		</Modal.Body>
// 		<Modal.Footer>
// 		  <Button onClick={props.onHide}>Close</Button>
// 		</Modal.Footer>
// 	  </Modal>
// 	);
// }

// export default AddModal;
const AddGroceryModal = () => {
	return (
		<div className="container">
			<i className="fas fa-plus-circle" data-toggle="modal" data-target="#exampleModalCenter"></i>
			
			<div className="modal fade text-left" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header bg-success text-light">
							<h5 className="modal-title" id="exampleModalLongTitle">New Item</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group">
									<label for="exampleFormControlInput1">Item:</label>
									<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Apple, Salmon, Pineapple, etc."/>
								</div>
								<div className="form-group">
									<label for="exampleFormControlSelect1">Quantity:</label>
									<select className="form-control" id="exampleFormControlSelect1">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
								</div>
								<div className="form-group">
									<label for="exampleFormControlInput2">Expiration Date:</label>
									<input type="email" className="form-control" id="exampleFormControlInput2" placeholder="MM/DD/YYYY"/>
								</div>
								<div className="form-group">
									<label for="exampleFormControlTextarea1">Notes:</label>
									<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
							<button type="button" className="btn btn-success">Add New Item</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddGroceryModal;
