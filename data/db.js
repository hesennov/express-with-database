const mysql = require("mysql2");
const config = require("../config");

let connection = mysql.createConnection(config.db);

connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  //   connection.query("select * from products", (err, res) => {
  //     console.log(res[0]);
  //   });
  console.log("mysql baglantisi kuruldu");
});

module.exports = connection.promise()
