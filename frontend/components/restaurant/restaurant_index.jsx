import React from 'react'
import RestaurantIndexItem from './restaurant_index_item'

class RestaurantIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllRestaurants();
        this.props.fetchReviews();
    }

    render() {
        return (
            <div className="restaurant-index-outer-container">
                {this.props.restaurants.map((restaurant) => {
                    return (
                        <RestaurantIndexItem restaurant={restaurant} key={restaurant.id} reviews={this.props.reviews} />
                    )
                })}
            </div>
        )
    }
}; 

export default RestaurantIndex;
//