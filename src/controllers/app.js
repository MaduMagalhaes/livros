const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { livros: livros });
});

app.get('/buscar/:ano', (req, res) => {
  let livroAno = req.params.ano;
  let filtragemId = livros.filter(livro => livro.ano == livroAno);
  res.render('index', {livros: filtragemId});
});

app.get('/buscar', (req, res) => {
  let titulo = req.query.titulo;
  let filtragemTitulo = livros.filter(livro => livro.titulo.toLowerCase().includes(titulo));
  res.render('index', { livros: filtragemTitulo });
  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});