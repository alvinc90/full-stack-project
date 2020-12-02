import React from 'react';

class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser);
    }

    render(){
        const { currentUser, user } = this.props
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

                <footer className="footer">
                    <div className="footer-container">
                        <h6>Inspired by OpenTable</h6>
                        <div className="alvin-links-container">
                            <h6 className="my-name">Alvin Chong</h6>
                            <div className="links">
                                <a href="https://www.linkedin.com/in/alvin-chong-4b88011a1/" target="_blank"><img className="links-logo" src={window.liURL} alt="linkedIn"/></a>
                            </div>
                            <div className="links">
                                <a href="https://github.com/alvinc90" target="_blank"><img className="links-logo" src={window.gitURL} alt="github"/></a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
};

export default UserShow;
