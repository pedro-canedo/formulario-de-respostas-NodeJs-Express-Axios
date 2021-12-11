const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const App = express();
const mysql = require('mysql');


App.use(cors());
App.use(express.json());
App.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'formulario'

});

App.post("/api/insert", (req, res) => {
    const {pergunta1} = req.body;
    const {pergunta2} = req.body;
    const {pergunta3} = req.body;
    const {pergunta4} = req.body;
    const {pergunta5} = req.body;


    const sql = "INSERT INTO respostas (pergunta1, pergunta2, pergunta3, pergunta4, pergunta5) VALUES (?,?,?,?,?)";
    connection.query(sql, [pergunta1,pergunta2, pergunta3, pergunta4, pergunta5], (err, result) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        res.send(200);
    })
})




App.listen(3001, () => {
    console.log('Server is running on port 3001');
})