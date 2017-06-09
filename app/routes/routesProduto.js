'use strict'

//todas as DEFINIÇÕES de rotas relacionadas a produto vao estar aqui
module.exports = function(app){ //exporta a função

	let api = app.api.apiProduto;	//por estar usando o consign podemos fazer assim ao inves de usar o require -> var api = require('../controller/controller-produto'); 
								//O consign disponibiliza na instância do Express recebida pelo módulo a propriedade app.api.produto
	//preparar o express para lidar com o recurso /r1/produtos com um get, quando vier essa url vai responder com um get
	app.route('/r1/produtos')
		.get(api.lista) //api.lista é um objeto com a propriedade lista que é a funcao que será a resposta do servidor para este get
		.post(api.adiciona);

	//rota genérica, que possui um coringa que é id do produto
	app.route('/r1/produtos/:id')
		.get(api.buscaPorId) //quando receber get vai executar a funcao buscaPorId
		.delete(api.removePorId) //quando receber delete vai exercutar a funcao de remover
		.put(api.atualiza);
};