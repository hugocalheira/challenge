import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Albums from './pages/Albums';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => isAuthenticated() && <Component {...props} />}
    />
);

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/" exact component={Home} />
                <PrivateRoute
                    path="/albums/:id"
                    component={props => <Albums {...props} />}
                />
                <PrivateRoute
                    path="/callback"
                    component={() => {
                        return <Redirect to="/" />;
                    }}
                />
            </Switch>
        </BrowserRouter>
    );
}
