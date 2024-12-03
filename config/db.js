// config/db.js
const mysql = require('mysql2');

// Configuração da conexão MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'abito_arcano'
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no MySQL: ', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

module.exports = db;
