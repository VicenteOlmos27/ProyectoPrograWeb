import { useLoaderData } from "react-router-dom";
import { getArriendosActivos } from "../services/ActivosService";
import type { ArriendoActivos } from "../types/activos";
import ActivosFila from "../components/ActivosFila";

export async function loader() {
  const activos = await getArriendosActivos();
  console.log("loader Activos", activos);
  return activos;
}

export default function Activos() {
  const activos = useLoaderData() as ArriendoActivos[];
  console.log(activos);

  return (
    <div id="activos" className="container mt-4">
      <div className="card shadow border-0">
        <div className="card-header bg-warning text-dark fw-semibold fs-5">
          🚗 Arriendos Activos
        </div>
        <div className="card-body p-4">
          {activos.length === 0 ? (
            <div className="alert alert-info text-center mb-0">
              No hay arriendos activos actualmente.
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Patente</th>
                    <th>Tipo</th>
                    <th>Cliente</th>
                    <th>Inicio</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {activos.map((activo, index) => (
                    <ActivosFila key={activo.id} index={index} activo={activo} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

