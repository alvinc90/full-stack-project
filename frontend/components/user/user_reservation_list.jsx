import React from 'react';
import { Link } from 'react-router-dom';

const UserReservationList = ({ reservation, restaurants, currentUser }) => {
    return(
        <div>
            <div>

            </div>

            <div>
                <h1>{restaurants[reservation.restaurant_id].name}</h1>
            </div>
        </div>
    )
};

export default UserReservationList;