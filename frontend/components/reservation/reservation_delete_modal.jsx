import React from 'react';
import { withRouter } from 'react-router-dom';

class ReservationDeleteModal extends React.Component {

    constructor(props) {
        super(props)
        this.handleCancelRes = this.handleCancelRes.bind(this);
        this.state = { 
            reserved: false,
            id: this.props.reservation.id,
            num_guests: this.props.reservation.num_guests,
            date: this.props.reservation.date,
            time: this.props.reservation.time.slice(11, 16),
            user_id: this.props.reservation.user_id,
            restaurant_id: this.props.reservation.restaurant_id,
            special_request: this.props.reservation.special_request
        }
    }

    handleCancelRes(e) {
        const { reservation, updateReservation } = this.props;
        updateReservation(this.state);
        this.props.history.push(`/reservations/${reservation.id}`)
        this.props.toggleDeleteModal();
    }

    render() {
        const { toggleDeleteModal } = this.props;
        return(
            <div className="modal-delete-background" onClick={toggleDeleteModal}>
                <div className="modal-delete-inner" onClick={ (e) => e.stopPropagation()}>
                    <h1 className="honda">Are you sure you would like to cancel the reservation?</h1>
                    <div className="nissan">
                        <button 
                            onClick={toggleDeleteModal}
                            className="toyota"
                            >No, keep this reservation
                        </button>
                    </div>
                    <div className="nissan">
                        <button className="mazda" onClick={this.handleCancelRes}>Cancel Reservation</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default withRouter(ReservationDeleteModal);