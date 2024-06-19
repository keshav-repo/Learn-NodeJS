const mysql = require("mysql2");

// Connection configuration
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "secret@123",
  database: "booking",
  port: 3300,
});

const movies = [];

// Connect to MySQL
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  // Array of objects containing data to insert
  const users = [
    { name: "Avenger" },
    { name: "Bahubali" },
    { name: "Charlie" },
  ];

  // Extract keys (column names) from the first object
  const keys = Object.keys(users[0]);

  // Prepare values with placeholders
  const values = users.map((user) => keys.map((key) => user[key]));

  // SQL statement with placeholders for multiple rows
  const sql = `INSERT INTO users (${keys.join(",")}) VALUES ?`;

  // Execute the query
  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log(`${result.affectedRows} records inserted`);
  });
});

// Close the connection after use
connection.end(function (err) {
  if (err) throw err;
  console.log("Connection closed");
});

// Connect to MySQL
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");

//   // Data to insert
//   const name = "John Doe";
//   const email = "john.doe@example.com";

//   // SQL statement with placeholder for values
//   const sql = "INSERT INTO users (name, email) VALUES (?, ?)";

//   // Array of values to insert
//   const values = [name, email];

//   // Execute the query
//   connection.query(sql, values, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

// // Close the connection after use
// connection.end(function(err) {
//   if (err) throw err;
//   console.log("Connection closed");
// });
