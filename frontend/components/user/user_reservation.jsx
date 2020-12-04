import React from 'react';
import Footer from '../footer';
import { Link } from 'react-router-dom';

class UserReservation extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="user-reservation-outer-container">
                <div className="user-show-inner-container">
                    <div className="user-show-links-container">
                        <div className="links-container">
                            <Link className="link-styling" to="/my/profile"><h1>My Profile</h1></Link>
                            <Link className="link-styling" to="/my/favorites"><h1>My Saved Restaurants</h1></Link>
                            <Link className="link-styling" to="/my/reservations"><h1>My Reservations</h1></Link>
                        </div>

                    </div>
                    <div className="user-show-info-container3">
                        <h1 className="profile-heading">My Reservations</h1>
                    </div>
                </div>

                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
};

export default UserReservation;