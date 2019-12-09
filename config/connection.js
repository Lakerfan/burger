var mysql = require("mysql");
// creating the connection info for SQL db
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // My password
    password: "Burgers",
    database: "vegan-burger"
});

export default connection;