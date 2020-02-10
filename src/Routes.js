import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { withRouter } from "react-router";

import {
	PageBooks,
	PageAuthors,
	PageBookDetails,
	PageAuthorDetails,
} from './pages';

const Routes = () => {
	return (
		<Switch>
			<Route
				exact
				path="/"
				component={PageBooks}
			/>
			<Route
				exact
				path="/libros"
				component={PageBooks}
			/>
			<Route
				exact
				path="/autores"
				component={PageAuthors}
			/>
			<Route
				exact
				path="/libro/:id"
				component={PageBookDetails}
			/>
			<Route
				exact
				path="/autor/:id"
				component={PageAuthorDetails}
			/>
			<Redirect to="/not-found" />
		</Switch>
	);
};

export default withRouter(Routes)
//export default Routes;