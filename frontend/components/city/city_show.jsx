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
            checkedPriceValue: {}
        }
    }

    componentDidMount() {
        this.props.fetchCity(this.props.match.params.cityId)
        this.props.fetchAllRestaurants();
        this.props.fetchReviews();
        window.scrollTo(0, 0);
    };

    handleCheckedValues(e) {
        debugger
        const checkedPriceValue = {...this.state.checkedPriceValue}
        const priceValue = e.currentTarget.value
        checkedPriceValue[priceValue] = e.currentTarget.checked
        // e.currentTarget.checked ? this.state.truePriceValue.push(e.currentTarget.value) : null
        this.setState({checkedPriceValue})
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
                                    id=""
                                    value="2"
                                    onClick={this.handleCheckedValues}
                                />
                                <label>$2</label>
                                <AttachMoneyIcon />
                            </div>
                            <div>
                                <input 
                                    type="checkbox" 
                                    id=""
                                    value="3"
                                    onClick={this.handleCheckedValues}
                                />
                                <label>$3</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox" 
                                    id=""
                                    value="4"
                                    onClick={this.handleCheckedValues}
                                />
                                <label>$4</label>    
                            </div>
                        </div>
                        <div>
                            <h2>rating</h2>
                            <div>
                                <input type="checkbox" id=""/>
                                <label>
                                    {[...Array(5)].map((star) => {
                                        return <FaStar color="crimson" />
                                    })}
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" id=""/>
                                    {[...Array(4)].map((star) => {
                                        return <FaStar color="crimson" />
                                    })}
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" id=""/>
                                    {[...Array(3)].map((star) => {
                                        return <FaStar color="crimson" />
                                    })}
                                </label>
                            </div>
                        </div>
                        <div>
                           <h2>cuisine</h2>
                            <div>
                                <input type="checkbox" id=""/>
                                <label>Peruvian</label>
                            </div>
                            <div>
                                <input type="checkbox" id=""/>
                                <label>Japanese</label>
                            </div>
                            <div>
                                <input type="checkbox" id=""/>
                                <label>American</label>
                            </div>
                            <div>
                                <input type="checkbox" id=""/>
                                <label>Brazillian</label>
                            </div>
                            <div>
                                <input type="checkbox" id=""/>
                                <label>Chinese</label>
                            </div>
                            <div>
                                <input type="checkbox" id=""/>
                                <label>Italian</label>
                            </div>
                            <div>
                                <input type="checkbox" id=""/>
                                <label>Turkish</label>
                            </div>
                            <div>
                                <input type="checkbox" id=""/>
                                <label>Pizzeria</label>
                            </div>
                            <div>
                                <input type="checkbox" id=""/>
                                <label>Fine Dining</label>
                            </div>
                            <div>
                                <input type="checkbox" id=""/>
                                <label>Indian</label>
                            </div>
                            <div>
                                <input type="checkbox" id=""/>
                                <label>Mediterranean</label>
                            </div>
                            <div>
                                <input type="checkbox" id=""/>
                                <label>Korean</label>
                            </div>
                            <div>
                                <input type="checkbox" id=""/>
                                <label>Southeast Asian</label>
                            </div>
                            <div>
                                <input type="checkbox" id=""/>
                                <label>Seafood</label>
                            </div>
                        </div>
                    </div>

                    <div className="city-show-inner-cont">
                        {this.props.city ? <h1 className="city-show-heading"> {this.props.city.name}</h1> : null}
                        {this.props.restaurants.map((restaurant, i) => {
                            const priceKeys = Object.keys(this.state.checkedPriceValue);
                            const priceValues = Object.values(this.state.checkedPriceValue);
                            const allFalseValues = priceValues.every((bool) => bool === false);
                            const resPrice = restaurant.price;
                            
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
                                // render the restaurant when the checkmark is true
                            } else if ( (this.props.city.id === this.props.restaurants[i].city_id) && (this.state.checkedPriceValue[resPrice]) ) {
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
