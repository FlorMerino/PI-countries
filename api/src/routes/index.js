const { Router } = require('express');
const countriesRouter = require('./countries');
const activitiesRouter = require('./activities');

const router = Router();

// Routers

router.use('/countries', countriesRouter)
router.use('/activities', activitiesRouter)

module.exports = router;
