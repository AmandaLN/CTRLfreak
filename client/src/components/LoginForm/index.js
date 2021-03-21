import React, { useRef } from 'react'
import Card from "../Card"
import { Container } from '../Grid/Container';
import "./loginform.css"

function LoginForm({ onLogin }) {

	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();

	return (
		<div className="container" style={{width: 450, marginTop: 100 }}>
			<Card title="CTRLfreak">
			<form id="formz"
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					return onLogin({
						username: userNameRef.current.value,
						password: passwordRef.current.value
					});
				}}
			>
				<div className="form-group">
					<div className="form-group">
						<input type="email" className="form-control"  ref={userNameRef} type="text" name="username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group">
						<input type="password" ref={passwordRef} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<div className="form-check">
						<input type="checkbox" className="form-check-input" id="exampleCheck1" />
						<label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
					</div>
					<br/>
						<button type="submit" className="btn btn-primary border btn-lg btn-block rounded font-weight-bold">Log In</button>
						<div className="container text-center">
							<hr/>
						</div>
						<button type="" className="btn btn-light border btn-lg btn-block rounded font-weight-bold text-dark">Sign Up</button>
				</div>
			</form>
		</Card>
		</div>
	)
}


export default LoginForm


{/* <form
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					return onLogin({
						username: userNameRef.current.value,
						password: passwordRef.current.value
					});
				}}
			>
				<div className="form-group">
					<div className="form-group">
					<input type="email" className="form-control"  ref={userNameRef} type="text" name="username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
					<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				</div>
				<div className="form-group">
					<input type="password" ref={passwordRef} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div className="form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" for="exampleCheck1">Remember me</label>
				</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</div>
			</form> */}