import { connect } from 'react-redux';
import ReservationCreateForm from './reservation_create_form';
import { createReservation } from '../../actions/reservation_action';

const mapStateToProps = (state) => {
    return({
        
    })
};

const mapDispatchToProps = (dispatch) => { 
    return({
        createReservation: (reservation) => dispatch(createReservation(reservation))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationCreateForm);