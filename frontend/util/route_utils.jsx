import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom'; 

const Auth = ({loggedIn, path, component: Component, exact}) => {
    return (
        <Route 
            exact={exact}
            path={path}
            render={props => loggedIn ? <Redirect to="/" /> : <Component {...props} />}
        />
    )
};

const Protected = ({loggedIn, path, component: Component, exact}) => {
    return (
        <Route
            path={path}
            exact={exact}
            render={ (props) => {
                return (
                    loggedIn ? <Component {...props} /> : <Redirect to="/" />
                )
            } }
        />
    )
};

const mapStateToProps = (state) => {
    return ({
        loggedIn: Boolean(state.session.currentUserId)
    })
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected)); 
        