import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store'; 
import Root from './components/root'; 

document.addEventListener('DOMContentLoaded', () => {

    const store = configureStore(); 
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root) 

    const u1 = {
        username: "alvin1",
        password: "password",
        email: "alvin1@alvin.com"}
    
    window.login = login; 
    window.logout = logout; 
    window.signup = signup; 
}); 