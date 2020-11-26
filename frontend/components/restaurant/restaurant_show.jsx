import React from 'react';
import StarRating from '../star_rating';
import ReviewIndexContainer from '../review/review_index_container';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
        window.scrollTo(0, 0);
    }

    render() {

        return (
            <div className="outer-show-div">
                <div><img className="dining" src={window.diningURL} alt="dining" /></div>

                <div className="outer-show-container">
                    <div className="inner-show-container">

                        <ul className="show-nav">
                            <li>Overview</li>
                            <li>Photos</li>
                            <li>Menu</li>
                            <li>Reviews</li>
                        </ul>

                        {(this.props.restaurant) ? <h1 className="show-h1">{this.props.restaurant.name}</h1> : console.log("")}
                        <h3 className="show-heading-list">Overview</h3>
                        {(this.props.restaurant) ? <p className="show-description">{this.props.restaurant.description}</p> : console.log("")}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet voluptas tenetur saepe illo alias in architecto labore ex sit exercitationem sint impedit, libero illum ipsam sunt ipsum quibusdam deserunt dolore corrupti possimus placeat laboriosam consequuntur! Dignissimos in fugiat consequatur neque illo unde fuga sed vero reiciendis aperiam ab obcaecati doloremque, atque optio porro, nesciunt laborum! Laborum sint eligendi fugit suscipit alias saepe magni officia nam ex. Ex consequatur voluptas repudiandae vitae quam beatae, ab omnis inventore veniam iure quis, fugiat odio nesciunt non possimus dolorem, minima adipisci quia? Modi iusto quo iure doloribus earum, nisi excepturi voluptate quaerat accusamus.</p>
                        <ReviewIndexContainer />
                    </div>
                    
                    <div className="show-aside-container">
                        < StarRating />
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
                    </div>

                </div>

            </div>
        )
    }
};

export default RestaurantShow; 