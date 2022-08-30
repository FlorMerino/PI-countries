const axios = require('axios');
const {Op} = require('sequelize');
const {Country, Tourist_activity} = require('../db');

const getCountriesApi = async() =>{

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

 const getAllCountries = async()=>{
  const countriesDb = await Country.findAll({ // de la db
    attributes: ['name', 'id', 'image', 'continent', 'population'],
    include : [{ model: Tourist_activity,
      attributes: ['name']
     }]
  });
  //si ya hay cargadas
  if(countriesDb.length>0){
    return countriesDb;
  }else{
   const countriesApi= await getCountriesApi(); //info countries traido desde la api
   countriesApi.forEach(country =>{
    Country.findOrCreate({
      where: {
        name: country.name,
        id: country.id,
        image: country.image,
        continent: country.continent,
        capital: country.capital,
        sub_region: country.sub_region,
        area: country.area, //en km2
        population: country.population
     }
    });
   });
  };
  const countriesInDb = await Country.findAll({ // si hay cargado en la db
    attributes: ['name', 'id', 'image', 'continent', 'population'],
    include :[{ model: Tourist_activity,
      attributes: ['name'],
     }]
  });
    
   return countriesInDb;
 }

 const getCountryForName = async(name) =>{
  //info desde la db
 const countrieDb = await Country.findAll({
  attributes: ['name', 'id', 'image', 'continent'],
  where: {
      name: {
          [Op.like]: `%${name}%` 
      },
  },
});

if(countrieDb.length>0){

  return countrieDb;
}
else return `No country was found with the name  ${name}`;
 }

 const getCountryForID = async(idPais)=>{
   //es de mi Db
   let getCountryDb = await Country.findOne({
    where:{
      id: idPais  
      ,
    },
    include : Tourist_activity
      
  });
  return getCountryDb;
 }

module.exports= {
    getAllCountries,
    getCountryForName,
    getCountryForID
}