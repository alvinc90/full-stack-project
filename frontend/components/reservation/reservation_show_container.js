import { connect } from 'react-redux';
import ReservationShow from './reservation_show';
import { fetchReservation, updateReservation, deleteReservation } from '../../actions/reservation_action';
import { fetchAllRestaurants } from '../../actions/restaurant_action';
const mapStateToProps = (state, ownProps) => {
    return({
        reservation: state.entities.reservations[ownProps.match.params.reservationId],
        restaurants: state.entities.restaurants,
        currentUser: state.session.currentUserId,
    })
};

const mapDispatchToProps = (dispatch) => {
    return({
        fetchReservation: (reservationId) => dispatch(fetchReservation(reservationId)),
        updateReservation: (reservation) => dispatch(updateReservation(reservation)),
        deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
        fetchAllRestaurants: () => dispatch(fetchAllRestaurants())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationShow);