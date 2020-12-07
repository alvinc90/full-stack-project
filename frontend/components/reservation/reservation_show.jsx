import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer';

class ReservationShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleModify = this.handleModify.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllRestaurants();
        this.props.fetchReservation(this.props.match.params.reservationId);
    }

    handleModify(e) {
        
    }

    render() {
        const { reservation, restaurants, currentUser } = this.props;
        if (!reservation) return null;
        if (!Object.values(restaurants).length) return null;
        // debugger
        return(
            <div>
                <div className="reservation-top-line"></div>
                    <div className="reservation-show-button-container">
                        <Link to="/">
                            <button className="reservation-show-top-button">Home</button>
                        </Link>
                        <Link to="/my/reservations">
                            <button className="reservation-show-top-button">My Reservation</button>
                        </Link>
                    </div>
                <div className="reservation-show-outer-container">

                    <div className="reservation-show-heading-container">
                        <h1 className="rs1">Thanks! Your reservation is confirmed.</h1>
                        <h2 className="rs2">Confirmation #some-randon-generated-num</h2>
                    </div>

                    <div>
                        <div className="reservation-show-main-container">
                            <div>
                                <img 
                                    src={restaurants[reservation.restaurant_id].photourl }
                                    alt="restaurant picture"
                                    className="reservation-image"
                                />
                            </div>

                            <div>
                                <h1 className="rs3">{ restaurants[reservation.restaurant_id].name }</h1>
                                <div className="re4">
                                    <span>{ new Date(reservation.date).toDateString() }</span>
                                    <span>{ reservation.time.slice(11, 16) }</span>
                                    <span>{ reservation.num_guests } people</span>
                                </div>
                            </div>
                        </div>

                        <div className="re5">
                            <p className="re6">{ reservation.special_request }</p>
                        </div>

                        {/* <div className="reservation-top-line"></div> */}

                        <div className="edit-form-button-container">
                            <button onClick={this.handleModify} className="re7">Modify</button>
                            <button className="re8">Cancel Reservation</button>
                        </div>

                        <div className="reservation-edit-form-outer-container">
                            <div>
                                <div className="re100">
                                    <div>
                                        <select className="re12">
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
                                    </div>

                                    <div>
                                        <select className="re11">
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
                                </div>
                                <div className="re99">

                                    <div>
                                        <input className="re10" type="date" />
                                    </div>
                                    
                                    <div>
                                        <textarea 
                                            className="re13"
                                            placeholder="Add a special request(optional)"
                                        >
                                        </textarea>
                                    </div>
                                </div>

                            </div>

                            <div className="re37">
                                <button className="re50">Search</button>
                                <button className="re52">Cancel</button>
                            </div>

                            <div className="ninety-9-ranch">
                                <button className="ranch99">Time1</button>
                                <button className="ranch99">Time2</button>
                                <button className="ranch99">Time3</button>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <Footer />
                </footer>

            </div>
        )
    }
};

export default ReservationShow;