const {Router} = require('express');
const {Tourist_activity, Country} = require('../db');


const router= Router();

router.post('/', async(req,res,next)=>{ 
  const {name, difficulty, duration, season, countryId} = req.body;
  try {
    if(name){
        const newActivitie = await Tourist_activity.create({
            name,
            difficulty,
            duration,
            season,
        });
      if(countryId){
       for (let i=0; i< countryId.length; i++ ) {
        let country = await Country.findOne( {where: {id: countryId[i]} } );
        await newActivitie.addCountry(country);
       };
      }
      
      res.status(200).send(`Su actividad turistica ${name} fue creada exitosamente. `);
    }else res.status(400).send('Faltan llenar campos obligatorios')
} catch (error) {
   next(error); // va a ir al siguiente middleware q en este caso es el control de errores Error catching endware
}
});



module.exports = router;





















module.exports = router;