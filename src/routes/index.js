import React from 'react';
import { createBrowserHistory } from "history";
import { Redirect, Route, Switch, Router } from 'react-router-dom';
import SignIn from '../pages/sign-in';

const history = createBrowserHistory();

const Routes = () => {

    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={() => <div>asssssssssssssssssssss</div>} />
                <Route path="/sign-in" component={SignIn} />
                <Route exact path="/no-match" component={() => <h1>404</h1>} />
                <Redirect to="/no-match" />
            </Switch>
        </Router>
    );
};

export default Routes;