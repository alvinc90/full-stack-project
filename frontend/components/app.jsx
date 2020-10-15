import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {AuthRoute} from '../util/route_utils';
import Modal from './modal/modal';  
import NavBarContainer from './nav_bar/nav_bar_container'

// import SignUpContainer from "./session/signup_container";
// import LoginContainer from "./session/login_container"

const App = () => {
    return (
        <div>
            < Modal />
            {/* <Switch> */}
            <Route path="/" component={NavBarContainer}/>
                {/* <Route path="/login" component={LoginContainer} />
                <AuthRoute path="/signup" component={SignUpContainer} /> */}
            {/* </Switch> */}

        </div>
    )
};



export default App; 