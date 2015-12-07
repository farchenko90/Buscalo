express = require("express");
router = express.Router();

//INCLUIR TODOS LOS ROUTES DE LOS MODELOS

require("./Controlador/ClienteControl")(router);
require("./Controlador/EmpresaControl")(router);
require("./Controlador/CategoriaControl")(router);
require("./Controlador/PeticionesControl")(router);

//FIN

exports.router = router;