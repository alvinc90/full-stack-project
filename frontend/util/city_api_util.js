export const fetchCities = () => {
    return (
        $.ajax({
            method: 'GET', 
            url: '/api/cities'
        })
    )
}; 

export const fetchCity = (cityId) => {
    // debugger 
    return (
        $.ajax({
            method: 'GET',
            url: `/api/cities/${cityId}`
        })
    )
}; 

