express = require("express");
router = express.Router();

//INCLUIR TODOS LOS ROUTES DE LOS MODELOS

require("./Controlador/ClienteControl")(router);
require("./Controlador/EmpresaControl")(router);

//FIN

exports.router = router;