let http = require ('http');

let servidor = http.createServer(function (request, response){
    console.log('Entrou no createServer');
    response.end("<html><head><title>Pagina inicial do sistema</title></head><body><h1>Pagina inicial!</h1></body></html>");
});

servidor.listen(8000);


