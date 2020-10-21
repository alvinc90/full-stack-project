export const fetchAllRestaurants = (cityId) => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/cities/${cityId}/restaurants`
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

