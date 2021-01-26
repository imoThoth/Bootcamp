const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('..\DayThreeRestaurants.sqlite');
const fsp = require("fs").promises;
const {sequelize} = require('..\WeekThree\Sequelize\sequelize_index.js')

async function load(){
    console.log("Retrieving Database");
    const dinerList = './restaurants.json';

    const buffer = await fsp.readFile(dinerList);
    const restaurantArray = (JSON.parse(String(buffer)));

    try{
      
        db.serialize(function(){

            let insert1;

                insert1 = db.prepare(`INSERT INTO RESTAURANTS(Title, imageLink) VALUES(?,?)`);
                for (let i = 0; i< restaurantArray.length; i++){
                    console.log(restaurantArray[i].name);
        
        
                    for(let j = 0; j < restaurantArray[i].menus.length; j++){
                        console.log(restaurantArray[i].menus[j].title);
        
                        for(let k = 0; k  < restaurantArray[i].menus.length; k++){
                            console.log(restaurantArray[i].menus[j].items[k].name);
                        }
        
                    }
        
                }
            }
    }    
}
          
           

load();

