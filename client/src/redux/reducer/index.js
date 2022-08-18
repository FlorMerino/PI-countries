import {GET_COUNTRIES, GET_COUNTRIE_DETAIL, CREATE_ACTIVITIE,ORDERALF_COUNTRIES, GET_COUNTRY_NAME, FILTER_COUNTRIES, ORDERNUM_POPULATION} from '../actions/index';

const initialState = {
    allCountries: [], //todos los paises
    countries: [], // todos los paises q voy renderizando
    countryDetail: {},  //los paises por id
  //  filteredCountries: [],
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
   
      case FILTER_COUNTRIES:
        // {
        //   continent :  ['Asia', 'Europa'],
        //   Tourist_activities:  ['canotaje', 'cabalgata'] 
        // } 
       let dataPayload = action.payload; // obj de arrays
       let filterCountries = [];
       for (const property in dataPayload) { //tomo las props  continent o Tourist_activities
         let dataArray =dataPayload[property]; // ['Asia', 'Europa']
         
         for (let i = 0; i < dataArray.length; i++) {
           let filterCondition = dataArray[i]; // 'Asia' o 'activitie'

           state.allCountries.forEach(country => {

             if(Array.isArray(country[property])){
               country[property].forEach(activitie => {
                 if(activitie.name === filterCondition){
                   filterCountries.push(country);
                 };
               });
              }else{
               if(country[property] === filterCondition){
                 filterCountries.push(country);
                };
              }
           });
          };
        };
      
       return{...state, countries: filterCountries }
   
      case ORDERNUM_POPULATION:
       let orderNumPopulation= [...state.countries]
        
       let orderAscendant= orderNumPopulation.sort((a, b) => a.population - b.population)
       if(action.payload === 'ASCENDANT'){
        return{...state, countries: orderAscendant}
       }else if(action.payload === 'DESCENDENTE'){
        let orderDesc = orderAscendant.reverse();
        return{...state, countries: orderDesc}
       };

      case ORDERALF_COUNTRIES:
       let orderAlfCountry = [...state.countries]; 
            
       orderAlfCountry = orderAlfCountry.sort((a,b) =>{
       if(a.name < b.name) {
        return action.payload==='ASCENDANT'? -1 : 1; //ultimo caso cuando este en des y quiera llevarlo a asc
       }
       if(a.name > b.name){
        return action.payload === 'DESCENDENTE'? -1 : 1;
       }
       return 0;
       });
       return{...state, countries: orderAlfCountry };        
            
      default: return{...state}
     }
   };