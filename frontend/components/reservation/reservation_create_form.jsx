import React from 'react';

class ReservationCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        const { num_guests, date, time, restaurant, currentUser } = this.props.location.state;
        this.state = {
            num_guests: num_guests,
            date: date,
            time: time,
            special_request: "",
            reserved: true,
            user_id: currentUser,
            restaurant_id: restaurant.id
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props.createReservation(this.state);
    }

    handleChange(e) {
        // debugger
        this.setState({ special_request: e.currentTarget.value })
    }

    render() {
        // debugger
        const { num_guests, date, time, restaurant } = this.props.location.state;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>You're almost done!</h1>
                    <div>
                        <div>
                            <img 
                                src={restaurant.photoUrl} 
                                alt="restaurant picture"
                                className="user-fav-image"
                            />
                        </div>
                        <div>
                            <h1>{restaurant.name}</h1>
                            <div>
                                <span>{date}</span>
                                <span>{time}</span>
                                <span>{num_guests}</span>
                            </div>
                        </div>
                        <textarea
                            onChange={this.handleChange}
                            value={this.state.special_request}
                            placeholder="Add a special request (optional)"
                        >
                        </textarea>
                        <input type="submit" value="Complete Reservation"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed, porro possimus officia est iure assumenda! Porro, quibusdam pariatur? Quia rerum similique quis cumque fugit, impedit distinctio beatae perspiciatis ullam perferendis voluptas porro accusamus reprehenderit.</p>
                    </div>
                </form>
            </div>
        )
    }
};

export default ReservationCreateForm;