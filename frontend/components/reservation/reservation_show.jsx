import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer';
import { withRouter } from 'react-router-dom';
import ReservationDeleteModal from './reservation_delete_modal';

class ReservationShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleModify = this.handleModify.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleLoaded3 = this.handleLoaded3.bind(this);
        this.handleLoaded2 = this.handleLoaded2.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
        const { reservation } = this.props;
        this.state = {
            id: (reservation ? reservation.id : null),
            num_guests: (reservation ? reservation.num_guests: null),
            date: (reservation ? reservation.date: null),
            time: (reservation ? reservation.time.slice(11, 16): null),
            special_request: (reservation ? reservation.special_request: null),
            reserved: (reservation ? reservation.reserved: null),
            user_id: (reservation ? reservation.user_id: null),
            restaurant_id: (reservation ? reservation.restaurant_id: null),
            showDeleteModal: false
        }
    }

    componentDidMount() {
        this.props.fetchAllRestaurants();
        this.props.fetchReservation(this.props.match.params.reservationId);
    }

    handleUpdate(timer) {
        return (e) => {
            const timeBtn = document.getElementsByClassName("ninety-9-ranch")[0];
            const editBtn = document.getElementsByClassName("edit-form-button-container")[0];
            const inputS = document.getElementById("re256");
            const updatedData = {
                id: ( this.state.id ? this.state.id : this.props.reservation.id ),
                num_guests: ( this.state.num_guests ? this.state.num_guests : this.props.reservation.num_guests ),
                date: ( this.state.date ? this.state.date : this.props.reservation.date ),
                time: ( this.state.time ? timer : this.props.reservation.time ),
                special_request: ( this.state.special_request ? this.state.special_request : this.props.reservation.special_request ),
                reserved: true,
                user_id: ( this.state.user_id ? this.state.user_id : this.props.reservation.user_id ),
                restaurant_id: ( this.state.restaurant_id ? this.state.restaurant_id : this.props.reservation.restaurant_id ),
            }
            this.props.updateReservation(updatedData)
                .then(this.props.history.push(`/reservations/${this.props.reservation.id}`));
            timeBtn.style.display = "none";
            inputS.style.display = "none";
            editBtn.style.display = "none";
            window.scrollTo(0, 0);
        }

    }

    handleChange(type) {
        return(e) => {
            const timeBtn = document.getElementsByClassName("ninety-9-ranch")[0];
            const searchBtn = document.getElementsByClassName("re37")[0];
            searchBtn.style.display = "block";
            timeBtn.style.display = "none";
            this.setState({ [type]: e.currentTarget.value})

        } 
    }

    handleCancel(e) {
        const bitter = document.getElementsByClassName("reservation-edit-form-outer-container ")[0];
        const spicy = document.getElementsByClassName("edit-form-button-container")[0];
        bitter.style.display = "none";
        spicy.style.display = "block";
    }

    handleModify(e) {
        const sweet = document.getElementsByClassName("reservation-edit-form-outer-container ")[0];
        const sour = document.getElementsByClassName("edit-form-button-container")[0];
        sweet.style.display = "block";
        sour.style.display = "none";
    }

    handleLoaded2(e) {
        const nineRanch = document.getElementsByClassName("ninety-9-ranch")[0];
        const bBQ = document.getElementsByClassName("re37")[0];
        const loader2 = document.getElementById("sticky-loader2");
        bBQ.style.display = "none";
        loader2.style.display = "none";
        nineRanch.style.display = "block";
    }

    handleLoaded3(e) {
        const nineRanch = document.getElementsByClassName("ninety-9-ranch")[0];
        const bBQ = document.getElementsByClassName("re37")[0];
        const loader2 = document.getElementById("sticky-loader2");
        bBQ.style.display = "none";
        loader2.style.display = "block";
        setTimeout(this.handleLoaded2, 1400);
    }

    generateRandomNum(length) {
        let arr = [];
        for(let i = 0; i <= length; i++) {
            let rand = Math.floor( Math.random() * 9);
            arr.push(rand);
        }
        let conNum = arr.join("")
        return conNum;
    }

    toggleDeleteModal(e) {
        this.setState({ showDeleteModal: !this.state.showDeleteModal})
    }

    render() {
        const { reservation, restaurants, currentUser, updateReservation } = this.props;
        if (!Object.values(restaurants).length) return null;
        if (!reservation) return null;
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const printDay = days[ new Date(reservation.date).getUTCDay()];
        const printMonth = months[ new Date(reservation.date).getUTCMonth()];
        const printDate = reservation.date.slice(8);
        const printYear = reservation.date.slice(0, 4);
        const time2 = {
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
        const resTime2 = time2[this.state.time];
        const keyTime = Object.keys(time2);
        let leftArr = [];
        let rightArr = [];
        let findLeftTimeIndex = keyTime.forEach((time, i) => {
            if ( (time === this.state.time) && (i > 0) ) {
                let leftIndex = i - 1;
                leftArr.push(leftIndex);
            }
        });
        let findRightTimeIndex = keyTime.forEach((time, i) => {
            if ( (time === this.state.time) && (i < keyTime.length - 1) ) {
                let rightIndex = i + 1;
                rightArr.push(rightIndex);
            }
        });
        const leftIndex = leftArr[leftArr.length - 1];
        const rightIndex = rightArr[rightArr.length - 1];
        const findLeftTime = keyTime[leftIndex];
        const findRightTime = keyTime[rightIndex];
        const resTime1 = time2[findLeftTime];
        const resTime3 = time2[findRightTime];
        const nowTime = reservation.time.slice(11, 16)
        const timeFormat = time2[nowTime];
        if (reservation.reserved) {
            return(
                <div>
                    <div className="reservation-top-line"></div>
    
                    <div className="reservation-show-button-container">
                        <Link to="/">
                            <button className="reservation-show-top-button">Home</button>
                        </Link>
                        <Link to="/my/reservations">
                            <button className="reservation-show-top-button">My Reservation</button>
                        </Link>
                    </div>
    
                    <div className="reservation-show-outer-container">
    
                        <div className="reservation-show-heading-container">
                            <h1 className="rs1">Thanks! Your reservation is confirmed.</h1>
                            <h2 className="rs2">Confirmation #{this.generateRandomNum(6)}</h2>
                        </div>
    
                        <div>
                            <div className="reservation-show-main-container">
                                <div>
                                    <img 
                                        src={restaurants[reservation.restaurant_id].photourl }
                                        alt="restaurant picture"
                                        className="reservation-image"
                                    />
                                </div>
    
                                <div className="xyz">
                                    <h1 className="rs3">{ restaurants[reservation.restaurant_id].name }</h1>

                                    <div className="re4">
                                        <div className="re500">
                                            <span>{printDay}</span>
                                            <span className="rx7">{printMonth}</span>
                                            <span className="rx7">{printDate}</span>
                                            <span className="rx7">{printYear}</span>
                                        </div>
                                        <div className="re501">
                                            <span>{ timeFormat }</span>
                                            <span className="rx8">{ reservation.num_guests } people</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="re5">
                                    <p className="re6">{ reservation.special_request }</p>
                                </div>
                            </div>
    
                            {/* <div className="re5">
                                <p className="re6">{ reservation.special_request }</p>
                            </div> */}
    
                            <div className="edit-form-button-container">
                                <button onClick={this.handleModify} className="re7">Modify</button>
                                <button onClick={this.toggleDeleteModal} className="re8">Cancel Reservation</button>
                            </div>

                            <div>
                                { this.state.showDeleteModal ? 
                                    <ReservationDeleteModal
                                        updateReservation={updateReservation}
                                        reservation={reservation}
                                        toggleDeleteModal={this.toggleDeleteModal}
                                    />
                                : null }
                            </div>
    
                            <div className="reservation-edit-form-outer-container">
                                <div id="re256">
                                    <div className="re100">
                                        <div>
                                            <select 
                                                className="re12" 
                                                defaultValue={reservation.num_guests}
                                                onChange={this.handleChange('num_guests')}
                                            >
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
    
                                        {/* value={reservation.time.slice(11, 16)} */}
                                        <div>
                                            <select 
                                                className="re11" 
                                                defaultValue= {reservation.time.slice(11, 16)}
                                                onChange={this.handleChange('time')}
                                            >
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
                                        </div>
                                    </div>
                                    <div className="re99">
    
                                        <div>
                                            <input 
                                                className="re10" 
                                                type="date"
                                                defaultValue={reservation.date}
                                                onChange={this.handleChange('date')}
                                            />
                                        </div>
                                        
                                        <div>
                                            <textarea 
                                                className="re13"
                                                placeholder="Add a special request(optional)"
                                                onChange={this.handleChange('special_request')}
                                            >
                                            {reservation.special_request}
                                            </textarea>
                                        </div>
                                    </div>
    
                                </div>
    
                                <div className="re37">
                                    <button onClick={this.handleLoaded3} className="re50">Search</button>
                                    <button onClick={this.handleCancel} className="re52">Cancel</button>
                                </div>
    
                                <div id="sticky-loader2"></div>
    
                                <div className="ninety-9-ranch">
                                    <button onClick={this.handleUpdate(resTime1)} className="ranch99">{resTime1 ? resTime1 : "Unavailable"}</button>
                                    <button onClick={this.handleUpdate(resTime2)} className="ranch99">{resTime2}</button>
                                    <button onClick={this.handleUpdate(resTime3)} className="ranch99">{resTime3 ? resTime3 : "Unavailable"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <footer>
                        <Footer />
                    </footer>
    
                </div>
            )  
        }
        else {
            return(
                <div>
                    <div className="f1">Cancel Reservation Page is under construction</div>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            )
        }
    }
};

export default withRouter(ReservationShow);