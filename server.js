var conexion = require('./Conexion/Conexion');

function iniciar(router){

	express = require("express");
    app = express();
    bodyParser  = require("body-parser");
    methodOverride = require("method-override");
    mongoose = require('mongoose');
    router = require('./router').router;

	app.use(bodyParser.urlencoded({ extended: false }));  
	app.use(bodyParser.json());  
	app.use(methodOverride());

	app.use(router);

	iniciarServidor(app);

}

function iniciarServidor(app){
	app.listen(8888, function() {  
		console.log("Servidor iniciado");
		console.log("Conectando con MONGODB..");
		conexion.conectar();
	});
}

exports.iniciar = iniciar;