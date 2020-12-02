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
                            <Link className="link-styling" to="/my/profile"><h1>My Profile</h1></Link>
                            <Link className="link-styling" to="/my/favorites"><h1>My Saved Restaurants</h1></Link>
                            <Link className="link-styling" to="/"><h1>My Reservations</h1></Link>
                        </div>

                    </div>
                    <div className="user-show-info-container">
                        <h1>Username: {user.username}</h1>
                        <h1>Email: {user.email}</h1>
                        <h1>Location: Unavailable at this time</h1>
                    </div>
                </div>

                <footer>
                    <Footer />
                </footer>

            </div>
        )
    }
};

export default UserShow;
