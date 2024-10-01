var express = require("express")
var app = express()
app.get("/",function(req,res){
res.send("Серверная информация для браузера")
})
app.listen("3000")
const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "",
  password: "6969"
});
 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });