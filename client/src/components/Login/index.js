import React from "react";
import "./login.css"

const Login = () => {
	return (
		<div className="container" style={{ marginTop: 30 }}>
			<form>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
					<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div className="form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
			<br/>
			<p>Or sign up <a href="/">here</a></p>
		</div>
	);
}

export default Login