import { useEffect, useState } from "react";
import { getArriendosById } from "../services/EstadistivasService";

type EstadisticaVehiculo = {
  tipo_vehiculo: string;
  cantidad_arriendos: number;
};

export default function Estadisticas() {
  const [estadisticas, setEstadisticas] = useState<EstadisticaVehiculo[]>([]);

  useEffect(() => {
    getArriendosById()
      .then((data) => {
        setEstadisticas(data);
      })
      .catch((error) => {
        console.error("Error al cargar estadísticas:", error);
      });
  }, []);

  // función para obtener la cantidad según tipo (0 si no existe)
  const getCantidad = (tipo: string) => {
    const resultado = estadisticas.find((v) => v.tipo_vehiculo === tipo);
    return resultado ? resultado.cantidad_arriendos : 0;
  };

  return (
    <div id="estadisticas">
      <div className="card mb-4">
        <div className="card-header">Estadísticas</div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span>Vehículos Sedán</span>
              <span className="badge bg-primary rounded-pill">
                {getCantidad("Sedán")}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Vehículos SUV</span>
              <span className="badge bg-primary rounded-pill">
                {getCantidad("SUV")}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Camionetas</span>
              <span className="badge bg-primary rounded-pill">
                {getCantidad("Camioneta")}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
