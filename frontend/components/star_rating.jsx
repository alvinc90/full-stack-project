import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                return <FaStar key={i}/>
            })} 
        </div>
    )
};

export default StarRating;