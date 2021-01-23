const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./Restaurants.sqlite"); //Creates file Restuarant
db.exec("PRAGMA foreign_keys = ON");
/**
 * Executes SQL statement, statement at a time
 * Use try/finally to ensure resource get closed
 * whether error occurs or not
 */

try {
	db.serialize(function () {
        //serialize - executes one statement at a time
        db.exec("PRAGMA foreign_keys = ON");
        db.run("PRAGMA foreign_keys = ON");

		//Create table restaurants, with specified columns
        db.run(`DROP TABLE IF EXISTS RESTAURANTS`);
	    db.run(`DROP TABLE IF EXISTS MENU`);
		db.run(`DROP TABLE IF EXISTS PRODUCTS`);
        
        
		db.run(`CREATE TABLE RESTAURANTS (Restaurant_ID INTEGER PRIMARY KEY AUTOINCREMENT, Title TEXT, imageLink TEXT)`);
        db.run( `CREATE TABLE PRODUCTS (Products_ID INTEGER PRIMARY KEY AUTOINCREMENT, Restaurant_ID INT, PRODUCT TEXT, Price INT,FOREIGN KEY(Restaurant_ID) REFERENCES RESTAURANTS(Restaurant_ID))`);
        db.run( `CREATE TABLE MENU (Menu_ID INTEGER PRIMARY KEY AUTOINCREMENT, Restaurant_ID INT, ITEM TEXT,FOREIGN KEY (Restaurant_ID) REFERENCES RESTAURANTS(Restaurant_ID))`);

        let insert1;
        let insert2;
        let insert3;

		try {
			/**
             * Insert1 inserts values into each column in database
             */
			insert1 = db.prepare(`INSERT INTO RESTAURANTS VALUES
                (NULL, 'OZONE', 'OZONE.PNG'),
                (NULL, 'GRIND', 'GRIND.PNG'),
                (NULL, 'MORLEYS', 'MORLEYS.PNG'),
                (NULL, 'PRET', 'PRET.PNG'),
                (NULL, 'MARKETPLACE', 'MARKETPLACE.PNG'),
                (NULL, 'SYNTHESIS', 'SYNTHESIS.PNG'),
                (NULL, 'FLIP N EAT', 'FLIPEAT.PNG'),
                (NULL, 'EIGHT GUYS', 'EIGHTGUYS.PNG') 
                `);

                /**
                 * Insert2
                 * Inserting specific values insie a database
                 */

            insert2 = db.prepare(`INSERT INTO PRODUCTS(PRODUCT, PRICE) VALUES 
                ('Carrot Cake', '3.50'),
                ('Chocolate Cake', '5.60'),
                ('Mandarin Cake', '4.90' )
                `);

            insert3 = db.prepare(`INSERT INTO MENU(ITEM) VALUES 
                ('DRINKS'),
                ('FOOD'),
                ('DESSERT'),
                ('SEASONAL'),
                ('VEGETERIAN'),
                ('VEGAN')
                `);    


            insert1.run();
            insert2.run();
            insert3.run();


            
		} finally {
            insert1.finalize(); 
            insert2.finalize();
            insert3.finalize();
                    
			db.each("SELECT * FROM RESTAURANTS", function (err, rows) {
                console.log(rows);
                
            });

            db.each("SELECT * FROM PRODUCTS", function (err, rows) {
                console.log(rows);
                
            });
            
            db.each("SELECT * FROM MENU", function (err, rows) {
                console.log(rows);
                
            });

        }

	});
} finally {
   
	db.close();
}
