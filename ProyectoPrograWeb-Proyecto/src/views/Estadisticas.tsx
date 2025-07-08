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

  const getCantidad = (tipo: string) => {
    const resultado = estadisticas.find((v) => v.tipo_vehiculo === tipo);
    return resultado ? resultado.cantidad_arriendos : 0;
  };

  return (
    <div id="estadisticas" className="container mt-4">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-primary text-white fw-bold fs-5">
          📊 Cantidad de arriendos de cada vehiculo
        </div>
        <div className="card-body">
          <div className="row text-center">
            <div className="col-md-4 mb-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h6 className="card-title">🚗 Vehículos Sedán</h6>
                  <span className="display-6 fw-bold text-primary">
                    {getCantidad("Sedán")}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h6 className="card-title">🚙 Vehículos SUV</h6>
                  <span className="display-6 fw-bold text-success">
                    {getCantidad("SUV")}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h6 className="card-title">🛻 Camionetas</h6>
                  <span className="display-6 fw-bold text-danger">
                    {getCantidad("Camioneta")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
