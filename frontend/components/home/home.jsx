import React from 'react'; 
import CityContainer from '../city/city_container'

const Home = () => {
    return (
        <div>
            <div>
                <img className="food" src={window.foodURL} alt="food" />
                <h1 className="home-heading">Find your table for any occasion</h1>
            </div>
            <div className="city-container3">
                <CityContainer />
            </div>

            <footer>
                <p className="footer">I am a footer</p>
            </footer>
            {/* <div className="city-container">
                <div className="first-container">
                    <h4 className="sf">San Francisco</h4>
                    <h4 className="ny">New York</h4>
                </div>
                <div className="second-container">
                    <h4 className="la">Los Angeles</h4>
                    <h4 className="deep-dish">Chicago</h4>
                </div>
            </div> */}

            
        </div>
            


         

   

    )
}; 
 
export default Home;