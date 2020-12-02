import React from 'react';

class UserFav extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllRestaurants();
        this.props.fetchFavorites();
    }

    render() {
        const { users, currentUser, restaurants, favorites, deleteFavorite } = this.props;
        const favResId = [];
        const favRes = [];
        debugger
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
                            { favorites.map((favorite) => {
                                if(favorite.user_id === currentUser) {
                                    favResId.push(favorite.restaurant_id)
                                }
                            })}

                            {restaurants.forEach((restaurant) => {
                                favResId.forEach((resId) => {
                                    if (restaurant.id === resId) {
                                        favRes.push(restaurant)
                                    }
                                })
                            })}

                            {favRes.map((favRe) => {
                                return <h1>{favRe.name}</h1>
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