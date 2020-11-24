import React from 'react'; 
import CityContainer from '../city/city_container'
import RestaurantIndexContainer from '../../components/restaurant/restaurant_index_container'
import HomeSearchBar from './home_search_bar';

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
    )
}; 
 
export default Home;


