import React from 'react';
import { Link } from 'react-router-dom';

class ReservationShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllRestaurants();
        this.props.fetchReservation(this.props.match.params.reservationId);
    }

    render() {
        const { reservation, restaurants, currentUser } = this.props;
        if (!reservation) return null;
        if (!Object.values(restaurants).length) return null;
        debugger
        return(
            <div>
                <div>
                    <div>
                        <Link to="/">
                            <button>Back To Home</button>
                        </Link>
                        <Link to="/my/reservations">
                            <button>My Reservation</button>
                        </Link>
                    </div>

                    <div>
                        <h1>Thanks! Your reservation is confirmed.</h1>
                        <h1>Confirmation #some-randon-generated-num</h1>
                    </div>

                    <div>
                        <div>
                            <img 
                                src={restaurants[reservation.restaurant_id].photoUrl }
                                alt="restaurant picture"
                                className="user-fav-image"
                            />
                        </div>

                        <div>
                            <h1>{ restaurants[reservation.restaurant_id].name }</h1>
                            <div>
                                <span>{ reservation.date }</span>
                                <span>{ reservation.time }</span>
                                <span>{ reservation.num_guests }</span>
                            </div>
                        </div>
                        <p>{ reservation.special_request }</p>

                        <div>
                            <button>Modify</button>
                            <button>Cancel Reservation</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ReservationShow;