import React from 'react';
import { Link } from 'react-router-dom';

const UserReservationList = ({ reservation, restaurants, currentUser }) => {
    const imgUrl = restaurants[reservation.restaurant_id].photourl
    return(
        <div className="fav-list-container">
            <div>
                <img className="user-fav-image" src={imgUrl} alt="spiderman"/>
            </div>

            <div>
                <h1>{restaurants[reservation.restaurant_id].name}</h1>
                <h3>{reservation.date}</h3>
                <h3>{reservation.time}</h3>
                <h3>{reservation.num_guests}</h3>
            </div>
        </div>
    )
};

export default UserReservationList;