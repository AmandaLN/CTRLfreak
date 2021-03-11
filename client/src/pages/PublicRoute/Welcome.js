import React from "react";
import Nav from "../../components/Nav"
import Hero from "../../components/Hero";
import Hero1 from "../../components/Hero1";
import Hero2 from "../../components/Hero2";
import Jumbotron from "../../components/Jumbotron";


const Welcome = () => {
	return (
		// <>
		// 	<Jumbotron>
		// 		<h1>- Our Mission -</h1>
		// 		<h3>Help us, Help you</h3>
		// 	</Jumbotron>
		// 	<>
		// 		<h1 align="center">Welcome To CTRLfreak!</h1>
		// 		<br>
		// 		</br>
		// 		<p align="center">We are just 4 Web Developers that came together to create an app to make life a little easier. We wanted to create a user management/inventory app. Many people do not pay attention to expiration and/ or due dates. Due to this, we created CTRLfreak. This app lets you keep an inventory of groceries, that will color code the table when it gets close to the expiration date. As well as letting you add your bills to keep track of due dates. You can also see how you are budgeting. Where you are spending money and how much everything adds up with a budget total. Enjoy cutting out the chaos! Happy organizing!</p>

		// 	</>
		// </>
		<>
		<Jumbotron/>
		<Hero/>
		<Hero1/>
		<Hero2/>
		</>
	);
};
export default Welcome;

//conditional rendering to slim down, if ()