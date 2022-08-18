const {Router} = require('express');
const {Op} = require('sequelize');
const {Country, Tourist_activity} = require('../db');
const {getCountries} = require('../controllers/countrie_controller');
const router= Router();


router.get('/countries', async(req,res,next)=>{ 
 try {
  const countriesDb = await Country.findAll({ // de la db
    attributes: ['name', 'id', 'image', 'continent', 'population'],
    include : [{ model: Tourist_activity,
      attributes: ['name']
     }]
  });
  //si ya hay cargadas
  if(countriesDb.length>0){
    res.status(200).json(countriesDb);
  }else{
   const countriesApi= await getCountries(); //info countries traido desde la api
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
    
    res.status(200).json(countriesInDb);
 } catch (error) {
    next(error);
 }
});

router.get('/', async(req,res,next)=>{ 
 const {name} = req.query;
 console.log(name)
try {
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

    res.status(200).send(countrieDb);
  }
  else res.status(404).send(`No se encontro ningun pais con el nombre ${name}`);
} catch (error) {
 next(error);   
}
});

router.get('/:idPais', async(req,res,next)=>{
  const {idPais}= req.params;
  try {
    //es de mi Db
    let getCountryDb = await Country.findOne({
      where:{
        id: idPais  
        ,
      },
      include : Tourist_activity
        
    });
    res.status(200).send(getCountryDb);
 
  } catch (error) {
    next(error);
  }
})




module.exports = router;