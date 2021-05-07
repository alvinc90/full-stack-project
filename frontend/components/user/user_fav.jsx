import React from 'react';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

class UserFav extends React.Component {
    constructor(props){
        super(props)
        this.handleUnfavorite = this.handleUnfavorite.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllRestaurants();
        this.props.fetchFavorites();
        this.props.fetchReviews();
    }

    handleUnfavorite(e) {
        const { currentUser } = this.props;
        const findFavorite = this.props.favorites.find((favorite) => (favorite.restaurant_id == e.currentTarget.id) && ( favorite.user_id === currentUser))
        this.props.deleteFavorite(findFavorite.id);
    }

    render() {
        const { restaurants, favorites, reviews } = this.props;
        if(!favorites.length) return null;
        if(!Object.values(restaurants).length) return null;
        const favRes = [];
        // debugger
        return(
            <div>
                <div className="user-show-outer-container">
                    <div className="user-show-inner-container">
                        <div className="user-show-links-container">
                            <div className="links-container">
                                <Link className="link-styling" to="/my/profile"><h1 id="dcba">My Profile</h1></Link>
                                <Link className="link-styling" to="/my/favorites"><h1 id="abcd">My Saved Restaurants</h1></Link>
                                <Link className="link-styling" to="/my/reservations"><h1 id="dcba">My Reservations</h1></Link>
                            </div>
                        </div>

                        <div className="user-show-info-container2">
                            <h1 className="profile-heading">My favorites</h1>
                            <div className="line-below-heading"></div>

                            {favorites.forEach((favorite) => {
                                let findRestaurant = restaurants[favorite.restaurant_id];
                                favRes.push(findRestaurant);
                            })}

                            {favRes.map((favRe) => {
                                let reviewRes = reviews.filter((review) => review.restaurant_id === favRe.id);
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
                                    <div className="fav-list-container">
                                        <div className="that3">
                                            <Link to={`/restaurants/${favRe.id}`}>
                                                <img 
                                                    className="user-fav-image" 
                                                    src={favRe.photourl} 
                                                    alt="aws picture"
                                                />
                                            </Link>
                                        </div>
                                        <div className="restaurant-fav-info">
                                            <div>
                                                <Link className="link-styling" to={`/restaurants/${favRe.id}`}>
                                                    <h1 className="that1">{favRe.name}</h1>
                                                </Link>
                                                {[...Array(rating)].map((star) => {
                                                    return <FaStar color="crimson" />
                                                })}
                                                <h1 className="that2">{favRe.cuisine}</h1>
                                            </div>
                                        </div>
                                        <div className="btn-container-fav">
                                            <button
                                                className="fav-remove-btn"
                                                onClick={this.handleUnfavorite}
                                                id={favRe.id}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>          
                                )
                            })}
                        </div>
                    </div>
                    
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
        )
    }

};

export default UserFav;
