import React from 'react'
import { fetchAllRestaurants } from '../../actions/restaurant_action';
import RestaurantShow from './restaurant_show';

class RestaurantIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     const cityId = this.props.restaurants.map((restaurant) => {

    //     })
    //     this.props.fetchAllRestaurants()
    // }

    render() {
        return (
            <div>Hello, I am Index Container =(</div>
        )
    }
}; 

export default RestaurantIndex; 