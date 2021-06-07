import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";

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
				<Home />
			</Route>
		</Switch>
	);
}

export default Routes;
