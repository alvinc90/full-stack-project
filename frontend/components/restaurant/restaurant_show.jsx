import React from 'react'; 

class RestaurantShow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.restaurant.id)
    }

    render() {
        return (
            <div>
                Hello World
                {this.props.restaurant.name}
                {this.props.restaurant.address}
            </div>


        )
    }

}; 

export default RestaurantShow; 