import { number, object, string, nullable, custom, array, type InferOutput } from "valibot";

const isoDateTimeFull = custom((value) => {
  if (typeof value !== "string") return false;
  const date = new Date(value);
  return !isNaN(date.getTime());
});

export const ArriendoActivosSchema = object({
  id: number(),
  fecha_inicio: isoDateTimeFull,
  fecha_fin: nullable(isoDateTimeFull),
  patente_vehiculo: string(),
  tipo_vehiculo: string(),
  rut_cliente: string(),
  nombre_cliente: string(),
});

export const ArriendosActivosSchema = array(ArriendoActivosSchema);


export type ArriendoActivos = InferOutput<typeof ArriendoActivosSchema>
