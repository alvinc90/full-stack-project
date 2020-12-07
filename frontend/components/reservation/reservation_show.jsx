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
        // debugger
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
                                src={restaurants[reservation.restaurant_id].photourl }
                                alt="restaurant picture"
                                className="reservation-image"
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

                        <div>
                            <div>
                                <div>
                                    <input type="date" />

                                    <select>
                                        <option value="10:00">10:00 AM</option>
                                        <option selected value="11:00">11:00 AM</option>
                                        <option value="12:00">12:00 PM</option>
                                        <option value="13:00">1:00 PM</option>
                                        <option value="14:00">2:00 PM</option>
                                        <option value="15:00">3:00 PM</option>
                                        <option value="16:00">4:00 PM</option>
                                        <option value="17:00">5:00 PM</option>
                                        <option value="18:00">6:00 PM</option>
                                        <option value="19:00">7:00 PM</option>
                                        <option value="20:00">8:00 PM</option>
                                        <option value="21:00">9:00 PM</option>
                                    </select>
                                </div>
                                <div>
                                    <select>
                                        <option value="1">1 person</option>
                                        <option selected value="2">2 people</option>
                                        <option value="3">3 people</option>
                                        <option value="4">4 people</option>
                                        <option value="5">5 people</option>
                                        <option value="6">6 people</option>
                                        <option value="7">7 people</option>
                                        <option value="8">8 people</option>
                                        <option value="9">9 people</option>
                                        <option value="10">10 people</option>
                                    </select>

                                    <textarea>
                                    </textarea>
                                </div>

                            </div>

                            <div>
                                <button>Search</button>
                                <button>Cancel</button>
                            </div>

                            <div>
                                <button>Time1</button>
                                <button>Time2</button>
                                <button>Time3</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ReservationShow;