import React from 'react';
import MenuIndexItem from './menu_index_item';

class MenuIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchMenus();
        // this.props.fetchAllRestaurants();
    }

    render() {
        const { restaurant, menus } = this.props;
        // debugger
        if (menus) {
            return(
                <div>
                    {menus.map((menu) => {
                        // debugger
                        if(menu.restaurant_id === restaurant.id) {
                            return(
                                <MenuIndexItem 
                                    restaurant={restaurant}
                                    menu={menu}
                                />
                            )
                        }
                    })}
                </div>
            )
        } else {
            return null
        }
    }
};

export default MenuIndex;