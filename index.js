//arquivo que roda os comandos JS 


//versão adaptada versão HTML
var express = require('express'); 
var app = express(); 


app.get('/', function(req, res) {
		res.send('GitHub: https://github.com/EduardaMedeiros1801\n');
		}
);

app.get('/recomendo', function(req, res) {

		
		json_response = {"recomendacoes...":
					[
						{nome: "Recomendação 1", nota: 10},
						{nome: "Recomendação 2", nota: 9},
						{nome: "Recomendação mais ou menos", nota: 5}
					]
				}

		//res.send('Recomendações ....');
		res.json("json_response");
		}
);


app.listen(8000, function() {
					console.log('Servidor executando em http://127.0.0.1:8000/'); 
					});


/*

//versão baixo nível com texto padrão
var http = require("http"); 

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type' : 'text/plain'}); 

	response.end('Olá mundo\n'); 

}).listen(8000, '127.0.0.1'); 

console.log('Servidor executando em http://127.0.0.1:8000/'); 

*/ 