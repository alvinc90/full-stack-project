import React from 'react'; 
import CityContainer from '../city/city_container'
import RestaurantIndexContainer from '../../components/restaurant/restaurant_index_container'

const Home = () => {
    return (
        <div>
            <div>
                <img className="food" src={window.foodURL} alt="food" />
                <h1 className="home-heading">Find your table for any occasion</h1>
            </div>
            <div className="city-container3">
                <h1 className="home-header-res">Popular in San Francisco</h1>
                <RestaurantIndexContainer />
                <h1 className="home-header-city">Featured Areas</h1>
                <CityContainer />
            </div>
            
                
            <footer>
                <p className="footer">I am footer</p>
            </footer>

        </div>
    )
}; 
 
export default Home;