import { useEffect, useState } from "react";
import { getArriendosTerminados } from "../services/Terminados";
import { eliminarArriendo } from "../services/BorrarArriendo"; // Ajusta la ruta si es necesario

export default function ArriendosTerminados() {
  const [arriendos, setArriendos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    cargarArriendos();
  }, []);

  const cargarArriendos = () => {
    getArriendosTerminados()
      .then((res) => {
        setArriendos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar arriendos terminados:", err);
        setError("No se pudieron cargar los datos");
        setLoading(false);
      });
  };

  const handleEliminar = async (id: number) => {
    const confirmar = window.confirm("¿Deseas eliminar este arriendo?");
    if (!confirmar) return;

    try {
      await eliminarArriendo(id);
      alert("Arriendo eliminado correctamente");
      cargarArriendos(); // recarga la lista tras eliminar
    } catch (error) {
      console.error("Error al eliminar arriendo:", error);
      alert("Error al eliminar el arriendo.");
    }
  };

  if (loading) return <p>Cargando arriendos terminados...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Patente</th>
          <th>Tipo</th>
          <th>Cliente</th>
          <th>Inicio</th>
          <th>Fin</th>
          <th>Acciones</th> {/* Nueva columna para botones */}
        </tr>
      </thead>
      <tbody>
        {arriendos.length === 0 && (
          <tr>
            <td colSpan={7} className="text-center">
              No hay arriendos terminados
            </td>
          </tr>
        )}
        {arriendos.map((arriendo, i) => (
          <tr key={arriendo.id ?? i}>
            <td>{i + 1}</td>
            <td>{arriendo.patente_vehiculo}</td>
            <td>{arriendo.tipo_vehiculo}</td>
            <td>{arriendo.nombre_cliente}</td>
            <td>{new Date(arriendo.fecha_inicio).toLocaleDateString()}</td>
            <td>
              {arriendo.fecha_fin
                ? new Date(arriendo.fecha_fin).toLocaleDateString()
                : "-"}
            </td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleEliminar(arriendo.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
       
    </table>
  );
}
