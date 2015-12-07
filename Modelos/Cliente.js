function getAll(callback){
	db.collection("cliente").find({}).toArray(function (err,results){
		callback(results);
	});
}

function getById(callback,id){
	console.log(id)
	db.collection("cliente").find({_id : mongoose.mongo.ObjectID(id)}).toArray(function (err,results){
		callback(results[0]);
	});
}

function insert(callback,cliente){
	db.collection("cliente").insert(cliente,{},callback);
}

function login(callback,cliente){
	if(cliente.tipo == 'C'){
		db.collection("cliente").find({email : cliente.email,pass : cliente.pass},{pass : 0}).toArray(function (err,results){
			callback(results[0]);
		});	
	}else{
		db.collection("usuario").find({email : cliente.email,pass : cliente.pass}).toArray(function (err,results){
			callback(results[0]);
		});	
	}
}

function updatecliente(callback,cliente){
	console.log("_id: "+cliente.id)
	db.collection("cliente").update({_id : mongoose.mongo.ObjectID(cliente.id)},
		{$set : {nombres : cliente.nombres,apellidos: cliente.apellidos}},function (err,results){
			callback(results);
		})
}

exports.getAll = getAll;
exports.getById = getById;
exports.insert = insert;
exports.login = login;
exports.updatecliente = updatecliente;