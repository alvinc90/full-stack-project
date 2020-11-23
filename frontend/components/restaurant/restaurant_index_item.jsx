import React from 'react';
import { Link } from 'react-router-dom'

const RestaurantIndexItem = ({ restaurant }) => {
    
    return (
        <div>
            <Link to={`/restaurants/${restaurant.id}`}><div className="restaurant-index-container">
                <div>
                    <img className="restaurant-index-picture" src={restaurant.photourl} alt="something"/>
                </div>
                <h1 className="restaurant-index-header">{restaurant.name}</h1>
                <div className="restaurant-index-info">{restaurant.cuisine}</div>

            </div></Link>

        </div>



    )
 
}; 

export default RestaurantIndexItem;  
