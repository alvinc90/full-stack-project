import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

// const StarRating = () => {
//     return (
//         <div>
//             {[...Array(2)].map((star, i) => {
//                 return <FaStar key={i}/>
//             })} 
//         </div>
//     )
// };

const StarRating = () => {
    const [ rating, setRating ] = useState(null);
    const [ hover, setHover ] = useState(null);

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return(
                    <label>
                        <input
                            className="star-shit" 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            oncClick={() => setRating(ratingValue)}/>

                        <FaStar 
                            className="star" 
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" } 
                            key={i}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeaver={() => setHover(null)} />
                    </label>
                );
            })} 
        </div>
    );
};

export default StarRating;