import React from 'react';

class ReservationFormSticky extends React.Component {
    constructor(props) {
        super(props)
        this.handleFindTable = this.handleFindTable.bind(this);
        this.handleChange = this.handleChange.bind(this);
        const todayDay = new Date().toDateString().slice(8,10);
        const todayMonth = new Date().getMonth() + 1;
        const todayYear = new Date().toDateString().slice(11);
        this.state = {
            num_guests: 2,
            date: `${todayYear}-${todayMonth}-${todayDay}`,
            time: ""
        }
    };

    handleFindTable(e) {
        const bomb = document.getElementsByClassName("time-bomb-container")[0];
        bomb.style.display = "block";
    }

    handleChange(type) {
        // debugger
        return (e) => this.setState({[type] : e.currentTarget.value})
    }

    render() {
        // debugger
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
                        <input 
                            type="time" 
                            className="sticky-date-time"
                            onChange={this.handleChange('time')}
                            value=""
                        />
                    </span>
                </div>
                <div>
                    <button onClick={this.handleFindTable} className="sticky-button">Find a table</button>
                </div>

                <div className="time-bomb-container">
                    <h6 className="sticky-select-time-label">Select a time:</h6>
                    <div className="sticky-time-buttons-container">
                        <button className="sticky-time-bombs">Time 1</button>
                        <button className="sticky-time-bombs">Time 2</button>
                        <button className="sticky-time-bombs">Time 3</button>
                    </div>
                </div>

            </div>
        )
    };
};

export default ReservationFormSticky;