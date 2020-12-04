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
        this.handleCheckedValues = this.handleCheckedValues.bind(this);
        this.state = {
            checkedPriceIds: {}
        }
    }

    componentDidMount() {
        this.props.fetchCity(this.props.match.params.cityId)
        this.props.fetchAllRestaurants();
        this.props.fetchReviews();
        window.scrollTo(0, 0);
    };

    handleCheckedValues(e) {
        const checkedPriceIds = {...this.state.checkedPriceIds}
        const priceId = e.currentTarget.id
        checkedPriceIds[priceId] = e.currentTarget.checked
        this.setState({checkedPriceIds})
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
                        <div>
                            <h2>Price</h2>
                            <div>
                                <input 
                                    type="checkbox" 
                                    id="2"
                                    value=""
                                    onClick={this.handleCheckedValues}
                                />
                                <label>$2</label>
                                <AttachMoneyIcon />
                            </div>
                            <div>
                                <input 
                                    type="checkbox" 
                                    id="3"
                                    value=""
                                    onClick={this.handleCheckedValues}
                                />
                                <label>$3</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox" 
                                    id="4"
                                    value=""
                                    onClick={this.handleCheckedValues}
                                />
                                <label>$4</label>    
                            </div>
                        </div>
                        <div>
                            <h2>rating</h2>
                            <div>
                                <input type="checkbox" id="25" onClick={this.handleCheckedValues}/>
                                <label>
                                    {[...Array(5)].map((star) => {
                                        return <FaStar color="crimson" />
                                    })}
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" id="24" onClick={this.handleCheckedValues}/>
                                    {[...Array(4)].map((star) => {
                                        return <FaStar color="crimson" />
                                    })}
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" id="23" onClick={this.handleCheckedValues}/>
                                    {[...Array(3)].map((star) => {
                                        return <FaStar color="crimson" />
                                    })}
                                </label>
                            </div>
                        </div>
                        <div>
                           <h2>cuisine</h2>
                            <div>
                                <input type="checkbox" id="5" onClick={this.handleCheckedValues}/>
                                <label>Peruvian</label>
                            </div>
                            <div>
                                <input type="checkbox" id="6" onClick={this.handleCheckedValues}/>
                                <label>Japanese</label>
                            </div>
                            <div>
                                <input type="checkbox" id="7" onClick={this.handleCheckedValues}/>
                                <label>American</label>
                            </div>
                            <div>
                                <input type="checkbox" id="8" onClick={this.handleCheckedValues}/>
                                <label>Brazillian</label>
                            </div>
                            <div>
                                <input type="checkbox" id="9" onClick={this.handleCheckedValues}/>
                                <label>Chinese</label>
                            </div>
                            <div>
                                <input type="checkbox" id="10" onClick={this.handleCheckedValues}/>
                                <label>Italian</label>
                            </div>
                            <div>
                                <input type="checkbox" id="11" onClick={this.handleCheckedValues}/>
                                <label>Turkish</label>
                            </div>
                            <div>
                                <input type="checkbox" id="12" onClick={this.handleCheckedValues}/>
                                <label>Pizzeria</label>
                            </div>
                            <div>
                                <input type="checkbox" id="13" onClick={this.handleCheckedValues}/>
                                <label>Fine Dining</label>
                            </div>
                            <div>
                                <input type="checkbox" id="14" onClick={this.handleCheckedValues}/>
                                <label>Indian</label>
                            </div>
                            <div>
                                <input type="checkbox" id="15" onClick={this.handleCheckedValues}/>
                                <label>Mediterranean</label>
                            </div>
                            <div>
                                <input type="checkbox" id="16" onClick={this.handleCheckedValues}/>
                                <label>Korean</label>
                            </div>
                            <div>
                                <input type="checkbox" id="17" onClick={this.handleCheckedValues}/>
                                <label>Southeast Asian</label>
                            </div>
                            <div>
                                <input type="checkbox" id="18" onClick={this.handleCheckedValues}/>
                                <label>Seafood</label>
                            </div>
                        </div>
                    </div>

                    <div className="city-show-inner-cont">
                        {this.props.city ? <h1 className="city-show-heading"> {this.props.city.name}</h1> : null}
                        {this.props.restaurants.map((restaurant, i) => {
                            const priceKeys = Object.keys(this.state.checkedPriceIds);
                            const priceValues = Object.values(this.state.checkedPriceIds);
                            const allFalseValues = priceValues.every((bool) => bool === false);
                            const resPrice = restaurant.price;
                            const cuisineId = {
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
                            let cuisine = this.props.restaurants[i].cuisine;
                            let c1 = cuisineId[cuisine]

                            let reviewRes = this.props.reviews.filter((review) => review.restaurant_id === restaurant.id);
                            let total = 0;
                            reviewRes.forEach((rev) => total += rev.overall)
                            let avg = total / reviewRes.length
                            let rating;
                            if (avg >= 4.5) {
                                rating = 25
                            } else if (avg >= 3.5 && avg < 4.5) {
                                rating = 24
                            } else if (avg >= 2.5 && avg < 3.5) {
                                rating = 23
                            } else if (avg >= 1.5 && avg < 2.5) {
                                rating = 22
                            } else {
                                rating = 21
                            }

                            // only good for initial render
                            // render the restaurant when the state is empty
                            if((this.props.city.id === this.props.restaurants[i].city_id) && (!priceKeys.length)) {
                                return (
                                    <div className="city-list-outer-container">
                                        <CityShowRestaurantItem 
                                            restaurant={restaurant} 
                                            key={restaurant.id}
                                            reviews={this.props.reviews}
                                            city={this.props.city}
                                        />
                                    </div>
                                )
                                // render the restaurant when ALL check marks are false
                            } else if ( (this.props.city.id === this.props.restaurants[i].city_id) && (allFalseValues)) {
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
                                // render the restaurant when the checkmark is true for price
                            } else if ( (this.props.city.id === this.props.restaurants[i].city_id) && (this.state.checkedPriceIds[resPrice]) ) {
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
                                // render the restaurant when the checkmark is true for cuisine
                            } else if ( (this.props.city.id === this.props.restaurants[i].city_id) && this.state.checkedPriceIds[c1] ) {
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
                                // render the restaurant when the checkmark is true for rating
                            } else if ( (this.props.city.id === this.props.restaurants[i].city_id) && this.state.checkedPriceIds[rating] ) {
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
