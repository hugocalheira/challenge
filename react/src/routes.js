import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from './pages/Home';
import Albums from './pages/Albums';
import { isAuthenticated } from './services/auth';
import SpotifyAuth from './pages/Auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => isAuthenticated() ? <Component {...props} /> : 
        <Redirect to='/auth' />
    }
    />
);

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/auth' exact component={SpotifyAuth} />
                <Route path={process.env.URL_CALLBACK} component={SpotifyAuth} />
                
                <PrivateRoute path="/" exact component={Home} />
                <PrivateRoute
                    path="/albums/:id"
                    component={props => <Albums {...props} />}
                />
                <PrivateRoute
                    path="/artists/:id"
                    component={props => <Home {...props} />}
                />
            </Switch>
        </BrowserRouter>
    );
}

PrivateRoute.propTypes = {
    component: PropTypes.any.isRequired,
};
