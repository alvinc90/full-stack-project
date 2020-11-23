import React from 'react'
import RestaurantIndexItem from './restaurant_index_item'
import { fetchAllRestaurants } from '../../actions/restaurant_action';
import RestaurantShow from './restaurant_show';

class RestaurantIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllRestaurants();
    }

    render() {
        return (
            <div className="restaurant-index-outer-container">
                {this.props.restaurants.map((restaurant, i) => {
                    return (
                        <RestaurantIndexItem restaurant={restaurant} key={i} />
                    )
                })}
            </div>
        )
    }
}; 

export default RestaurantIndex; 