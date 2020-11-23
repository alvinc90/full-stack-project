import React from 'react';
import { Link } from 'react-router-dom'
import StarRating from '../star_rating';

const CityShowRestaurantItem = ({ restaurant }) => {
    return(
        <div className="city-show-item-container">
            <Link to={`/restaurants/${restaurant.id}`}><div>
                <img className="city-show-restaurant-image" src={restaurant.photourl} alt="aws picture"/>
            </div></Link>
            <div className="city-show-item-div">
                <Link className="city-show-item-link" to={`/restaurants/${restaurant.id}`}>
                    <h1 className="city-show-item-heading">{restaurant.name}</h1>
                </Link>
                <StarRating />
                <h6>{restaurant.cuisine}</h6>
                <h6>location under construction</h6>
                <h6>price tag under construction</h6>
            </div>
        </div>
    )
};

export default CityShowRestaurantItem;

