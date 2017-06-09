'use strict'

module.exports = function(uri){ //é um modulo de configuracao da conexao com o mongoose, que ao ser chamado recebe como parametro a uri

	let mongoose = require('mongoose');

	//cria a conexão
	//mongodb:// é o protocolo de comunicacao com o mongodb
	mongoose.connect(uri);

	mongoose.connection.on('connected', function(){
		console.log('Conectado ao MongoDB')
	});

	//caso dê erro na conexão do banco
	mongoose.connection.on('error', function(error) {
		console.log('Erro na conexão: ' + error);
	});

	//quando for desconectado
	mongoose.connection.on('disconnected', function(){
		console.log('Desconectado do MongoDB')
	});

	//quando a aplicacao for encerrada, desconectar o mongo
	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log('Desconectado do MongoDB pelo término da aplicação');
			process.exit(0);
		});
	})

};