function getAll(callback){
	db.collection("empresa").find({}).toArray(function (err,results){
		callback(results);
	});
}

function getById(callback,id){
	db.collection("empresa").find({id : id}).toArray(function (err,results){
		callback(results[0]);
	});
}

function insert(callback,cliente){
	db.collection("empresa").insert(cliente,{},callback);
}

exports.getAll = getAll;
exports.getById = getById;
exports.insert = insert;