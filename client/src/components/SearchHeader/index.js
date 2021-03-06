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
				<h5 className="text-success"><i className="fas fa-plus-circle"></i></h5>
			</div>
			</div>
		</div>
	);
}
 
export default SearchHeader;