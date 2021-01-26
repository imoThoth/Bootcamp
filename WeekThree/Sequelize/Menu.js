const {sequelize, DataTypes, Model} = require('./sequelize_index');

/**
 * Represents a Restaurant
 */
class Menu extends Model {

    // add methods here

}
Menu.init({
    title: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

//Menu.hasMany(MenuItem, { foreignKey: 'menu_id' });
//MenuItem.belongsTo(Menu, { as: 'owner', foreignKey: 'menu_id' });

module.exports = {
   Menu
};

// local testing - remove when using Jest

(async () => {
    await sequelize.sync({ force: true }); // recreate db
    const r = await Menu.create({ name: 'Drinks'})

    console.log("Inserted menu name is:" + r.name);
})();




