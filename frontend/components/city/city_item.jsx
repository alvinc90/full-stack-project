import React from 'react';
import { Link } from 'react-router-dom'

const CityItem = ({city}) => {
    // debugger
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
            <div><h1 className="city-heading">{city.name}</h1><img className="sf" src={cityImg} alt={city.name} /></div>
            {/* <div className="outer-image-container"> */}

                {/* <div className="inner-image-container"> */}
                    {/* <div>  */}
                        {/* { (city.name === "San Francisco") ? <div><h1 className="city-heading">{city.name}</h1><img className="sf" src={window.sfURL} alt="san francisco" /></div> : ""} */}
                        {/* <div><h1 className="city-heading">{city.name}</h1><img className="sf" src={window.sfURL} alt="san francisco" /></div> */}
                    {/* </div> */}
                    {/* <div> */}
                        {/* {(city.name === "New York") ? <div><h1 className="city-heading">{city.name}</h1><img className="ny" src={window.nyURL} alt="new york" /></div> : ""} */}
                        {/* <div><h1 className="city-heading">{city.name}</h1><img className="ny" src={window.nyURL} alt="new york" /></div> */}
                    {/* </div> */}
                {/* </div> */}


                {/* // <div className="inner-image-container"> */}
                    {/* <div> */}
                        {/* {(city.name === "Chicago") ? <div><h1 className="city-heading">{city.name}</h1><img className="chicago" src={window.chicagoURL} alt="chicago" /></div> : ""} */}
                        {/* <div><h1 className="city-heading">{city.name}</h1><img className="chicago" src={window.chicagoURL} alt="chicago" /></div> */}
                    {/* </div> */}
                    {/* <div> */}
                        {/* {(city.name === "Los Angeles") ? <div><h1 className="city-heading">{city.name}</h1><img className="la" src={window.laURL} alt="los angeles" /></div> : ""} */}
                        {/* <div><h1 className="city-heading">{city.name}</h1><img className="la" src={window.laURL} alt="los angeles" /></div> */}
                    {/* </div> */}
                {/* // </div> */}

            {/* // </div> */}

        </div>


    )
}; 

export default CityItem; 
