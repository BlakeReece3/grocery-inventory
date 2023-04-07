const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Food extends model {}

Food.init(
    {
        
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.STRING,
          },
          expiration: {
            type: DataTypes.DATEONLY,
            allowNull: false,
          },
          quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
          },
          
          },
     
          
     {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Food',
      }
 );

 Module.exports = Food;
    
