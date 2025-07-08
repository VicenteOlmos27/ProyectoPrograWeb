import { Router } from "express";
import {
  borrarArriendo,
  crearArriendo,
  getArriendosActivos,
  getArriendosById,
  getArriendosTerminados,
  registrarDevolucion,
} from "./handlers/arriendos";
import { crearUsuario, login } from "./handlers/usuarios";
import { verificarTokens } from "./middleware/verificarTokens";

const router = Router();

//ENPOINT LOGIN
router.post("/login", login);

//MIDDLEWARE DESDE AQUI
router.use(verificarTokens);

//ENPOINT DE ARRIENDOS ACTIVOS
router.get("/arriendos/activos", getArriendosActivos);

//ENPOINT DE ARRIENDOS TERMINADOS
router.get("/arriendos/terminados", getArriendosTerminados);

//ENPOINT MOSTRAR INFO VEHICULOS
router.get("/arriendos/info", getArriendosById);

//ENPOINT CREAR UN ARRIENDO
router.post("/arriendos", crearArriendo);

//ENPOINT PARA REGISTRAR LA DEVOLUCION
router.put("/arriendos/:id", registrarDevolucion);

//ENPOINT BORRAR UN ARRIENDO
router.delete("/arriendos/:id", borrarArriendo);

//CREAR USUARIO
router.post("/usuarios/crear", crearUsuario);

export default router;
