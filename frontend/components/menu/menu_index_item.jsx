import React from 'react';

const MenuIndexItem = ({ menu, restaurant }) => {
    debugger
    return(
        <div>
            <div>
                <h1>{menu.dish_1}</h1>
                <p>{menu.description_1}</p>
            </div>

            <div>
                <h1>{menu.dish_2}</h1>
                <p>{menu.description_2}</p>
            </div>

            <div>
                <h1>{menu.dish_3}</h1>
                <p>{menu.description_3}</p>
            </div>
        </div>
    )
};

export default MenuIndexItem;