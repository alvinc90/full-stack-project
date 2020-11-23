import React from 'react';

const CityShowRestaurantItem = ({ restaurant }) => {
    // debugger
    return(
        <div>
            {/* {if(restaurant.city_id === )} */}
            <h1>{restaurant.name}</h1>
        </div>
    )
};

export default CityShowRestaurantItem;