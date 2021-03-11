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
import {useLocation} from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { Input, TextArea, FormBtn } from "../Form";
import API from "../../utils/API";
// export default AddModal;
const AddGroceryModal = ({typeLocation, user, getInventory}) => {
	console.log(user, "modal user")
	console.log(typeLocation, "type modal ")
	// let location = useLocation();
 
	// console.log(location);
	// let userLocation = location.user
	// let typeLocation = location.type
	const [formObject, setFormObject] = useState({
		title: "",
		type: typeLocation,
		quantity: "",
		expires: "",
		cost: "",
	  })



	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormObject({...formObject, [name]: value})
	  };

	  function handleFormSubmit(event) {
		event.preventDefault();
	 
		if (formObject.title && formObject.type) {
		  API.updateBudget(user, {
			title: formObject.title.toLowerCase(),
			type: formObject.type.toLowerCase(),
			quantity: formObject.quantity,
			expires: formObject.expires,
			cost : formObject.cost,
		  })
			.then(() => setFormObject({
			title: "",
			type: "",
			quantity: "",
			expires: "",
			cost : "",
			}))
			.then(() => getInventory(user))
			.catch(err => console.log(err));
		}
	  };

  return (
    <div className="container">
      <i
        className="fas fa-plus-circle"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      ></i>

      <div
        className="modal fade text-left"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bg-success text-light">
              <h5 className="modal-title" id="exampleModalLongTitle">
                New Item
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="exampleFormControlInput1">Item:</label>
				  <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Apple, Gas, Cellphone, etc. (required)"
                value={formObject.title}
              />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlSelect1">Quantity:</label>
				  <Input
                onChange={handleInputChange}
                name="quantity"
                placeholder="Quantity (Optional)"
                value={formObject.quantity}
              />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlInput2">Cost:</label>
                  <Input
                onChange={handleInputChange}
                name="cost"
                placeholder="$ (Optional)"
                value={formObject.cost}
              />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlInput3">Expiration Date:</label>
				  <Input
                onChange={handleInputChange}
                name="expires"
                placeholder="Expire Date or Due Date (required)"
                value={formObject.expires}
              />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
			  <FormBtn
                disabled={!(formObject.title)}
                onClick={handleFormSubmit}
				      data-dismiss="modal"
              >
                Submit Item
              </FormBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGroceryModal;
