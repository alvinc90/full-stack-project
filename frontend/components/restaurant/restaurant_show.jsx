import React from 'react';
import StarRating from '../star_rating';
// import ReviewIndexContainer from '../review/review_index_container';
import ReviewIndexItem from '../review/review_index_item';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
        // debugger
    }

    componentDidMount() {
        // debugger
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
        this.props.fetchReviews();
        window.scrollTo(0, 0);
    }

    render() {
        // debugger
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

                        {(this.props.restaurant) ? <h1 className="show-h1">{this.props.restaurant.name}</h1> : null}
                        <h3 className="show-heading-list">Overview</h3>
                        {(this.props.restaurant) ? <p className="show-description">{this.props.restaurant.description}</p> : null}

                        <div className="review-outer-container">
                            <div className="review-heading">
                                <h1 className="show-heading-list">What people are saying</h1>
                                <button className="leave-review-button">Leave a Review</button>
                            </div>

                            {/* <ReviewIndexContainer /> */}
                            {this.props.reviews.map((review) => {
                                if(review.restaurant_id === this.props.restaurant.id) {
                                    return <ReviewIndexItem review={review} key={review.id} />
                                }
                            })}
                        </div>
                    </div>                          
                    
                    <div className="show-aside-container">
                        < StarRating />
                        <label> <h5 className="show-aside-heading">Address</h5>
                            {(this.props.restaurant) ? <p className="show-aside-info">{this.props.restaurant.address}</p> : null}
                        </label>

                        <label> <h5 className="show-aside-heading">Phone Number</h5>
                            {(this.props.restaurant) ? <p className="show-aside-info">{this.props.restaurant.phone_num}</p> : null}
                        </label>

                        <label> <h5 className="show-aside-heading">Hours of Operation</h5>
                            {(this.props.restaurant) ? <p className="show-aside-info">{this.props.restaurant.hours}</p> : null}
                        </label>

                        <label> <h5 className="show-aside-heading">Payment Option</h5>
                            {(this.props.restaurant) ? <p className="show-aside-info">{this.props.restaurant.payment_option}</p> : null}
                        </label>
                        
                        <label> <h5 className="show-aside-heading">Cuisines</h5> 
                            {(this.props.restaurant) ? <p className="show-aside-info">{this.props.restaurant.cuisine}</p> : null}
                        </label>
                    </div>

                </div>

                <footer className="footer">
                <div className="footer-container">
                    <h6>Inspired by OpenTable</h6>
                    <div className="alvin-links-container">
                        <h6 className="my-name">Alvin Chong</h6>
                        <div className="links">
                            <a href="https://www.linkedin.com/in/alvin-chong-4b88011a1/" target="_blank"><img className="links-logo" src={window.liURL} alt="linkedIn"/></a>
                        </div>
                        <div className="links">
                            <a href="https://github.com/alvinc90" target="_blank"><img className="links-logo" src={window.gitURL} alt="github"/></a>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        )
    }
};

export default RestaurantShow; 