const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const db = new sqlite3.Database('./Restaurants.sqlite');

try{

    db.serialize (function (){

        db.run(`DROP TABLE IF EXISTS RESTAURANTS`);
        db.run(`DROP TABLE IF EXISTS MENU`);
        db.run(`DROP TABLE IF EXISTS PRODUCTS`);
        
        
        db.run(`CREATE TABLE RESTAURANTS (Restaurant_ID INTEGER PRIMARY KEY AUTOINCREMENT, Title TEXT, imageLink TEXT)`);
        db.run( `CREATE TABLE PRODUCTS (Products_ID INTEGER PRIMARY KEY AUTOINCREMENT, Restaurant_ID INT, PRODUCT TEXT, Price INT,FOREIGN KEY(Restaurant_ID) REFERENCES RESTAURANTS(Restaurant_ID))`);
        db.run( `CREATE TABLE MENU (Menu_ID INTEGER PRIMARY KEY AUTOINCREMENT, Restaurant_ID INT, ITEM TEXT,FOREIGN KEY (Restaurant_ID) REFERENCES RESTAURANTS(Restaurant_ID))`);
    
    })
}   
    finally{
        db.close();
    }
