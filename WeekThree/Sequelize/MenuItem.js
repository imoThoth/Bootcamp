const {sequelize, DataTypes, Model} = require('./sequelize_index');
const {Menu} = require('./Menu')
/**
 * Represents a Restaurant
 */
class MenuItem extends Model {

    // add methods here

}

MenuItem.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    MenuItem
};

// local testing - remove when using Jest
/** 
(async () => {
    await sequelize.sync({ force: true }); // recreate db
    const r = await MenuItem.create({ name:'cheesy chips', price: 4.50})

    console.log("Inserted menu name is:" + r.name);
})();
*/



