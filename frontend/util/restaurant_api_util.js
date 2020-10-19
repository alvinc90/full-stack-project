export const fetchAllRestaurants = () => {
    return (
        $.ajax({
            method: 'GET',
            url: '/api/restaurants',
        })
    )
}; 

export const fetchRestaurant = (restaurantId) => {
    return (
        $.ajax({
            method: 'GET', 
            url: `/api/restaurants/${restaurantId}`
        })
    )
}; 

