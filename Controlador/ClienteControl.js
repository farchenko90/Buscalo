module.exports = function (router){
	cliente = require('../Modelos/Cliente');

	router.get('/cliente', function(req, res) {  
	   	cliente.getAll(function(lista){
	   		res.send(lista);
	   	});
	});

	router.get('/cliente/:id', function(req, res) {  
	   	cliente.getById(function(cliente){
	   		if(cliente == null){
				res.statusCode = 404;
				res.setHeader('Content-Type', 'application/json');
				res.send("");
			}
			else{
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.send(cliente);
			}
	   	},req.params.id);

	});

	router.post('/cliente', function(req, res) {  
	   	cliente.insert(function(err,result){
	   		res.send(JSON.stringify(result));
	   	},req.body);
	});

	router.post('/cliente/login',function(req,res){
		cliente.login(function(result){
			if(result == null){
				res.statusCode = 404;
				res.setHeader('Content-Type', 'application/json');
				res.send({"messaje" : "El usuario no existe en el sistema"});
			}
			else{
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.send(result);
			}
		},req.body);
	});

	router.put('/clienteupdate',function(req,res){
		cliente.updatecliente(function(result){
	   		if(cliente == null){
				res.statusCode = 404;
				res.setHeader('Content-Type', 'application/json');
				res.send("{messaje : Error}");
			}
			else{
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.send(JSON.stringify(result));
			}
	   	},req.body);
	})

};