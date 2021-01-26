const {Restaurant} = require('./Restaurant');
const  {Menu} = require('./Menu')
const {MenuItem} = require('./MenuItem')
const fsp = require('fs').promises;
const {sequelize} = require('./sequelize_index');
//const dinerList = require('./restaurants.json');


async function loadThenInsert(){

    const diners = './restaurants.json';
    const buffer = await fsp.readFile(diners);
    const arrayOfDiners = (JSON.parse(String(buffer)))

    await sequelize.sync({ force: true });

    let menuCounter = 1;

    for (let i = 0; i < arrayOfDiners.length; i++){
        const currentDiner = arrayOfDiners[i];

        await Restaurant.create({name: currentDiner.name, image: currentDiner.image})

        for (let j = 0; j < currentDiner.menus.length; j++){
            const currentMenu = currentDiner.menus[j]

            await Menu.create({title: currentMenu.title, restaurant_id: i+1})

            for (let k = 0; k < currentMenu.items.length; k++){
                const currentMenuItem = currentMenu.items[k]
    
                await MenuItem.create({name: currentMenuItem.name, price: currentMenuItem.price, menu_id: menuCounter})
            }
                ++menuCounter;
        }

       
    }

}

loadThenInsert();

