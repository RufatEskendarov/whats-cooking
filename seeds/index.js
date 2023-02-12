const sequelize = require('../config/connection');
const { Recipes } = require('../models');

const seedUser = require('./user-seeds');
const seedRecipes = require('./recipes-seeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedRecipes();
  console.log('\n----- RECIPES SEEDED -----\n');

  process.exit(0);
};

seedDatabase();