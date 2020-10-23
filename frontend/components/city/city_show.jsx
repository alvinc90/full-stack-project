import React from 'react';
import RestaurantIndexContainer from '../restaurant/restaurant_index_container'

class CityShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCity(this.props.match.params.cityId)
    }

    render() {
        // console.log(this.props)
        // debugger 
        return (
            <div>
                {/* {this.props.city.name}  */}
                {/* <h1>hello world</h1> */}
                {/* <RestaurantIndexContainer /> */}
            </div>
        )

    }
};

export default CityShow; 