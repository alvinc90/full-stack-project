import React from 'react';
import { Route, Switch } from 'react-router-dom'

// import SignUpContainer from "./session/signup_container";

const App = () => {
    return (
        <div>
            <h1>react is working =))))))))</h1>
            <Switch>
                <Route path="/signup" component={SignUpContainer} />
            </Switch>

        </div>
    )
};



export default App; 