import type { ArriendoActivos } from "../types/activos";

type ActivosFilaProps = {
  index: number;
  activo: ArriendoActivos;
};

export default function ActivosFila({ index, activo }: ActivosFilaProps) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{activo.patente_vehiculo}</td>
      <td>{activo.tipo_vehiculo}</td>
      <td>{activo.nombre_cliente}</td>
      <td>
        {typeof activo.fecha_inicio === "string"
          ? new Date(activo.fecha_inicio).toLocaleDateString()
          : "Fecha inválida"}
      </td>
      <td>
        <button className="btn btn-success btn-sm">Registrar Devolución</button>
        <button className="btn btn-danger btn-sm">Eliminar</button>
      </td>
    </tr>
  );
}



