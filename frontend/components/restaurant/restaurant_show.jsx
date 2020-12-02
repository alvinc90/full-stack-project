import React from 'react';
import ReviewIndex from '../review/review_index';
import ReviewCreateModal from '../review/review_create';
import { FaStar } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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
        if(this.props.currentUser) {
            this.setState({showModal: !this.state.showModal})
        } else {
            this.props.openModal('login')
        }

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
                clearReview,
                fetchReview } = this.props;
        let reviewRes = this.props.reviews.filter((review) => review.restaurant_id === this.props.restaurant.id);
        let total = 0;
        reviewRes.forEach((rev) => total += rev.overall)
        let avg = total / reviewRes.length
        let rating;
        if (avg >= 4.5) {
            rating = 5
        } else if (avg >= 3.5 && avg < 4.5) {
            rating = 4
        } else if (avg >= 2.5 && avg < 3.5) {
            rating = 3
        } else if (avg >= 1.5 && avg < 2.5) {
            rating = 2
        } else {
            rating = 1
        }
        return (
            <div className="outer-show-div">
                <div><img className="dining" src={window.diningURL} alt="dining" /></div>
                <button className="show-favorite-button">Save this Restaurant</button>
                <div className="outer-show-container">
                    <div className="inner-show-container">

                        <ul className="show-nav">
                            <AnchorLink className="nav-li" href="#to-overview">
                                <li>Overview</li>
                            </AnchorLink>
                            <AnchorLink className="nav-li" href="#to-photos">
                                <li>Photos</li>
                            </AnchorLink>
                            <AnchorLink className="nav-li" href="#to-menu">
                                <li>Menu</li>
                            </AnchorLink>
                            <AnchorLink className="nav-li" href="#to-review">
                                <li>Reviews</li>
                            </AnchorLink>

                        </ul>

                        {(this.props.restaurant) ? <h1 className="show-h1">{this.props.restaurant.name}</h1> : null}

                        <div className="show-content-container">
                            <h3 className="show-heading-list" id="to-overview">Overview</h3>
                            <div className="div1"></div>
                            {(this.props.restaurant) ? <p className="show-description">{this.props.restaurant.description}</p> : null}
                        </div>

                        <div className="show-content-container">
                            <h3 className="show-heading-list" id="to-photos">Photos</h3>
                            <div className="div1"></div>
                        </div>

                        <div className="show-content-container">
                            <h3 className="show-heading-list" id="to-menu">Menu</h3>
                            <div className="div1"></div>
                        </div>


                        <div className="review-outer-container">
                            <div className="review-heading">
                                <h1 className="show-heading-list" id="to-review">What people are saying</h1>
                                <button onClick={this.handleModal} className="leave-review-button">Leave a Review</button>
                            </div>

                            { this.state.showModal ? 
                                <ReviewCreateModal
                                    createReview={createReview}
                                    updateReview={updateReview}
                                    deleteReview={deleteReview}
                                    reviews={reviews}
                                    restaurant={restaurant}
                                    currentUser={currentUser}
                                    clearReview={clearReview}
                                    handleModal={this.handleModal}/>

                                : null

                            }
                            <div>
                                <ReviewIndex 
                                    restaurant={restaurant}
                                    reviews={reviews}
                                    fetchReviews={fetchReviews}
                                    allUsers={allUsers}
                                    fetchAllUsers={fetchAllUsers}
                                    currentUser={currentUser}
                                    deleteReview={deleteReview}
                                    updateReview={updateReview}
                                    fetchReview={fetchReview} />
                            </div>

                        </div>
                    </div>                          
                    
                    <div className="show-aside-container">
                        {[...Array(rating)].map((star) => {
                            return <FaStar color="crimson" />
                        })}
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