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
        return (
            <div>
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