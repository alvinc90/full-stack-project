import React from 'react';
import { Link } from 'react-router-dom';

const UserReservationList = ({ reservation, restaurants, currentUser }) => {
    if (!reservation) return null;
    const imgUrl = restaurants[reservation.restaurant_id].photourl
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const printDay = days[ new Date(reservation.date).getUTCDay()];
    const printMonth = months[ new Date(reservation.date).getUTCMonth()];
    const printDate = reservation.date.slice(8);
    const printYear = reservation.date.slice(0, 4);
    const nowTime = reservation.time.slice(11, 16)
    const time1 = {
        "10:00": "10:00 AM",
        "11:00": "11:00 AM",
        "12:00": "12:00 PM",
        "13:00": "1:00 PM",
        "14:00": "2:00 PM",
        "15:00": "3:00 PM",
        "16:00": "4:00 PM",
        "17:00": "5:00 PM",
        "18:00": "6:00 PM",
        "19:00": "7:00 PM",
        "20:00": "8:00 PM",
        "21:00": "9:00 PM",
    };
    return(
        <div className="reservation-user-list-container">
            <div className="acb3">
                <Link className="link-styling" to={`/restaurants/${reservation.restaurant_id}`}>
                    <img className="user-fav-image" src={imgUrl} alt="spiderman"/>
                </Link>
            </div>

            <div className="abc2">
                <Link className="link-styling" to={`/restaurants/${reservation.restaurant_id}`}>
                    <h1 className="user-reservation-name-list-heading">{restaurants[reservation.restaurant_id].name}</h1>                
                </Link>
                <div className="user-reservation-info">
                    <span>{printDay}</span>
                    <span className="abc">{printMonth}</span>
                    <span className="abc">{printDate}</span>
                    <span className="abc">{printYear}</span>
                </div>
                {/* <h3 className="user-reservation-info">{reservation.date}</h3> */}
                <h3 className="user-reservation-info">{time1[nowTime]}</h3>
                <h3 className="user-reservation-info">Table for {reservation.num_guests}</h3>
            </div>

            <div className="abc4">
                <Link to={`/reservations/${reservation.id}`}>
                    <button className="user-reservation-edit-btn">Edit Reservation</button>
                </Link>
            </div>
        </div>
    )
};

export default UserReservationList;