import {
    RECEIVE_RESERVATIONS,
    RECEIVE_RESERVATION,
    REMOVE_RESERVATION
} from '../actions/reservation_action';

const reservationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    debugger
    switch(action.type) {
        case RECEIVE_RESERVATIONS:
            return action.reservations;
        case RECEIVE_RESERVATION:
            newState[action.reservation.id] = action.reservation;
            return newState;
        case REMOVE_RESERVATION:
            delete newState[action.reservationId];
            return newState;
        default:
            return oldState;
    }
};

export default reservationsReducer;