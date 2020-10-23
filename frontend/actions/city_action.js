import * as APIUtil from '../util/city_api_util'; 

export const RECEIVE_ALL_CITIES = "RECEIVE_ALL_CITIES";
export const RECEIVE_CITY = 'RECEIVE_CITY'; 

const receiveAllCities = (cities) => {
    return ({
        type: RECEIVE_ALL_CITIES, 
        cities 
    })
};

const receiveCity = (city) => {
    return ({
        type: RECEIVE_CITY,
        city
    })
}; 

export const fetchCities = () => {
    return (dispatch) => {
        return APIUtil.fetchCities() 
            .then((newCities) => dispatch(receiveAllCities(newCities)))
    }
};

export const fetchCity = (cityId) => {
   
    return (dispatch) => {
       
        return APIUtil.fetchCity(cityId)
            .then((newCity) => {
                return dispatch(receiveCity(newCity))
            })
    }
}