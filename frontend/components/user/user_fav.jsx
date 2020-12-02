import React from 'react';
import Footer from '../footer';
import { Link } from 'react-router-dom';

class UserFav extends React.Component {
    constructor(props){
        super(props)
        this.handleUnfavorite = this.handleUnfavorite.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllRestaurants();
        this.props.fetchFavorites();
    }

    handleUnfavorite(e) {
        const { currentUser } = this.props;
        const findFavorite = this.props.favorites.find((favorite) => (favorite.restaurant_id == e.currentTarget.id) && ( favorite.user_id === currentUser))
        this.props.deleteFavorite(findFavorite.id);
    }

    render() {
        const { currentUser, restaurants, favorites } = this.props;
        const favResId = [];
        const favRes = [];
        return(
            <div>
                <div className="user-show-outer-container">
                    <div className="user-show-inner-container">
                        <div className="user-show-links-container">
                            <div className="links-container">
                                <Link className="link-styling" to="/my/profile"><h1>My Profile</h1></Link>
                                <Link className="link-styling" to="/my/favorites"><h1>My Saved Restaurants</h1></Link>
                                <Link className="link-styling" to="/"><h1>My Reservations</h1></Link>
                            </div>
                        </div>

                        <div className="user-show-info-container">
                            <h1>My favorites</h1>
                            <h1>My Favorite Restaurants</h1>
                            { favorites.map((favorite) => {
                                if(favorite.user_id === currentUser) {
                                    favResId.push(favorite.restaurant_id)
                                }
                            })}

                            {favResId.forEach((resId) => {
                                const findRestaurant = restaurants.find((restaurant) => restaurant.id === resId);
                                if(findRestaurant) favRes.push(findRestaurant)
                            })}

                            {favRes.map((favRe) => {
                                return (
                                    <div>
                                        <h1>{favRe.name}</h1>
                                        <h1>{favRe.phone_num}</h1>
                                        <button 
                                            onClick={this.handleUnfavorite}
                                            id={favRe.id}>
                                            Unfavorite this restaurant
                                        </button>
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