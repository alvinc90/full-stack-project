import React from 'react';

class HomeSearchBar extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <input type="date"/>
                    <input type="time"/>
                    <input type="search" placeholder="searchbar"/>
                    <input type="submit" value="Let's go"/>
                </form>
            </div>

        )
    }
};

export default HomeSearchBar;