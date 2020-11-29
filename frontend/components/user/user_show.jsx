import React from 'react';

class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser);
        this.props.fetchAllRestaurants();
    }

    render(){
        // debugger
        const { currentUser, user, restaurants } = this.props
        return(
            <div>
                my id is {currentUser} and my username is {user.username}
                {restaurants.map((restaurant) => {
                    return <h1>{restaurant.name}</h1>
                })}
            </div>
        )
    }
};

export default UserShow;