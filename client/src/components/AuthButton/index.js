import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import Auth from "../../utils/Auth";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";

const AuthButton = () => {
	console.log("NAV", Auth.isAuthenticated);

	const [user, dispatch] = useContext(UserContext);
	const history = useHistory();

	return (
		Auth.isAuthenticated ? (
			<button className="btn btn-white text-primary font-weight-bold border border-primary rounded-pill px-4 border" 
				onClick={() => {
					Auth.signout(() => history.push('/login'))
					dispatch({
						type: "GET_USER",
						payload: {}
					})
				}}>
				Log Out
			</button>
		) : (
				<Link
					className="btn btn-white border border-primary text-primary rounded-pill font-weight-bold px-4"
					to="/login"
				>Log In
				</Link>
			)
	)
}

export default AuthButton;