import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {AuthRoute} from '../util/route_utils';
import Modal from './modal/modal';  
import NavBarContainer from './nav_bar/nav_bar_container';
import Error from "./error";
import Home from "./home/home"; 

// import SignUpContainer from "./session/signup_container";
// import LoginContainer from "./session/login_container"

const App = () => {
    return (
        <div>
            < Modal />
            <Route path="/" component={NavBarContainer}/>
            <Switch>
                <Route exact path="/" component={Home}/> 
                {/* <Route path="/login" component={LoginContainer} />
                <AuthRoute path="/signup" component={SignUpContainer} /> */}
                <Route component={Error}/>
            </Switch>

        </div>
    )
};
export default App; 


