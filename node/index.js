const express = require("express");
const app = express();
const port = 4000;
const config = {
  host: "mysqldb",
  user: "nodedb",
  password: "nodedb",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const insertSql = `INSERT INTO user (nome) values ('Tideaweb - Rogerio')`;
  connection.query(insertSql);

  const querySql = "SELECT * FROM user";
  connection.query(querySql, function (err, data) {
    if (err) throw err;
    res.render("user-list", { title: "Lista", userData: data });
  });
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
