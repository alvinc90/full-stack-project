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

    const u1 = {
        username: "alvin1",
        password: "password",
        email: "alvin1@alvin.com"}

    window.store = configureStore(); 
    window.getState = store.getState; 
    window.dispatch = store.dispatch;
    window.login = login; 
    window.logout = logout; 
    window.signup = signup; 
}); 