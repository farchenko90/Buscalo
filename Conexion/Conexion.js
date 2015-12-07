var con;
var err;
var db;

function conectar(){
	// CONEXIÓN CON MONGO
	///*
	this.con = require('mongodb').MongoClient; 
	this.con.connect('mongodb://localhost:27017/buscalo',function(err,db){
		if(err){
			console.log("Error al conectar con mongo");
		}else{
			console.log("Conexion exitosa");
		}
		this.err = err;
		this.db = db;
	});
	//*/

	// CONEXIÓN CON MYSQL
	/*
	this.con = require('mysql');
	conexion = this.con.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'prueba'
	});
	conexion.connect();
	*/
}


exports.conectar = conectar;
exports.estado = err;
exports.db = db;
