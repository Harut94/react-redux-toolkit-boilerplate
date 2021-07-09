import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import SignIn from 'pages/sign-in';

const history = createBrowserHistory();

const Routes = () => {
	return (
		<Router history={history}>
			<Switch>
				<Redirect exact from="/" to="/sign-in" />
				<Route exact path="/sign-in" component={SignIn} />
				<Route exact path="/404" component={() => <div>no match</div>} />
				<Redirect exact to="/404" />
				{/*<Route path="*"  component={() => <div>no match</div>} />*/}
			</Switch>
		</Router>
	);
};

export default Routes;
