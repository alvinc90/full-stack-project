import React from 'react';

const MenuIndexItem = ({ menu }) => {
    return(
        <div>
            <div className="container-of-container">
                <div className="menu-items-container">
                    <h1 className="menu-dish">{menu.dish_1}</h1>
                    <p className="menu-description">{menu.description_1}</p>
                </div>
            </div>

            <div className="container-of-container">
                <div className="menu-items-container">
                    <h1 className="menu-dish">{menu.dish_2}</h1>
                    <p className="menu-description">{menu.description_2}</p>
                </div>
            </div>

            <div className="container-of-container">
                <div className="menu-items-container">
                    <h1 className="menu-dish">{menu.dish_3}</h1>
                    <p className="menu-description">{menu.description_3}</p>
                </div>
            </div>
        </div>
    )
};

export default MenuIndexItem;