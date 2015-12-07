module.exports = function (router){
	empresa = require('../Modelos/Empresa');

	router.get('/empresa', function(req, res) {  
	   	empresa.getAll(function(lista){
	   		res.send(lista);
	   	});

	});

	router.get('/empresa/:id', function(req, res) {  
	   	empresa.getById(function(empresa){
	   		if(empresa == null){
				res.statusCode = 404;
				res.setHeader('Content-Type', 'application/json');
				res.send("");
			}
			else{
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.send(empresa);
			}
	   	},req.params.id);
	});

	router.post('/empresa', function(req, res) {  
	   	empresa.insert(function(err,result){
	   		res.send(JSON.stringify(result));
	   	},req.body);
	});




};