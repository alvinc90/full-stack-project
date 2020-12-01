import React from 'react'; 
import { Link } from 'react-router-dom'; 

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }; 

    render() {
        const display = this.props.currentUserId ? (
            <div className="navbar">
                <Link to={"/"}><img src={window.brentURL} alt="open street table logo" /></Link>

                <div className="signed-in-nav">
                    <ul className="signed-in-nav2">
                        <li>
                            <p className="this">Hello, {this.props.username}</p>
                            <ul className="list-items">
                                <li onClick={this.props.logout}>Sign Out</li>
                                <Link to="/my/profile"><li>My Profile</li></Link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        ) : (

            <div className = "navbar">
                <Link to={"/"}><img src={window.brentURL} alt="open street table logo" /></Link>

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