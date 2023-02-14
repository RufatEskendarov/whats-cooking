const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipes extends Model {}

Recipes.init(
    {
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        publisher: {
            type: DataTypes.STRING,
        },
        sourceUrl: {
            type: DataTypes.STRING(2083),
        },
        image: {
            type: DataTypes.STRING(2083),
        },
        servings: {
            type: DataTypes.INTEGER,
        },
        cookingTime: {
            type: DataTypes.INTEGER,
        },
        ingredients: {
            type: DataTypes.JSON,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipes',
    }
);

module.exports = Recipes;