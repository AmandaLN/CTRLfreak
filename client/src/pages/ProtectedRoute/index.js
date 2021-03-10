import React, { useEffect, useContext } from 'react'
import { UserContext } from "../../utils/UserContext";
import Budgets from "../../components/Budgets"



/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function ProtectedRoute() {
	const [user, dispatch] = useContext(UserContext)
	console.log(user, "protected route index")

	useEffect(() => {
		fetch('api/users/user', {
			credentials: 'include'
		})
			.then((res) => {
				console.log(`response to authenticate ${res}`);
				console.log(res, "yesyes")
				return res.json(res)
			})
			.then(data => {
				console.log(data, "protected route index");
				dispatch({
					type: "GET_USER",
					payload: data
				})
			})
			.catch((err) => {
				console.log('Error fetching authorized user.');
			});

	}, []);

	return (
		<>
			<Budgets />
		</>
	)

}

export default ProtectedRoute