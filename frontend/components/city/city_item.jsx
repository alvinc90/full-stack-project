import React from 'react';
import { Link } from 'react-router-dom'

const CityItem = ({city}) => {
    let cityImg;
    if (city.code === "sf") {
        cityImg = window.sfURL
    } else if(city.code === "ny") {
        cityImg = window.nyURL
    } else if (city.code === "chicago") {
        cityImg = window.chicagoURL
    } else {
        cityImg = window.laURL
    }
    return (
        <div>
            <Link to={`/cities/${city.id}`}><div className="cities-index-container">
                <h1 className="city-heading">{city.name}</h1>
                <img className="sf" src={cityImg} alt={city.name} />
            </div></Link>

        </div>
    )
}; 

export default CityItem; 
