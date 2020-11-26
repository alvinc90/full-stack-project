import React from 'react';
import CityItem from './city_item';

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
                    {this.props.cities.map((city) => {
                        return (
                            <CityItem  city={city} key={city.id}/>
                        )
                    })}
            </div>
        )
    }
};
export default City;

