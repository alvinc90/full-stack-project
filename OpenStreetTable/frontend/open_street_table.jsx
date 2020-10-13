import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { login, logout, signup } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {

    const root = document.getElementById("root");
    ReactDOM.render(<h1>React is working =) </h1>, root) 

    // const u1 = {
    //     username: "alvin1",
    //     password: "password",
    //     email: "alvin1@alvin.com"}

    // window.login = login; 
    // window.logout = logout; 
    // window.signup = signup; 
}); 