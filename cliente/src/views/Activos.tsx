import { useLoaderData } from "react-router-dom";
import { getArriendosActivos } from "../services/ActivosService";
import type { ArriendoActivos } from "../types/activos";
import ActivosFila from "../components/ActivosFila";

export async function loader() {

  const activos = await getArriendosActivos();
  console.log("loader Activos",activos);
  return activos;
}

export default function Activos() {
  const activos = useLoaderData() as ArriendoActivos[];
  console.log(activos);

  return (
    <div id="activos">
      <div className="card mb-4">
        <div className="card-header">Arriendos Activos</div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
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
      </div>
    </div>
  );
}
