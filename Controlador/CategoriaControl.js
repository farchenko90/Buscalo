module.exports = function (router){

	categoria = require('../Modelos/Categoria')

	router.post('/categoria', function(req, res) {  
	   	categoria.insertarcategoria(function(err,result){
	   		res.send(JSON.stringify(result));
	   	},req.body);
	});

}