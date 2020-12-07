import React from 'react';
import { Link } from 'react-router-dom';

class ReservationFormSticky extends React.Component {
    constructor(props) {
        super(props)
        this.handleFindTable = this.handleFindTable.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleLoaded = this.handleLoaded.bind(this);
        const todayDay = new Date().toDateString().slice(8,10);
        const todayMonth = new Date().getMonth() + 1;
        const todayYear = new Date().toDateString().slice(11);
        // const nowTime = new Date().toTimeString().slice(0, 5);
        this.state = {
            num_guests: 2,
            date: `${todayYear}-${todayMonth}-${todayDay}`,
            time: "11:00"
        }
    };

    handleFindTable(e) {
        const bomb = document.getElementsByClassName("time-bomb-container")[0];
        const loader = document.getElementById("sticky-loader");
        bomb.style.display = "block";
        loader.style.display = "none";
    }

    handleLoaded() {
        const findTableBtn = document.getElementsByClassName("sticky-button")[0];
        const loader = document.getElementById("sticky-loader");
        if (this.props.currentUser) {
            findTableBtn.style.display = "none";
            loader.style.display = "block"
            setTimeout(this.handleFindTable, 1400);
        } else {
            this.props.openModal('login');
        }
    }

    handleChange(type) {
        return (e) => {
            const findTableBtn = document.getElementsByClassName("sticky-button")[0];
            const bomb = document.getElementsByClassName("time-bomb-container")[0];
            const loader = document.getElementById("sticky-loader");
            findTableBtn.style.display = "block";
            bomb.style.display = "none";
            loader.style.display = "none";
            this.setState({[type] : e.currentTarget.value}) 
        }
    }

    render() {
        // debugger
        const time1 = {
            "10:00": "10:00 AM",
            "11:00": "11:00 AM",
            "12:00": "12:00 PM",
            "13:00": "1:00 PM",
            "14:00": "2:00 PM",
            "15:00": "3:00 PM",
            "16:00": "4:00 PM",
            "17:00": "5:00 PM",
            "18:00": "6:00 PM",
            "19:00": "7:00 PM",
            "20:00": "8:00 PM",
            "21:00": "9:00 PM",
        };
        return(
            <div className="sticky-outer-container">
                <div>
                    <h1 className="sticky-heading">Make a reservation</h1>
                    <div className="sticky-underline"></div>
                    <div>
                        <h6 className="sticky-labels">Party Size</h6>
                        <select onChange={this.handleChange('num_guests')} className="sticky-dropdown">
                            <option value="1">1 person</option>
                            <option selected value="2">2 people</option>
                            <option value="3">3 people</option>
                            <option value="4">4 people</option>
                            <option value="5">5 people</option>
                            <option value="6">6 people</option>
                            <option value="7">7 people</option>
                            <option value="8">8 people</option>
                            <option value="9">9 people</option>
                            <option value="10">10 people</option>
                        </select>
                    </div>

                </div>

                <div className="date-time-container">
                    <span className="sticky-date-label">Date</span>
                    <span className="sticky-time-label">Time</span>
                </div>

                <div>
                    <span>
                        <input 
                            type="date"
                            className="sticky-date-time"
                            value={this.state.date}
                            onChange={this.handleChange('date')}
                        />
                    </span>
                    <span>
                        <select className="sticky-date-time" onChange={this.handleChange('time')} >
                            <option value="10:00">10:00 AM</option>
                            <option selected value="11:00">11:00 AM</option>
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
                    </span>
                </div>
                <div>
                    <div id="sticky-loader"></div>
                    <button onClick={this.handleLoaded} className="sticky-button">Find a table</button>
                </div>

                <div className="time-bomb-container">
                    <h6 className="sticky-select-time-label">Select a time:</h6>
                    <div className="sticky-time-buttons-container">
                        <button className="sticky-time-bombs">Time 1</button>
                        <Link to={{
                            pathname: '/reservation/create/new',
                            state: {
                                num_guests: this.state.num_guests,
                                date: this.state.date,
                                time: this.state.time,
                                restaurant: this.props.restaurant,
                                currentUser: this.props.currentUser
                            }
                        }}>
                            <button className="sticky-time-bombs">{time1[this.state.time]}</button>
                        </Link>
                        <button className="sticky-time-bombs">Time 3</button>
                    </div>
                </div>

            </div>
        )
    };
};

export default ReservationFormSticky;