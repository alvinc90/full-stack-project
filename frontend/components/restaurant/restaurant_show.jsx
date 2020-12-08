import React from 'react';
import ReviewIndex from '../review/review_index';
import ReviewCreateModal from '../review/review_create';
import { FaStar } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Footer from '../footer';
import ReservationFormSticky from '../reservation/reservation_form_sticky';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            favorite: {
                restaurant_id: (this.props.restaurant ? this.props.restaurant.id : null),
                user_id: this.props.currentUser,
            }
        }
        this.handleModal = this.handleModal.bind(this);
        this.handleCreateFavorite = this.handleCreateFavorite.bind(this);
        this.handleDeleteFavorite = this.handleDeleteFavorite.bind(this);
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
        this.props.fetchFavorites();
        window.scrollTo(0, 0);
    }

    handleCreateFavorite(e) {
        if(this.props.currentUser) {
            this.props.createFavorite(this.state.favorite);
        } else {
            this.props.openModal('login')
        }
    }

    handleDeleteFavorite(e) {
        if(this.props.currentUser) {
            this.props.deleteFavorite(parseInt(e.currentTarget.id));
        } else {
            this.props.openModal('login')
        }
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
                fetchReview,
                favorites,
                openModal } = this.props;
        let reviewRes = restaurant ? this.props.reviews.filter((review) => review.restaurant_id === this.props.restaurant.id) : null
        let rating;
        if (restaurant) {
            let total = 0;
            reviewRes.forEach((rev) => total += rev.overall)
            let avg = total / reviewRes.length
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
        } else {
            return null;
        }
        const findFavorite = favorites.find((favorite) => (favorite.user_id === this.state.favorite.user_id) && (favorite.restaurant_id === this.state.favorite.restaurant_id))
        return (
            <div className="outer-show-div">
                <div><img className="dining" src={window.diningURL} alt="dining" /></div>
                { currentUser ? 
                (findFavorite ? <button id={findFavorite.id} className="show-unfavorite-button" onClick={this.handleDeleteFavorite}>Unsafe this Restaurant</button> : <button className="show-favorite-button" onClick={this.handleCreateFavorite}>Save this Restaurant</button>)
                :
                null
                }

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

                    <div>
                        <ReservationFormSticky 
                            currentUser={currentUser}
                            openModal={openModal}
                            restaurant={restaurant}
                        />
                    </div>

                </div>

                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
};

export default RestaurantShow; 