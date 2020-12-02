import React from 'react'; 
import CityContainer from '../city/city_container'
import RestaurantIndexContainer from '../../components/restaurant/restaurant_index_container'
import HomeSearchBar from './home_search_bar';
import Footer from '../footer';

const Home = () => {
    return (
        <div>
            <div>
                <img className="food" src={window.foodURL} alt="food" />
                <div className="home-heading-container">
                    <h1 className="home-heading">Find your table for any occasion</h1>
                    <span className="home-search-bar-container"><HomeSearchBar /></span>
                </div>
            </div>

            <div className="city-container3">
                <h1 className="home-header-res">Popular in San Francisco</h1>
                <RestaurantIndexContainer />
                <h1 className="home-header-city">Featured Areas</h1>
                <CityContainer />
            </div>
            
            <footer>
                <Footer />
            </footer>
        </div>
    )
}; 
 
export default Home;


