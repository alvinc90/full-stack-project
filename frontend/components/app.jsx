import React from 'react';
import { Route, Switch } from 'react-router-dom'

import SignUpContainer from "./session/signup_container";
import LoginContainer from "./session/login_container"

const App = () => {
    return (
        <div>
            <h1>react is working =))))))))</h1>
            <Switch>
                <Route path="/signup" component={SignUpContainer} />
                <Route path="/login" component={LoginContainer} />
            </Switch>

        </div>
    )
};



export default App; 