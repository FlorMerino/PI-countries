const {Router} = require('express');
const { confirmationActivitie } = require('../controllers/activitie_controller');


const router= Router();

router.post('/', async(req,res,next)=>{ 
  const {name, difficulty, duration, season, countryId} = req.body;
  try {
    let response =await confirmationActivitie(name, duration,difficulty,season,countryId);
     res.send(response);
   
} catch (error) {
   next(error); // va a ir al siguiente middleware q en este caso es el control de errores Error catching endware
}
});



module.exports = router;





















module.exports = router;