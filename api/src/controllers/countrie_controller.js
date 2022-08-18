const axios = require('axios');


const getCountries = async() =>{

const getApi= await axios.get('https://restcountries.com/v3/all'); 
let countriesApi =getApi.data;  //info array de obj

//let infoCountries =[]; //info de los q coinciden con el name/ info de todos los de la api

 //for (let i = 0; i<countriesApi.length ; i++){ //probar con un forEach
  let infoCountries= countriesApi.map(e => {
      return{
        name: e.name.common , 
        id:e.cca3, 
        image: e.flags[1], 
        continent: e.continents[0],
        capital: e.capital? e.capital[0] : 'Capital no encontrada' , 
        sub_region: e.subregion? e.subregion: 'Subregion no encontrada',
        area: e.area, //en km2
        population: e.population
      };
    });    
 
  
  return infoCountries;
};

module.exports= {
    getCountries
}