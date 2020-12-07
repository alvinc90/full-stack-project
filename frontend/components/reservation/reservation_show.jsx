import React from 'react';

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
        // if (!reservation) return null;
        return(
            <div>
                <div>
                    <div>
                        <h1>Thanks! Your reservation is confirmed.</h1>
                        <h1>Confirmation #some-randon-generated-num</h1>
                    </div>

                    <div>
                        <div>
                            <img src="" alt="restaurant image"/>
                        </div>

                        <div>
                            <h1>Restaurant name</h1>
                            <div>
                                <span>{reservation ? reservation.date : null}</span>
                                <span>{reservation ? reservation.time : null}</span>
                                <span>{reservation ? reservation.num_guests : null}</span>
                            </div>
                        </div>
                        <p>{reservation ? reservation.special_request : null}</p>

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