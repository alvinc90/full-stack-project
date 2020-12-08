import React from 'react';
import Footer from '../footer';

class ReservationCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        const { num_guests, date, time, restaurant, currentUser } = this.props.location.state;
        this.state = {
            num_guests: num_guests,
            date: date,
            time: time,
            special_request: "",
            reserved: true,
            user_id: currentUser,
            restaurant_id: restaurant.id
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.createReservation(this.state);
    }

    handleChange(e) {
        this.setState({ special_request: e.currentTarget.value })
    }

    render() {
        const { num_guests, date, time, restaurant } = this.props.location.state;
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const printDay = days[ new Date(date).getUTCDay()];
        const printMonth = months[ new Date(date).getUTCMonth()];
        const printDate = date.slice(8);
        const printYear = date.slice(0, 2);
        const time2 = {
            "10:00": "10:00 AM",
            "11:00": "11:00 AM",
            "12:00": "12:00 PM",
            "13:00": "1:00 PM",
            "14:00": "2:00 PM",
            "15:00": "3:00 PM",
            "16:00": "4:00 PM",
            "17:00": "5:00 PM",
            "18:00": "6:00 PM",
            "19:00": "7:00 PM",
            "20:00": "8:00 PM",
            "21:00": "9:00 PM",
        };
        return(
            <div>
                <div className="reservation-top-line"></div>
                <div className="a0">
                    <form className="a1" onSubmit={this.handleSubmit}>
                        <h1 className="a3">You're almost done!</h1>
                        <div className="a4">
                            <div>
                                <img 
                                    src={restaurant.photoUrl} 
                                    alt="restaurant picture"
                                    className="a4-5"
                                />
                            </div>
                            <div className="b1">
                                <h1 className="a5">{restaurant.name}</h1>
                                <div className="a6">
                                    <span>{printDay}, {printMonth} {printDate} {printYear}</span>
                                    <span className="a7">{time2[time]}</span>
                                    <span className="a7">Table for {num_guests}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <textarea
                                onChange={this.handleChange}
                                value={this.state.special_request}
                                placeholder="Add a special request (optional)"
                                className="a8"
                            >
                            </textarea>
                        </div>

                        <div>
                            <input 
                                type="submit" 
                                value="Complete Reservation"
                                className="a9"
                            />
                        </div>

                        <p className="a10">By clicking “Complete reservation” you agree to the <span className="a11">OpenStreetTable Terms of Use</span> and <span className="a11">Privacy Policy</span>. Standard text message rates may apply. You may opt out of receiving text messages at any time.</p>
                    </form>

                    <div className="a2">
                        <h1 className="a12">What to know before you go</h1>

                        <div className="a13">
                            <h2 className="a14">Important dining information</h2>
                            <p>We have a 10 minute grace period. Please call us if you are running later than 10 minutes after your reservation time.</p>
                            <p>We may contact you about this reservation, so please ensure your email and phone number are up to date.</p>
                            <p>Your table will be reserved for 1 hour 30 minutes.</p>
                        </div>
                    </div>
                </div>
                <footer className="a15">
                    <Footer />
                </footer>
            </div>
        )
    }
};

export default ReservationCreateForm;