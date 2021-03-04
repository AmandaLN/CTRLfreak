import React from "react";
import Wrapper from "./components/Wrapper";
import Nav1 from "./components/Nav";
import Welcome from "./pages/Welcome";
import Budgets from "./pages/Budgets";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Logo from "./components/logo";


function App() {
	return (

		<Router basename={process.env.PUBLIC_URL}>
			<>
			<Nav1 />
			<Logo />
			<Wrapper>
			<Route exact path="/" component={Welcome} />
			<Route exact path="/budgets" component={Budgets} />
			</Wrapper>
			</>
		</Router>

	);
}

export default App;
