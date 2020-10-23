import React from 'react';

class RestaurantShow extends React.Component {

    constructor(props) {
        // console.log(props) 
        super(props)
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
    }

    render() {
        // debugger
        // console.log(this.props);
        return (
            <div className="outer-show-div">
                <img className="dining" src={window.diningURL} alt="dining" />
                <div className="inner-show-container">

                    <ul className="show-nav">
                        <li>Overview</li>
                        <li>Photos</li>
                        <li>Menu</li>
                        <li>Reviews</li>
                    </ul>

                    {(this.props.restaurant) ? <h1 className="show-h1">{this.props.restaurant.name}</h1> : console.log("")}
                    {/* {(this.props.restaurant) ? <ul className="show-ul"><li>{this.props.restaurant.cuisine}</li></ul> : console.log("")} */}
                    <h3 className="show-heading-list">Overview</h3>
                    {(this.props.restaurant) ? <p className="show-description">{this.props.restaurant.description}</p> : console.log("")}

                    <aside className="show-aside-container">
                        <label> <h5 className="show-aside-heading">Address</h5>
                            {(this.props.restaurant) ? <p className="show-aside-info">{this.props.restaurant.address}</p> : console.log("")}
                        </label>

                        <label> <h5 className="show-aside-heading">Phone Number</h5>
                            {(this.props.restaurant) ? <p className="show-aside-info">{this.props.restaurant.phone_num}</p> : console.log("")}
                        </label>

                        <label> <h5 className="show-aside-heading">Hours of Operation</h5>
                            {(this.props.restaurant) ? <p className="show-aside-info">{this.props.restaurant.hours}</p> : console.log("")}
                        </label>

                        <label> <h5 className="show-aside-heading">Payment Option</h5>
                            {(this.props.restaurant) ? <p className="show-aside-info">{this.props.restaurant.payment_option}</p> : console.log("")}
                        </label>
                        
                        <label> <h5 className="show-aside-heading">Cuisines</h5> 
                            {(this.props.restaurant) ? <p className="show-aside-info">{this.props.restaurant.cuisine}</p> : console.log("")}
                        </label>
                    </aside>


                </div>

                {/* {console.log(this.props.name)}  */}
                {/* {console.log(this.props.restaurant) } */}
                {/* {console.log(this.props.restaurant.name) } */}
                {/* {this.props.restaurant.name}  */}
            </div>
        )
    }
};

export default RestaurantShow; 