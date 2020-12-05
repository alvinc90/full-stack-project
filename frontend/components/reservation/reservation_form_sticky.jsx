import React from 'react';

class ReservationFormSticky extends React.Component {
    constructor(props) {
        super(props)
        this.handleFindTable = this.handleFindTable.bind(this);
    };

    handleFindTable(e) {
        const bomb = document.getElementsByClassName("time-bomb-container")[0];
        bomb.style.display = "block";
    }

    render() {
        return(
            <div className="sticky-outer-container">
                <div>
                    <h1 className="sticky-heading">Make a reservation</h1>
                    <div className="sticky-underline"></div>
                    <div>
                        <h6 className="sticky-labels">Party Size</h6>
                        <select className="sticky-dropdown">
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
                        </select>
                    </div>

                </div>

                <div className="date-time-container">
                    <span className="sticky-date-label">Date</span>
                    <span className="sticky-time-label">Time</span>
                </div>

                <div>
                    <span>
                        <input type="date" id="" className="sticky-date-time"/>
                    </span>
                    <span>
                        <input type="time" id="" className="sticky-date-time"/>
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