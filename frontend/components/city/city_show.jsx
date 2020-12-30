import React from 'react';
import CityShowRestaurantItem from './city_show_item';
import HomeSearchBar from '../home/home_search_bar';
import Footer from '../footer';
import { FaStar } from 'react-icons/fa';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

class CityShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleCheckedPrice = this.handleCheckedPrice.bind(this);
        this.handleCheckedRating = this.handleCheckedRating.bind(this);
        this.handleCheckedCuisine = this.handleCheckedCuisine.bind(this);
        this.state = {
            checkedPriceIds: {},
            checkedRatingIds: {},
            checkedCuisineIds: {},
        }
    }

    componentDidMount() {
        this.props.fetchCity(this.props.match.params.cityId)
        this.props.fetchAllRestaurants();
        this.props.fetchReviews();
        window.scrollTo(0, 0);
    };

    handleCheckedPrice(e) {
        const checkedPriceIds = {...this.state.checkedPriceIds}
        const priceId = e.currentTarget.id
        checkedPriceIds[priceId] = e.currentTarget.checked
        this.setState({checkedPriceIds})
    };

    handleCheckedRating(e) {
        const checkedRatingIds = {...this.state.checkedRatingIds}
        const ratingId = e.currentTarget.id
        checkedRatingIds[ratingId] = e.currentTarget.checked
        this.setState({checkedRatingIds})
    };

    handleCheckedCuisine(e) {
        const checkedCuisineIds = {...this.state.checkedCuisineIds}
        const cuisineId = e.currentTarget.id
        checkedCuisineIds[cuisineId] = e.currentTarget.checked
        this.setState({checkedCuisineIds})
    };

    render() {
        let cityImg;
            if (!this.props.city ? null : this.props.city.code === "sf") {
                cityImg = window.sfURL
            } else if(!this.props.city ? null : this.props.city.code === "ny") {
                cityImg = window.nyURL
            } else if (!this.props.city ? null : this.props.city.code === "chicago") {
                cityImg = window.chicagoURL
            } else {
                cityImg = window.laURL
            }
        return (
            <div>
                <img className="food" src={cityImg} alt="city picture"/>
                <div className="home-heading-container">
                    <h1 className="home-heading">Make a free reservation</h1>
                    <div className="home-search-bar-container"><HomeSearchBar /></div>
                </div>
                <div className="city-show-content-outer-container">
                    <div className="city-show-side-bar-container">
                        <div className="m1">
                            <h2 className="n1">Price</h2>
                            <div>
                                <input 
                                    type="checkbox" 
                                    id="4"
                                    onClick={this.handleCheckedPrice}
                                />
                                <label>$$$$</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox" 
                                    id="3"
                                    onClick={this.handleCheckedPrice}
                                />
                                <label>$$$</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox" 
                                    id="2"
                                    onClick={this.handleCheckedPrice}
                                />
                                <label>$$</label>    
                            </div>
                        </div>
                        <div className="m2">
                            <h2 className="n1">Rating</h2>
                            <div>
                                <input type="checkbox" id="25" onClick={this.handleCheckedRating}/>
                                <label>
                                    {[...Array(5)].map((star) => {
                                        return <FaStar color="crimson" />
                                    })}
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" id="24" onClick={this.handleCheckedRating}/>
                                    {[...Array(4)].map((star) => {
                                        return <FaStar color="crimson" />
                                    })}
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" id="23" onClick={this.handleCheckedRating}/>
                                    {[...Array(3)].map((star) => {
                                        return <FaStar color="crimson" />
                                    })}
                                </label>
                            </div>
                        </div>
                        <div className="m3">
                           <h2 className="n1">Cuisine</h2>
                            <div>
                                <input type="checkbox" id="5" onClick={this.handleCheckedCuisine}/>
                                <label>Peruvian</label>
                            </div>
                            <div>
                                <input type="checkbox" id="6" onClick={this.handleCheckedCuisine}/>
                                <label>Japanese</label>
                            </div>
                            <div>
                                <input type="checkbox" id="7" onClick={this.handleCheckedCuisine}/>
                                <label>American</label>
                            </div>
                            <div>
                                <input type="checkbox" id="8" onClick={this.handleCheckedCuisine}/>
                                <label>Brazillian</label>
                            </div>
                            <div>
                                <input type="checkbox" id="9" onClick={this.handleCheckedCuisine}/>
                                <label>Chinese</label>
                            </div>
                            <div>
                                <input type="checkbox" id="10" onClick={this.handleCheckedCuisine}/>
                                <label>Italian</label>
                            </div>
                            <div>
                                <input type="checkbox" id="11" onClick={this.handleCheckedCuisine}/>
                                <label>Turkish</label>
                            </div>
                            <div>
                                <input type="checkbox" id="12" onClick={this.handleCheckedCuisine}/>
                                <label>Pizzeria</label>
                            </div>
                            <div>
                                <input type="checkbox" id="13" onClick={this.handleCheckedCuisine}/>
                                <label>Fine Dining</label>
                            </div>
                            <div>
                                <input type="checkbox" id="14" onClick={this.handleCheckedCuisine}/>
                                <label>Indian</label>
                            </div>
                            <div>
                                <input type="checkbox" id="15" onClick={this.handleCheckedCuisine}/>
                                <label>Mediterranean</label>
                            </div>
                            <div>
                                <input type="checkbox" id="16" onClick={this.handleCheckedCuisine}/>
                                <label>Korean</label>
                            </div>
                            <div>
                                <input type="checkbox" id="17" onClick={this.handleCheckedCuisine}/>
                                <label>Southeast Asian</label>
                            </div>
                            <div>
                                <input type="checkbox" id="18" onClick={this.handleCheckedCuisine}/>
                                <label>Seafood</label>
                            </div>
                        </div>
                    </div>

                    <div className="city-show-inner-cont">
                        {this.props.city ? <h1 className="city-show-heading"> {this.props.city.name}</h1> : null}
                        {this.props.restaurants.map((restaurant) => {
                            const priceKeysIdsArr = Object.keys(this.state.checkedPriceIds);
                            const ratingKeysIdsArr = Object.keys(this.state.checkedRatingIds);
                            const cuisineKeysIdsArr = Object.keys(this.state.checkedCuisineIds);

                            const priceValuesBooleanArr = Object.values(this.state.checkedPriceIds);
                            const ratingValuesBooleanArr = Object.values(this.state.checkedRatingIds);
                            const cuisineValuesBooleanArr = Object.values(this.state.checkedCuisineIds);

                            const allPriceFalse = priceValuesBooleanArr.every((bool) => bool === false);
                            const allRatingFalse = ratingValuesBooleanArr.every((bool) => bool === false);
                            const allCuisineFalse = cuisineValuesBooleanArr.every((bool) => bool === false);

                            const combineAllBooleanArr = priceValuesBooleanArr.concat(ratingValuesBooleanArr).concat(cuisineValuesBooleanArr)
                            const allFalseValues = combineAllBooleanArr.every((bool) => bool === false);
                            
                            const { city, reviews } = this.props;
                            const { checkedPriceIds, checkedCuisineIds, checkedRatingIds } = this.state;
                            const priceId = restaurant.price;

                            const cuisineIds = {
                                Peruvian: 5,
                                Japanese: 6,
                                American: 7,
                                Brazillian: 8,
                                Chinese: 9,
                                Italian: 10,
                                Turkish: 11,
                                Pizzeria: 12,
                                "Fine Dining": 13,
                                Indian: 14,
                                Mediterranean: 15,
                                Korean: 16,
                                "Southeast Asian": 17,
                                Seafood: 18
                            };
                            const cuisine = restaurant.cuisine;
                            const cuisineId = cuisineIds[cuisine]

                            let findReview = reviews.filter((review) => review.restaurant_id === restaurant.id);
                            let total = 0;
                            findReview.forEach((rev) => total += rev.overall)
                            let avg = total / findReview.length
                            let ratingId;
                            if (avg >= 4.5) {
                                ratingId = 25
                            } else if (avg >= 3.5 && avg < 4.5) {
                                ratingId = 24
                            } else if (avg >= 2.5 && avg < 3.5) {
                                ratingId = 23
                            } else if (avg >= 1.5 && avg < 2.5) {
                                ratingId = 22
                            } else {
                                ratingId = 21
                            }

                            // render the restaurant when ALL check marks are false
                            if ( (city.id === restaurant.city_id) && (allFalseValues)) {
                                return(
                                    <div className="city-list-outer-container">
                                        <CityShowRestaurantItem 
                                            restaurant={restaurant} 
                                            key={restaurant.id}
                                            reviews={this.props.reviews}
                                            city={this.props.city}
                                        />
                                    </div>
                                )
                            } 
                            // price, rating, cuisine, true
                            else if ( (city.id === restaurant.city_id) && (checkedPriceIds[priceId]) && (checkedCuisineIds[cuisineId]) && (checkedRatingIds[ratingId]) ) {
                                return(
                                    <div className="city-list-outer-container">
                                        <CityShowRestaurantItem 
                                            restaurant={restaurant} 
                                            key={restaurant.id}
                                            reviews={this.props.reviews}
                                            city={this.props.city}
                                        />
                                    </div>
                                )
                            }
                            // price, rating, true... cuisine: false
                            else if ( (city.id === restaurant.city_id) && (checkedPriceIds[priceId] && checkedRatingIds[ratingId] ) && ( allCuisineFalse ) ) {
                                return(
                                    <div className="city-list-outer-container">
                                        <CityShowRestaurantItem 
                                            restaurant={restaurant} 
                                            key={restaurant.id}
                                            reviews={this.props.reviews}
                                            city={this.props.city}
                                        />
                                    </div>
                                )
                            }
                            // price, cuisine, true.... rating: false
                            else if ( (city.id === restaurant.city_id) && ( checkedPriceIds[priceId] && checkedCuisineIds[cuisineId] ) && ( allRatingFalse  )) {
                                return(
                                    <div className="city-list-outer-container">
                                        <CityShowRestaurantItem 
                                            restaurant={restaurant} 
                                            key={restaurant.id}
                                            reviews={this.props.reviews}
                                            city={this.props.city}
                                        />
                                    </div>
                                )
                            }
                            // rating, cuisine, true.... price : false
                            else if ( (city.id === restaurant.city_id) && ( checkedRatingIds[ratingId] && checkedCuisineIds[cuisineId] ) && ( allPriceFalse ) ) {
                                return(
                                    <div className="city-list-outer-container">
                                        <CityShowRestaurantItem 
                                            restaurant={restaurant} 
                                            key={restaurant.id}
                                            reviews={this.props.reviews}
                                            city={this.props.city}
                                        />
                                    </div>
                                )
                            }
                            // render the restaurant when the checkmark is true for price ONLY
                            else if ( (city.id === restaurant.city_id) && (checkedPriceIds[priceId]) && ( allRatingFalse && allCuisineFalse ) ) {
                                return(
                                    <div className="city-list-outer-container">
                                        <CityShowRestaurantItem 
                                            restaurant={restaurant} 
                                            key={restaurant.id}
                                            reviews={this.props.reviews}
                                            city={this.props.city}
                                        />
                                    </div>
                                )
                            } 
                             // render the restaurant when the checkmark is true for cuisine ONLY
                            else if ( (city.id === restaurant.city_id) && (checkedCuisineIds[cuisineId]) && ( allPriceFalse && allRatingFalse ) ) {
                                return(
                                    <div className="city-list-outer-container">
                                        <CityShowRestaurantItem 
                                            restaurant={restaurant} 
                                            key={restaurant.id}
                                            reviews={this.props.reviews}
                                            city={this.props.city}
                                        />
                                    </div>
                                )
                            }
                            // render the restaurant when the checkmark is true for rating ONLY
                            else if ( (city.id === restaurant.city_id) && (checkedRatingIds[ratingId]) && ( allPriceFalse && allCuisineFalse ) ) {
                                return(
                                    <div className="city-list-outer-container">
                                        <CityShowRestaurantItem 
                                            restaurant={restaurant} 
                                            key={restaurant.id}
                                            reviews={this.props.reviews}
                                            city={this.props.city}
                                        />
                                    </div>
                                )
                            } 
                        })}
                    </div>
                 </div>

                <footer>
                    <Footer />
                </footer>
            </div>
        )

    }
};

export default CityShow; 
