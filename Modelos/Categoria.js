
function insertarcategoria(callback,categoria){
	db.collection("categoria").insert(categoria,{},callback);
}

exports.insertarcategoria = insertarcategoria;