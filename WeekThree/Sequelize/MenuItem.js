const {sequelize, DataTypes, Model} = require('./sequelize_index');

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

//MenuItem.hasMany(MenuItem, { foreignKey: 'menu_id' });
//MenuItem.belongsTo(Menu, { as: 'owner', foreignKey: 'menu_id' });

module.exports = {
    MenuItem
};

// local testing - remove when using Jest

(async () => {
    await sequelize.sync({ force: true }); // recreate db
    const r = await MenuItem.create({ name:'cheesy chips', price: 4.50})

    console.log("Inserted menu name is:" + r.name);
})();




