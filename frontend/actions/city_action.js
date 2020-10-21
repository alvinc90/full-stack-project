import * as APIUtil from '../util/city_api_util'; 

export const RECEIVE_ALL_CITIES = "RECEIVE_ALL_CITIES";

const receiveAllCities = (cities) => {
    return ({
        type: RECEIVE_ALL_CITIES, 
        cities 
    })
};

export const fetchCities = () => {
    return (dispatch) => {
        return APIUtil.fetchCities() 
            .then((newCities) => dispatch(receiveAllCities(newCities)))
    }
};