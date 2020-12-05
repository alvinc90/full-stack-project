import { connect } from 'react-redux';
import UserReservation from './user_reservation';
import { fetchReservations } from '../../actions/reservation_action';
import { fetchAllRestaurants } from '../../actions/restaurant_action';

const mapStateToProps = (state) => {
    return({
        reservations: Object.values(state.entities.reservations),
        restaurants: state.entities.restaurants,
        users: state.entities.users,
        currentUser: state.session.currentUserId
    })
};

const mapDispatchToProps = (dispatch) => {
    return({
        fetchReservations: () => dispatch(fetchReservations()),
        fetchAllRestaurants: () => dispatch(fetchAllRestaurants())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserReservation);