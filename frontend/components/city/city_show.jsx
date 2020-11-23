import React from 'react';
import RestaurantIndexContainer from '../restaurant/restaurant_index_container'

class CityShow extends React.Component {
    constructor(props) {
        // debugger
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchCity(this.props.match.params.cityId)
    }

    render() {
        // debugger
        return (
            <div>
                {this.props.city ? this.props.city.name : null}
                {/* <RestaurantIndexContainer /> */}
            </div>
        )

    }
};

export default CityShow; 