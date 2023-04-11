const User = require('./User');
const Need = require('./Need');
const Inventory = require('./Inventory');


User.hasMany(Food, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Food.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Need, Inventory };