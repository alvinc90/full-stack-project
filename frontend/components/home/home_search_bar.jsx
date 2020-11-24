import React from 'react';

class HomeSearchBar extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <input type="date"/>
                    <input type="time"/>
                    <select>
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
                        <option value="">Larger Party</option>
                    </select>
                    <select>
                        <option value="">All Cities</option>
                        <option value="">San Francisco</option>
                        <option value="">New York</option>
                        <option value="">Chicago</option>
                        <option value="">Los Angeles</option>
                    </select>
                    {/* <input type="search" placeholder="searchbar"/> */}
                    <input type="submit" value="Let's go"/>
                </form>
            </div>

        )
    }
};

export default HomeSearchBar;