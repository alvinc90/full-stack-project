export const fetchReservations = () => {
    return(
        $.ajax({
            method: "GET",
            url: '/api/reservations'
        })
    )
};

export const fetchReservation = (reservationId) => {
    return(
        $.ajax({
            method: 'GET',
            url: `/api/reservations/${reservationId}`
        })
    )
};

export const createReservation = (reservation) => {
    debugger
    return(
        $.ajax({
            method: "POST",
            url: '/api/reservations',
            data: {reservation}
        })
    )
};

export const updateReservation = (reservation) => {
    return(
        $.ajax({
            method: "PATCH",
            url: `/api/reservations/${reservation.id}`,
            data: {reservation}
        })
    )
};

export const deleteReservation = (reservationId) => {
    return(
        $.ajax({
            method: 'DELETE',
            url: `/api/reservations/${reservationId}`
        })
    )
};