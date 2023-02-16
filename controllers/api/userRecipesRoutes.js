const router = require('express').Router();
const { Recipes, User, UserRecipes } = require('../../models');

router.post('/addrecipe', async (req, res) => {
    try {
      const userData = await User.findByPk({
        where: {
          id: 6
        },
      });
      console.log(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;