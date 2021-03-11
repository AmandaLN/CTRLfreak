import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Reports from "./components/Reports";
import { Container } from "./components/Grid";
import PublicRoute from "./pages/PublicRoute";
import Welcome from "./pages/PublicRoute/Welcome";
import Inventory from "./pages/ProtectedRoute/Inventory";
import Budget from "./pages/ProtectedRoute/Budget";
import { UserProvider } from "./utils/UserContext";
import AboutUs from "./components/AboutUs";

function App() {
	return (
		<UserProvider>
		<Router>
			<div>
				<Nav className="App-header" />
					<Switch>
						<Route exact path="/" component={Welcome} />
						<Route path="/public" component={AboutUs} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<PrivateRoute path="/inventory" component={Inventory} />
						<PrivateRoute path="/protected" component={Budget} />
						<PrivateRoute path="/protected2" component={Budget} />
						{/* <Route component={NoMatch} /> */}
					</Switch>
				<Footer />
			</div>
		</Router>
	</UserProvider>

	);
}

// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Router>
		<div>

			<Route {...rest} render={props => (

				Auth.isAuthenticated ? (
					<Component {...props} />
				) : (
						<div className="container">
							<div className="alert alert-danger text-center" role="alert">
								This page is private to authenticated users.
					</div>
							<div className="row">
								<div className="col-sm"></div>
								<div className="col-sm">
									<h3>Please Register or Login</h3>
								</div>
								<div className="col-sm"></div>
							</div>
							<Redirect to={{
								pathname: '/login',
								state: { from: props.location }
							}} />
						</div>
					)
			)} />
		</div>
	</Router>
)

export default App
