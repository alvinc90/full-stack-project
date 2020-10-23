export const fetchCities = () => {
    return (
        $.ajax({
            method: 'GET', 
            url: '/api/cities'
        })
    )
}; 

export const fetchCity = (cityId) => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/cities/${cityId}`
        })
    )
}; 

