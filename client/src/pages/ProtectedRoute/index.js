import React, { useEffect, useContext } from 'react'

import { UserContext } from "../../utils/UserContext";
import Budgets from "../../components/Budget"

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function ProtectedRoute() {

	const [user, dispatch] = useContext(UserContext)
	console.log(user)

	useEffect(() => {
		fetch('api/users/user', {
			credentials: 'include'
		})
			.then((res) => {
				console.log(`response to authenticate ${res}`);
				console.log(res, "yesyes")
				return res.json(res)

			})
			.then(async data => {
				console.log(data);
				await dispatch({
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
		<Budgets userId ={user.id} user={user.username}/>
		</>
	)

}

export default ProtectedRoute