import React from 'react';
import CityShowRestaurantItem from './city_show_item'

class CityShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCity(this.props.match.params.cityId)
        this.props.fetchAllRestaurants();
    }

    render() {
        let cityImg;
            if (this.props.city.code === "sf") {
                cityImg = window.sfURL
            } else if(this.props.city.code === "ny") {
                cityImg = window.nyURL
            } else if (this.props.city.code === "chicago") {
                cityImg = window.chicagoURL
            } else {
                cityImg = window.laURL
            }
        return (
            <div>
                <img className="city-show-photo" src={cityImg} alt="city picture"/>
                <h1 className="city-show-heading">Make a free reservation</h1>
                {this.props.city ? this.props.city.name : null}
                {this.props.restaurants.map((restaurant, i) => {
                    if(this.props.city.id === this.props.restaurants[i].city_id)
                    return (
                        <CityShowRestaurantItem restaurant={restaurant} key={i} />
                    )
                })}
            </div>
        )

    }
};

export default CityShow; 