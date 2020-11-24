import React from 'react';
import { Link } from 'react-router-dom'
import StarRating from '../star_rating';

const RestaurantIndexItem = ({ restaurant }) => {
    
    return (
        <div>
            <Link id="link1" to={`/restaurants/${restaurant.id}`}><div className="restaurant-index-container">
                <div>
                    <img className="restaurant-index-picture" src={restaurant.photourl} alt="something"/>
                </div>
                <h1 className="restaurant-index-header">{restaurant.name}</h1>
                <div className="restaurant-index-info">{restaurant.cuisine}</div>
                <StarRating />
            </div></Link>

        </div>
    )
 
};

export default RestaurantIndexItem;  
