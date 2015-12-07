function insertarpeticion(callback,peticion){
	db.collection("peticion").insert(
			[{nombre: peticion.nombre,descripcion: peticion.descripcion,
				categoria:{id: peticion.categoriaid,nombre: peticion.nombre},
				cliente:{idcliente: peticion.idcliente,nombres: peticion.nombres,
					apellidos: peticion.apellidos,correo: peticion.correo,telefono: peticion.telefono}
			}],{},callback);
}

exports.insertarpeticion = insertarpeticion;