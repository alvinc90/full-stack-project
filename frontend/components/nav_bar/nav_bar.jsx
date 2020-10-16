import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { openModal } from '../../actions/modal_action'; 

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }; 

    render() {
        const display = this.props.currentUser ? (
            <div>
                <p>Hello, {this.props.currentUser.username}</p>
                <button onClick={this.props.logout}>LogOut</button>
            </div>

        ) : (
            <div className = "navbar">
                    <img src={window.brentURL} alt="open street table logo" />

                <div className="signup-login">
                    <button className="btn-signup" onClick={() => this.props.openModal('signup')}>Sign Up</button>
                    <button className="btn-login" onClick={() => this.props.openModal('login')}>Sign In</button>
                </div>

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