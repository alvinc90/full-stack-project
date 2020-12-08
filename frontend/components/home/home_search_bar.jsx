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
        const todayDay = new Date().toDateString().slice(8,10);
        const todayMonth = new Date().getMonth() + 1;
        const todayYear = new Date().toDateString().slice(11);
        const today = `${todayYear}-${todayMonth}-${todayDay}`
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="search-bar-outer-container">
                        
                        <input 
                            type="date" 
                            className="search-bar-input-date"
                            defaultValue={today}
                            min={today}
                        />
                        <select className="search-bar-input-time" defaultValue="11:00">
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="16:00">4:00 PM</option>
                            <option value="17:00">5:00 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="20:00">8:00 PM</option>
                            <option value="21:00">9:00 PM</option>
                        </select>
                        <select className="search-bar-people-dropdown" defaultValue="2">
                            <option value="1">1 person</option>
                            <option value="2">2 people</option>
                            <option value="3">3 people</option>
                            <option value="4">4 people</option>
                            <option value="5">5 people</option>
                            <option value="6">6 people</option>
                            <option value="7">7 people</option>
                            <option value="8">8 people</option>
                            <option value="9">9 people</option>
                            <option value="10">10 people</option>
                        </select>
                        <select onChange={this.handleSelectCity} className="search-bar-city-dropdown">
                            <option value="All Cities" id="1">All Cities</option>
                            <option value="San Francisco" id="2">San Francisco</option>
                            <option value="New York" id="2">New York</option>
                            <option value="Chicago" id="3">Chicago</option>
                            <option value="Los Angeles" id="4">Los Angeles</option>
                        </select>
                        <input className="search-bar-button" type="submit" value="Let's go"/>

                    </div>
                </form>
            </div>
        )
    }
};

export default withRouter(HomeSearchBar);


