const mysql = require("mysql2")
const pool = mysql.createPool({
    host:"localhost",
    user: "root",
    password: "",
    database: "baitappoint",
    port:3306
})
const database = pool.promise()
module.exports=database;