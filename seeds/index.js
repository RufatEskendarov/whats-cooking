// const sequelize = require('../config/connection');
// const { Recipes } = require('../models');

// const seedUser = require('./user-seeds');
// const seedRecipes = require('./recipes-seeds');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   await seedUser();
//   console.log('\n----- USER SEEDED -----\n');

//   await seedRecipes();
//   console.log('\n----- RECIPES SEEDED -----\n');

//   process.exit(0);
// };

// seedDatabase();

const sequelize = require('../config/connection');
const { User, Recipes} = require('../models');
const userSeeds = require('./userSeeds.json');
const recipesSeeds = require('./recipesSeeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeeds);

  await Recipes.bulkCreate(recipesSeeds);

  console.log('Database Seeded!');

  process.exit(0);
};

seedDatabase();