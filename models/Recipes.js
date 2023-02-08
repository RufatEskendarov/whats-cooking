const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipes extends Model {}

Recipes.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        meal_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'meals',
                key: 'id',
            },
        },
        cuisine_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'cuisine',
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