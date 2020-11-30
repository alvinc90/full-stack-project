import React from 'react';
import StarRating from '../star_rating';
import ReviewIndex from '../review/review_index';
import ReviewCreate from '../review/review_create';
import SampleModal from './sample_modal';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
        this.handleModal = this.handleModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
        window.scrollTo(0, 0);
    }

    handleModal() {
        this.setState({showModal: !this.state.showModal})
    }

    render() {
        const { restaurant, 
                reviews,
                fetchReviews, 
                allUsers, 
                fetchAllUsers,
                createReview,
                updateReview,
                deleteReview,
                currentUser,
                clearReview } = this.props;
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
                                <button onClick={this.handleModal} className="leave-review-button">Leave a Review</button>
                            </div>

                            {this.state.showModal ? <SampleModal handleModal={this.handleModal} /> : null }

                            <ReviewCreate 
                                createReview={createReview}
                                updateReview={updateReview}
                                deleteReview={deleteReview}
                                reviews={reviews}
                                restaurant={restaurant}
                                currentUser={currentUser}
                                clearReview={clearReview}/>

                            <ReviewIndex 
                                restaurant={restaurant} 
                                reviews={reviews}
                                fetchReviews={fetchReviews}
                                allUsers={allUsers}
                                fetchAllUsers={fetchAllUsers}
                                currentUser={currentUser}
                                deleteReview={deleteReview}
                                updateReview={updateReview} />
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