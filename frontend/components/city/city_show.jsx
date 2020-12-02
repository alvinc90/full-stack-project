import React from 'react';
import CityShowRestaurantItem from './city_show_item';
import HomeSearchBar from '../home/home_search_bar';
import Footer from '../footer';

class CityShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCity(this.props.match.params.cityId)
        this.props.fetchAllRestaurants();
        this.props.fetchReviews();
        window.scrollTo(0, 0);
    }

    render() {
        let cityImg;
            if (this.props.city.code === "sf") {
                cityImg = window.sfURL
            } else if(this.props.city.code === "ny") {
                cityImg = window.nyURL
            } else if (this.props.city.code === "chicago") {
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
                <div className="city-show-inner-cont">
                    {this.props.city ? this.props.city.name : null}
                    {this.props.restaurants.map((restaurant, i) => {
                        if(this.props.city.id === this.props.restaurants[i].city_id)
                        return (
                            <CityShowRestaurantItem 
                                restaurant={restaurant} 
                                key={restaurant.id}
                                reviews={this.props.reviews}
                            />
                        )
                    })}
                </div>

                <footer>
                    <Footer />
                </footer>
            </div>
        )

    }
};

export default CityShow; 
