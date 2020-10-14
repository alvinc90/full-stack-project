import React from 'react';
import { Route, Switch } from 'react-router-dom'
import {AuthRoute} from '../util/route_utils'

import NavBarContainer from './nav_bar/nav_bar_container'
import SignUpContainer from "./session/signup_container";
import LoginContainer from "./session/login_container"

const App = () => {
    return (
        <div>
            <h1>react is working =))))))))</h1>
            <Switch>
                <Route path="/" component={NavBarContainer}/>
                <AuthRoute path="/signup" component={SignUpContainer} />
                <Route path="/login" component={LoginContainer} />
            </Switch>

        </div>
    )
};



export default App; 