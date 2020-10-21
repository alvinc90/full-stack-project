import React from 'react';
import CityItem from './city_item';
import { Link } from 'react-router-dom'

class City extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchCities(); 
    }

    render() {
        return (
            <div>
                <ul className="city-container2">
                    {this.props.cities.map((city, i) => {
                        return(
                            <div className="city-component">
                                <Link className="link-style"><li className="city-component2" key={i} >{city.name}</li></Link>
                            </div>
                        )
                    })} 
                </ul>
            </div>
        )
    }
};
export default City; 
