import React from 'react'; 
import { Link } from 'react-router-dom'

const CityItem = ({city}) => {
    return (
        <div>

            {/* <div className="outer-image-container">

                <div className="inner-image-container">
                    <div>
                        { (city.name === "San Francisco") ? <img className="sf" src={window.sfURL} alt="san francisco" /> : ""}
                    </div>
                    <div>
                        { (city.name === "New York") ? <img className="ny" src={window.nyURL} alt="new york" /> : ""}
                    </div>
                </div>


                <div className="inner-image-container">
                    <div>
                        { (city.name === "Chicago") ? <img className="chicago" src={window.chicagoURL} alt="chicago" /> : ""}
                    </div>
                    <div>
                        { (city.name === "Los Angeles") ? <img className="la" src={window.laURL} alt="los angeles" /> : ""}
                    </div>
                </div>

            </div> */}

        </div>


    )
}; 

export default CityItem; 
