module.exports = function (router){

	peticion = require('../Modelos/Peticiones');

	router.post('/peticiones', function(req, res) {  
	   	peticion.insertarpeticion(function(err,result){
	   		res.send(JSON.stringify(result));
	   	},req.body);
	});

}