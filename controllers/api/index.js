const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipesRoutes = require('./recipesRoutes');
const cuisineRoutes = require('./cuisineRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipesRoutes);
// router.use('/cuisines', cuisineRoutes);

module.exports = router;