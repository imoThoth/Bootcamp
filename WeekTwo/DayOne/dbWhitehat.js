const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./CustomerDB.sqlite');

/**
 * Executes the SQL statements one at a time.
 * 
 * Please note that this does not have any error 
 * handling as yet.
 */
db.serialize(function() { //serialise executes one statement at a time
    
    // create the empty table with specific columns and column types
    db.run("CREATE TABLE CUSTOMERS (CustomerName TEXT, ContactName TEXT, Address TEXT, City TEXT, PostalCode TEXT, Country TEXT)");

    // insert data 
    let stmt = db.prepare(`INSERT INTO CUSTOMERS VALUES 
                        ('Alfreds Futterkiste', 'Maria Anders', 'Fred', 'Fred', 'Fred', 'Fred') , 
                        ('Alfreds Futterkiste', 'Maria Anders', 'Fred', 'Fred', 'Fred', 'Fred')`);
    stmt.run();

    // cleanp
    stmt.finalize(); // releases any any internal resources 
                     // and deallocates any memory

    // select the rows and print them
    db.each("SELECT * FROM CUSTOMERS", function(err, rows) {
          console.log(rows);
    });
});

db.close();
