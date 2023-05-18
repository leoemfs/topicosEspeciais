let express = require('express');

let app = express();
app.set('view engine','ejs');
app.use(express.static('viwes/static'));//caminho bootstrap css

app.get('/' , function(req, res){
    res.render('index');
});
app.get('/listar_clientes' , function(req, res){
    res.render('pages/listar_clientes');
});
app.get('/cadastrar_clientes' , function(req, res){
    res.render('pages/cadastrar_clientes');
});
app.get('/landing_pg' , function(req, res){
    res.render('pages/landing_pg');
});


app.listen(8000, function(req, res){
    console.log('Servidor rodando na porta 8000');
});
