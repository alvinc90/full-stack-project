import React from 'react';
import { withRouter } from 'react-router-dom';

class HomeSearchBar extends React.Component {

    constructor() {
        super();
        this.handleSelectCity = this.handleSelectCity.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            checkedCityName: "All Cities"
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.checkedCityName === "San Francisco" ? this.props.history.push("/cities/1") : null;
        this.state.checkedCityName === "New York" ? this.props.history.push("/cities/2") : null;
        this.state.checkedCityName === "Chicago" ? this.props.history.push("/cities/3") : null;
        this.state.checkedCityName === "Los Angeles" ? this.props.history.push("/cities/4") : null;

    }

    handleSelectCity(e) {
        console.log("I am from Jupiter")
        this.setState({checkedCityName: e.currentTarget.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                            <select onChange={this.handleSelectCity} className="search-bar-city-dropdown">
                                <option value="All Cities" id="1">All Cities</option>
                                <option value="San Francisco" id="2">San Francisco</option>
                                <option value="New York" id="2">New York</option>
                                <option value="Chicago" id="3">Chicago</option>
                                <option value="Los Angeles" id="4">Los Angeles</option>
                            </select>
                            <input className="search-bar-button" type="submit" value="Let's go"/>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
};

export default withRouter(HomeSearchBar);


