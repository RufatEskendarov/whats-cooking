const router = require('express').Router();
const { User, Recipes } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  
  res.render('homepage', {
    logged_in: req.session.logged_in
  });
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/profile', async (req, res) => {
  try {
    const recipeData = await Recipes.findAll({});

    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    res.render('profile', {
      recipes,
      // logged in functionality disabled until login built out.
      // logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
