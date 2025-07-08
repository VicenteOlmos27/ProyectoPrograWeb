import { Request, Response } from "express";
import Arriendo from "../models/Arriendo";
import { Sequelize } from "sequelize";

//LISTA TODOS LOS ARRIENDOS ACTIVOS
export const getArriendosActivos = async (
  request: Request,
  response: Response
) => {
  const hoy = new Date();

  const arriendos = await Arriendo.findAll();

  //FILTRA LOS QUE NO TIENEN UNA FECHA_FIN O LA FECHA_FIN ES DESPUES DE HOY
  const activos = arriendos.filter(
    (arriendo) => !arriendo.fecha_fin || new Date(arriendo.fecha_fin) > hoy
  );

  response.json({ data: activos });
};

//LISTA TODOS LOS ARRIENDOS TERMINADOS
export const getArriendosTerminados = async (
  request: Request,
  response: Response
) => {
  const hoy = new Date();

  const arriendos = await Arriendo.findAll();

  //ACA SE FILTRA SI FECHA_FIN EXISTE, Y ES IGUAL O PASADA A HOY
  const terminados = arriendos.filter(
    (arriendo) => arriendo.fecha_fin && new Date(arriendo.fecha_fin) <= hoy
  );

  response.json({ data: terminados });
};

//MUESTRA INFORMACION DE LOS VEHICULOS SEGUN SU ID
export const getArriendosById = async (
  request: Request,
  response: Response
) => {
  const arriendos = await Arriendo.findAll({
    attributes: [
      "tipo_vehiculo",
      [Sequelize.fn("COUNT", Sequelize.col("id")), "cantidad_arriendos"],
    ],
    group: ["tipo_vehiculo"],
    order: [["tipo_vehiculo", "ASC"]],
  });
  response.json({ data: arriendos });
};

//INGRESAR UN NUEVO ARRIENDO
export const crearArriendo = async (request: Request, response: Response) => {
  const {
    patente_vehiculo,
    fecha_inicio,
    fecha_fin,
    tipo_vehiculo,
    rut_cliente,
    nombre_cliente,
  } = request.body;

  const arriendoNuevo = await Arriendo.create({
    fecha_inicio: new Date(),
    fecha_fin: null,
    patente_vehiculo,
    tipo_vehiculo,
    rut_cliente,
    nombre_cliente,
  });

  response.json({ data: arriendoNuevo });
};

//REGISTRA LA DEVOLUCION
export const registrarDevolucion = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;
  const arriendo = await Arriendo.findByPk(id);

  arriendo.fecha_fin = new Date(); // FECHA DEL COMPUTADOR
  await arriendo.save();

  response.json({ message: "Devolución registrada", data: arriendo });
};

//BORRAR UN ARRIENDO
export const borrarArriendo = async (request: Request, response: Response) => {
  const { id } = request.params;
  const arriendo = await Arriendo.findByPk(id);
  await arriendo.destroy();
  response.json({ data: "Arriendo Eliminado" });
};
