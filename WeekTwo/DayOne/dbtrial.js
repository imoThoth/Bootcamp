var mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"nodemysql",
})

con.connect(function(err){
    if(err) throw err;
    console.log("CONNECTED")
    
    var sql = "CREATE TABLE Customers " +
   + " (iD INT, Customer_Name(VARCHAR255)), " 
   + "(Contact_Name(VARCHAR255), Address MEDIUMTEXT,)" 
   + "(CITY(VARCHAR255), POSTALCODE(VARCHAR255)), COUNTRY(VARCHAR255) "

})

