import React from 'react';
import Footer from '../footer';

class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser);
    }

    render(){
        const { user } = this.props
        return(
            <div className="user-show-outer-container">
                <div className="user-show-inner-container">
                    <div className="user-show-links-container">
                        <h1>My Profile</h1>
                        <h1>My Saved Restaurants</h1>
                        <h1>My Reservations</h1>
                    </div>
                    <div className="user-show-info-container">
                        <h1>Username: {user.username}</h1>
                        <h1>Email: {user.email}</h1>
                        <h1>Location: Unavailable at this time</h1>
                    </div>
                </div>

                <footer>
                    <Footer />
                </footer>

            </div>
        )
    }
};

export default UserShow;
