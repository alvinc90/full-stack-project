import React from 'react';

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
        debugger
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
                            <h1>My Profile</h1>
                            <h1>My Saved Restaurants</h1>
                            <h1>My Reservations</h1>
                        </div>
                        <div className="user-show-info-container">
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
            </div>
        )
    }

};

export default UserFav;