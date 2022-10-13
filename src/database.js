var mysql = require("mysql2");

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "biblioteca",
  port: 3306,
});
