const db = require('./bd');

function getAllBooks(callback) {
    const query = 'SELECT * FROM livros';
    db.query(query, (err, results) => {
    if (err) {
    console.error('Erro ao encontrar livro:', err);
    callback(err, null);
    return;
    }
    callback(null, results);
    });
    }