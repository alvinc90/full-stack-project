import React from 'react';
import { Link } from 'react-router-dom'

const RestaurantIndexItem = ({ restaurant }) => {
    return (
        <div className="restaurant-index-outer-container">
            <Link to={`/restaurants/${restaurant.id}`}><div className="restaurant-index-container">
                {restaurant.name}
                {restaurant.cuisine} 
            </div></Link>
        </div>


    )

}; 

export default RestaurantIndexItem; 
