const mysql = require('mysql'); //importo mysql

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
});

module.exports = conexao;