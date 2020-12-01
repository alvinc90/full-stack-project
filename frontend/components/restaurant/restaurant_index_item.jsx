import React from 'react';
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa';
import StarRating from '../star_rating';

const RestaurantIndexItem = ({ restaurant, reviews }) => {
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
    
    return (
        <div>
            <Link id="link1" to={`/restaurants/${restaurant.id}`}><div className="restaurant-index-container">
                <div>
                    <img className="restaurant-index-picture" src={restaurant.photourl} alt="something"/>
                </div>
                <h1 className="restaurant-index-header">{restaurant.name}</h1>
                <div className="restaurant-index-info">{restaurant.cuisine}</div>
                {[...Array(rating)].map((star) => {
                            return <FaStar color="crimson" />
                        })}
            </div></Link>

        </div>
    )
 
};

export default RestaurantIndexItem;  
