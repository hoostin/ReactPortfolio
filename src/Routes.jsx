import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";

/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Routes() {
	return (
		<Switch>
			<Route exact={true} path="/">
				<Redirect to={"/home"} />
			</Route>
			<Route path="/home">
				<NavBar />
				<main>
					<Home />
					<About />
					<Portfolio />
					<Contact />
					<Footer />
				</main>
			</Route>
		</Switch>
	);
}

export default Routes;
