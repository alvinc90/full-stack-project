import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store'; 
import Root from './components/root'; 

document.addEventListener('DOMContentLoaded', () => {

    const root = document.getElementById("root");
    let preloadedState = undefined; 
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };

    }
    const store = configureStore(preloadedState); 
    ReactDOM.render(<Root store={store} />, root) 

    window.store = configureStore(); 
    window.getState = store.getState; 
    window.dispatch = store.dispatch;
    window.login = login; 
    window.logout = logout; 
    window.signup = signup; 
}); 