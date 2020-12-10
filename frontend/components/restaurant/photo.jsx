import React from 'react';

const Photos = ({ restaurant }) => {
    if(restaurant.id) {
        console.log("porkchop")
        debugger
        return(
            <div className="photo-container">
                {/* {restaurant.photoUrls.map((url) => {
                    return <img src={url} alt="photo"/> 
                })} */}
                <img src={restaurant.photoUrls[0]} alt="photo"/>
                <img src={restaurant.photoUrls[1]} alt="photo"/>
                <img src={restaurant.photoUrls[2]} alt="photo"/>
            </div>
        )
    } else {
        console.log("pizza")
        debugger
        return null
    }
};

export default Photos;