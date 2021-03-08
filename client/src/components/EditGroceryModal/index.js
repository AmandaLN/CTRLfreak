const EditGroceryModal = () => {
	return (
		<div className="modal fade text-left" id="editGroceryModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header bg-success text-light">
							<h5 className="modal-title" id="exampleModalLongTitle">Edit Item</h5>
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
									<input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Enter a Number"/>
								</div>
								<div className="form-group">
									<label for="exampleFormControlInput2">Cost:</label>
									<input type="email" className="form-control" id="exampleFormControlInput2" placeholder="$"/>
								</div>
								<div className="form-group">
									<label for="exampleFormControlInput3">Expiration Date:</label>
									<input type="email" className="form-control" id="exampleFormControlInput2" placeholder="MM/DD/YYYY"/>
								</div>
								<div className="form-group">
									<label for="exampleFormControlTextarea1">Notes:</label>
									<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Optional"></textarea>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
							<button type="button" className="btn btn-success">Confirm Edit</button>
						</div>
					</div>
				</div>
			</div>
	);
}
 
export default EditGroceryModal;