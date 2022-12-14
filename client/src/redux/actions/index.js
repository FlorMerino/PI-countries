import axios from 'axios';
export const  GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIE_DETAIL = 'GET_COUNTRIE_DETAIL';
export const CREATE_ACTIVITIE = 'CREATE_ACTIVITIE';
export const ORDERALF_COUNTRIES ='ORDER_COUNTRIES';
export const GET_COUNTRY_NAME ='GET_COUNTRY_NAME';
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES';
export const ORDERNUM_POPULATION = 'ORDERNUM_POPULATION';
export const SET_COUNTRIE_DETAIL= 'SET_COUNTRIE_DETAIL';
export const SET_COFIRMATION = 'SET_COFIRMATION';

/// lo q iria para verlo localmente const localServer= 'http://localhost:3001';


export const getCountries = () => {
    return async function (dispatch) {
     return axios.get(`/api/countries/countries`)
     .then(countries => {
        dispatch({
            type: GET_COUNTRIES,
            payload: countries.data
        });
     })
     .catch(error => {
        console.log(error)
     })
    }
};

export const getCountryDetails = (param) => {
  return async function(dispatch) {
    return axios.get(`/api/countries/${param}`)
    .then(details => {
        dispatch({
            type: GET_COUNTRIE_DETAIL,
            payload: details.data 
        });
    })
    .catch(error =>{
        console.log(error);
    })
  };
};

export const createActivitie = (inputActivitie) => {
   return async function(dispatch) {
    return axios.post('/api/activities', inputActivitie)
    .then(response => {
        dispatch({
            type: CREATE_ACTIVITIE,
            payload: response.data,
        })
    })
    .catch(error => {console.log(error)
    })
   }
};

export const searchName = (input) => {
 return async function (dispatch) {
    return axios.get(`/api/countries?name=${input.name}`)
    .then(countries => {
        dispatch({
          type: GET_COUNTRY_NAME,
          payload: countries.data
        });
    })
    .catch(error => {
        dispatch({
            type: GET_COUNTRY_NAME, 
            payload: error.countries.data
        })
    })
 }
}

export const sort = (order) => {
    return {
      type: ORDERALF_COUNTRIES,
      payload: order.select
    }
};

export const sortNumPopulation = (order) => {
   return{
    type: ORDERNUM_POPULATION,
    payload: order.select
   }
};

export const set = (valueSet) => {
 return{
    type:GET_COUNTRY_NAME,
    payload: valueSet
 }
};
export const setCountrieDetail = () => {
    return{
       type:SET_COUNTRIE_DETAIL
    }
   };
export const setConfirmation = () => {
    return{
        type:SET_COFIRMATION
     }
}
export const filterCountries = (input) => {
 return{
  type: FILTER_COUNTRIES,
  payload: input
 }
};