import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";

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
				<Home />
				<About />
			</Route>
		</Switch>
	);
}

export default Routes;
