import React from 'react'; 
import { Link } from 'react-router-dom'; 

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.toggleMenu = this.toggleMenu.bind(this);
    }; 

    toggleMenu(e) {
        console.log("pizzzzaaa timeeeee");
        const listItems = document.getElementsByClassName("list-items")[0];
        if (listItems.style.display === "none"){
            listItems.style.display = "block"
        } else {
            listItems.style.display = "none"
        }

    }

    render() {
        const display = this.props.currentUserId ? (
            <div className="navbar">
                <Link to={"/"}><img src={window.brentURL} alt="open street table logo" /></Link>

                <div className="signed-in-nav">
                    <ul className="signed-in-nav2">
                        <li>
                            <p onClick={this.toggleMenu} className="this">Hello, {this.props.username}</p>
                            <ul className="list-items">
                                <Link className="link-styling" to="/my/profile"><li>My Profile</li></Link>
                                <Link className="link-styling" to="/my/favorites"><li>My Saved Restaurants</li></Link>
                                <Link className="link-styling" to="/"><li>My Reservation</li></Link>
                                <li onClick={this.props.logout}>Sign Out</li>
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