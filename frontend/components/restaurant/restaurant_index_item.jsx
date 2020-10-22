import React from 'react';
import { Link } from 'react-router-dom'

const RestaurantIndexItem = ({ restaurant }) => {
    return (
        <div className="restaurant-index-outer-container">
            <Link to={`/restaurants/${restaurant.id}`}><div className="restaurant-index-container">
                <h1>{restaurant.name}</h1>
                <span>{restaurant.cuisine}</span>
            </div></Link>

        </div>



    )

}; 

export default RestaurantIndexItem; 
