import * as ReservationAPIUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

const receiveReservations = (reservations) => {
    return({
        type: RECEIVE_RESERVATIONS, 
        reservations
    })
};

const receiveReservation = (reservation) => {
    return({
        type: RECEIVE_RESERVATION,
        reservation
    })
};

const removeReservation = (reservationId) => {
    return({
        type: REMOVE_RESERVATION,
        reservationId
    })
};

export const fetchReservations = () => {
    return dispatch => {
        return ReservationAPIUtil.fetchReservations()
            .then((newReservations) => {
                return dispatch(receiveReservations(newReservations))
            })
    }
};

export const fetchReservation = (reservationId) => {
    return dispatch => {
        return ReservationAPIUtil.fetchReservation(reservationId) 
            .then((newReservation) => {
                return dispatch(receiveReservation(newReservation))
            })
    }
};

export const createReservation = (reservation) => {
    return dispatch => {
        return ReservationAPIUtil.createReservation(reservation)
            .then((createdReservation) => {
                return dispatch(receiveReservation(createdReservation))
            })
    }
};

export const updateReservation = (reservation) => {
    return dispatch => {
        return ReservationAPIUtil.updateReservation(reservation)
            .then((updatedReservation) => {
                return dispatch(receiveReservation(updatedReservation))
            })
    }
};

export const deleteReservation = (reservationId) => {
    return dispatch => {
        return ReservationAPIUtil.deleteReservation(reservationId)
            .then(() => {
                return dispatch(removeReservation(reservationId))
            })
    }
};