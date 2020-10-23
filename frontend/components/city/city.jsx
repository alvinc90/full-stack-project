import React from 'react';
import CityItem from './city_item';
import { Link } from 'react-router-dom'

class City extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCities();
    }

    render() {
        return (
            <div className="outer-image-container">
                    {this.props.cities.map((city, i) => {
                        return (
                            <CityItem  city={city} key={i}/>
                            // <div key ={i}> 
                            //     <li className="city-component2" key={i} >{city.name}</li>

                            //     <div className="outer-image-container">

                            //         <div className="inner-image-container">
                            //             <div>
                            //                 {(city.name === "San Francisco") ? <img className="sf" src={window.sfURL} alt="san francisco" /> : ""}
                            //             </div>   
                            //             <div>
                            //                 {(city.name === "New York") ? <img className="ny" src={window.nyURL} alt="new york" /> : ""}
                            //             </div>
                            //         </div>

                            //         <div className="inner-image-container">
                            //             <div>
                            //                 {(city.name === "Chicago") ? <img className="chicago" src={window.chicagoURL} alt="chicago" /> : ""}
                            //             </div>
                            //             <div>
                            //                 {(city.name === "Los Angeles") ? <img className="la" src={window.laURL} alt="los angeles" /> : ""}
                            //             </div>
                            //         </div>

                            //     </div>
                            // </div>


                        )
                    })}

                {/* <div className="outer-image-container">
                    <div className="inner-image-container">
                        <div>
                            <img className="sf" src={window.sfURL} alt="san francisco" />
                        </div>
                        <div>
                            <img className="ny" src={window.nyURL} alt="new york" />
                        </div>
                    </div>
                    <div className="inner-image-container">
                        <div>
                            <img className="chicago" src={window.chicagoURL} alt="chicago" />
                        </div>
                        <div>
                            <img className="la" src={window.laURL} alt="los angeles" />
                        </div>
                    </div>
                </div> */}

            </div>

        )
    }
};
export default City;

