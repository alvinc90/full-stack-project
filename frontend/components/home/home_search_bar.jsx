import React from 'react';

class HomeSearchBar extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <div className="search-bar-outer-container">
                        
                        <div className="date-time-people-container">
                            <input type="date" className="search-bar-input-date"/>
                            <input type="time" className="search-bar-input-time"/>
                            <select className="search-bar-people-dropdown">
                                <option value="">1 person</option>
                                <option selected value="">2 people</option>
                                <option value="">3 people</option>
                                <option value="">4 people</option>
                                <option value="">5 people</option>
                                <option value="">6 people</option>
                                <option value="">7 people</option>
                                <option value="">8 people</option>
                                <option value="">9 people</option>
                                <option value="">10 people</option>
                                <option value="">Larger Party</option>
                            </select>
                        </div>

                        <div>
                            <select className="search-bar-city-dropdown">
                                <option value="">All Cities</option>
                                <option value="">San Francisco</option>
                                <option value="">New York</option>
                                <option value="">Chicago</option>
                                <option value="">Los Angeles</option>
                            </select>
                            <input className="search-bar-button" type="submit" value="Let's go"/>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
};

export default HomeSearchBar;


