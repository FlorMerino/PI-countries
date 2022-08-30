const {Router} = require('express');
const { getAllCountries, getCountryForName, getCountryForID} = require('../controllers/countrie_controller');
const router= Router();


router.get('/countries', async(req,res,next)=>{ 
 try {
  let response=await getAllCountries();
  res.status(200).json(response);
  
 } catch (error) {
    next(error);
 }
});

router.get('/', async(req,res,next)=>{ 
 const {name} = req.query;

try {
  let response = await getCountryForName(name);
  res.send(response);
} catch (error) {
 next(error);   
}
});

router.get('/:idPais', async(req,res,next)=>{
  const {idPais}= req.params;
  try {
    let response = await getCountryForID(idPais);
    res.send(response);
  } catch (error) {
    next(error);
  }
})




module.exports = router;