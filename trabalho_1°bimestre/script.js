//6) Crie um servidor básico usando a biblioteca nativa HTTP que responda na porta 4055.
//7) Adicione ao servidor básico criado no passo anterior, um HTML de boas vindas usando o método "end"

//variavel let http recebece a funcao require() para chamar um protocolo http
let http = require('http');
//funcao para criar um servidor na porta 4055
let servidor = http.createServer(function (request, response){
    console.log('Entrando no createServer');
    response.end("<html><head><title>Atividade 7</title></head><body><h1>Beem vindo, esse é o resultado da atividade 7</h1></body></html>");
});

servidor.listen(4055);

//resultado
console.log('O servidor está na porta 4055');