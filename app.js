var express = require("express")
var app = express()
app.get("/",function(req,res){
res.send("Серверная информация для браузера")
})
app.set('view engine', 'ejs');

app.listen("3000")
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "driving_school",
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

 // Указываем папку с js, css и картинками
app.use(express.static('public'));

// Связываем адреса и их страницы
app.get('/main', (req, res) => res.render('main'));
app.get('/login', (req, res) => res.render('login'));
app.get('/dashboard', (req, res) => res.render('dashboard'));