import { connect } from 'react-redux';
import ReservationCreateForm from './reservation_create_form';
import { createReservation, fetchReservations } from '../../actions/reservation_action';

const mapStateToProps = (state) => {
    return({
        reservations: Object.values(state.entities.reservations)
    })
};

const mapDispatchToProps = (dispatch) => { 
    return({
        createReservation: (reservation) => dispatch(createReservation(reservation)),
        fetchReservations: () => dispatch(fetchReservations())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationCreateForm);