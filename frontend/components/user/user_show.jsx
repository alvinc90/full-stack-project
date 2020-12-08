import React from 'react';
import Footer from '../footer';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser);
    }

    render(){
        const { user } = this.props
        return(
            <div className="user-show-outer-container">
                <div className="user-show-inner-container">
                    <div className="user-show-links-container">
                        <div className="links-container">
                            <Link className="link-styling" to="/my/profile"><h1 id="abcd">My Profile</h1></Link>
                            <Link className="link-styling" to="/my/favorites"><h1 id="dcba">My Saved Restaurants</h1></Link>
                            <Link className="link-styling" to="/my/reservations"><h1 id="dcba">My Reservations</h1></Link>
                        </div>

                    </div>
                    <div className="user-show-info-container">
                        <h1 className="profile-heading">My Profile</h1>
                        <div className="line-below-heading"></div>
                        <h1 className="user-bio-list">
                            <span className="username2">Username:</span>
                            <span className="username">{user.username}</span>
                        </h1>
                        <h1 className="user-bio-list">
                            <span className="username2">Email:</span>
                            <span className="username">{user.email}</span>
                        </h1>
                        <h1 className="user-bio-list">
                            <span className="username2">Location:</span>
                            <span className="username">Unavailable at this time</span>
                        </h1>
                    </div>
                </div>

                <footer className="footer-for-user-show">
                    <Footer />
                </footer>

            </div>
        )
    }
};

export default UserShow;

