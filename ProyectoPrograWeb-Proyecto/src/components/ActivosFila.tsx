import type { ArriendoActivos } from "../types/activos";
import { registrarDevolucion } from "../services/Terminar";

type ActivosFilaProps = {
  index: number;
  activo: ArriendoActivos;
};

export default function ActivosFila({ index, activo }: ActivosFilaProps) {
  const handleRegistrarDevolucion = async () => {
    const confirmar = window.confirm(
      "¿Estás seguro de registrar esta devolución?"
    );
    if (!confirmar) return;

    try {
      await registrarDevolucion(activo.id);
      alert("Devolución registrada correctamente");

      // Recargar página o usar estado global/contexto para refrescar
      window.location.reload();
    } catch (error) {
      console.error("Error al registrar devolución:", error);
      alert("Ocurrió un error al registrar la devolución.");
    }
  };

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
        <button
          className="btn btn-success btn-sm me-2"
          onClick={handleRegistrarDevolucion}
        >
          Registrar Devolución
        </button>
      </td>
    </tr>
  );
}
