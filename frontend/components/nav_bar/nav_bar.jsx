import React from 'react'; 
import { Link } from 'react-router-dom'; 

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }; 

    render() {
        const display = this.props.currentUser ? (
            <div>
                <p>Hello, {currentUser.username}</p>
                <button onClick={this.props.logout}>LogOut</button>
            </div>

        ) : (
            <div>
                <Link to={"/signup"}>Sign Up</Link>
                <Link to={"/login"}>Login</Link>
            </div>
        );

        return (
            <div>
                {display}
            </div>
        )
    }
}

export default NavBar; 