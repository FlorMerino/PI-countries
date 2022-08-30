import {GET_COUNTRIES,SET_COFIRMATION,SET_COUNTRIE_DETAIL ,GET_COUNTRIE_DETAIL, CREATE_ACTIVITIE,ORDERALF_COUNTRIES, GET_COUNTRY_NAME, FILTER_COUNTRIES, ORDERNUM_POPULATION} from '../actions/index';
import { filterCoun_Act, orderAlf, orderPopulation } from './ControllerReducer';

const initialState = {
    allCountries: [], //todos los paises
    countries: [], // todos los paises q voy renderizando
    countryDetail: {},  //los paises por id
    createActivitie: ''
   };
   
   export default function reducer (state = initialState, action) {
     switch (action.type) {
     
      case GET_COUNTRIES:
       return{...state, countries: action.payload, allCountries: action.payload}
      
      case GET_COUNTRY_NAME:        // ACA SOLO LAS Q COINCIDEN CON EL NAME
        return{...state, countries: action.payload}  

      case GET_COUNTRIE_DETAIL:
       return{...state, countryDetail: action.payload}
   
      case CREATE_ACTIVITIE:
       return{...state, createActivitie: action.payload }

      case SET_COUNTRIE_DETAIL:
       return{...state, countryDetail: {}}
      
      case SET_COFIRMATION:
        return{...state, createActivitie:''}
   
      case FILTER_COUNTRIES:
      let filterCountries= filterCoun_Act(action.payload,state.allCountries) 

       return{...state, countries: filterCountries }
   
      case ORDERNUM_POPULATION:      
       if(typeof state.countries !== 'string'){
        let orderNumPopulation = orderPopulation(action.payload,[...state.countries])
        if(typeof orderNumPopulation !== 'undefined'){
          return{...state, countries: orderNumPopulation}
        }       
       }  
      case ORDERALF_COUNTRIES:
       if(typeof state.countries !== 'string'){
        let orderAlfCountries = orderAlf(action.payload,state.countries)
        return{...state, countries: orderAlfCountries};
       }
      default: return{...state}
     }
   };