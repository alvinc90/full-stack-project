import React from 'react';
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa';
// import StarRating from '../star_rating';

const CityShowRestaurantItem = ({ restaurant, reviews}) => {
    let reviewRes = reviews.filter((review) => review.restaurant_id === restaurant.id);
        let total = 0;
        reviewRes.forEach((rev) => total += rev.overall)
        let avg = total / reviewRes.length
        let rating;
        if (avg >= 4.5) {
            rating = 5
        } else if (avg >= 3.5 && avg < 4.5) {
            rating = 4
        } else if (avg >= 2.5 && avg < 3.5) {
            rating = 3
        } else if (avg >= 1.5 && avg < 2.5) {
            rating = 2
        } else {
            rating = 1
        }
    return(
        <div className="city-show-item-container">
            <Link to={`/restaurants/${restaurant.id}`}><div>
                <img className="city-show-restaurant-image" src={restaurant.photourl} alt="aws picture"/>
            </div></Link>
            <div className="city-show-item-div">
                <Link className="city-show-item-link" to={`/restaurants/${restaurant.id}`}>
                    <h1 className="city-show-item-heading">{restaurant.name}</h1>
                </Link>
                {/* <StarRating /> */}
                {[...Array(rating)].map((star) => {
                    return <FaStar color="crimson" />
                })}
                <h6>{restaurant.cuisine}</h6>
                <h6>location under construction</h6>
                <h6>price tag under construction</h6>
            </div>
        </div>
    )
};

export default CityShowRestaurantItem;

