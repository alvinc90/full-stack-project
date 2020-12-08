import React from 'react';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import UserReservationList from './user_reservation_list';

class UserReservation extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchReservations();
        this.props.fetchAllRestaurants();
    }

    render() {
        const { restaurants, reservations, currentUser } = this.props;
        !Object.values(restaurants).length ? null : restaurants
        if (!reservations.length) return null;
        return(
            <div className="user-reservation-outer-container">
                <div className="user-show-inner-container">
                    <div className="user-show-links-container">
                        <div className="links-container">
                            <Link className="link-styling" to="/my/profile"><h1 id="dcba">My Profile</h1></Link>
                            <Link className="link-styling" to="/my/favorites"><h1 id="dcba">My Saved Restaurants</h1></Link>
                            <Link className="link-styling" to="/my/reservations"><h1 id="abcd">My Reservations</h1></Link>
                        </div>

                    </div>
                    <div className="user-show-info-container3">
                        <h1 className="profile-heading">My Reservations</h1>
                        <div className="line-below-heading"></div>
                        {!Object.values(restaurants).length ? null : 
                        
                        reservations.map((reservation) => {
                            if ( (reservation.restaurant_id === restaurants[reservation.restaurant_id].id) && (reservation.user_id === currentUser) && (reservation.reserved === true) ) {
                                return (
                                       <UserReservationList
                                            reservation={reservation}
                                            key={reservation.id}
                                            restaurants={restaurants}
                                            currentUser={currentUser}
                                       />
                                )
                            }
                        })
                        
                        }
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