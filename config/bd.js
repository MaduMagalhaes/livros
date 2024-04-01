const mysql = require('mysql2');

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
host: 'roundhouse.proxy.rlwy.net',
user: 'root',
port: 59702,
password: 'ibaPXXpZGPhNTeEHeLCNWOfEiagDFeFE',
database: 'railway'
});
// Conexão com o banco de dados
connection.connect((err) => {
if (err) {
console.error('Erro ao conectar ao banco de dados:', err);
return;
}
console.log('Conexão bem-sucedida ao banco de dados MySQL');
});
module.exports = connection;