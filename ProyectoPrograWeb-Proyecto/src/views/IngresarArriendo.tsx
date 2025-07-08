import { useState } from "react";
import axios from "../services/axiosInstance";

export default function IngresarArriendos() {
  const [patente, setPatente] = useState("");
  const [tipoVehiculo, setTipoVehiculo] = useState("");
  const [rutCliente, setRutCliente] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Limpiar mensajes previos
    setMensaje("");
    setErrores({});

    // Validación simple: verificar que no estén vacíos
    const nuevosErrores: { [key: string]: string } = {};
    if (!patente.trim()) nuevosErrores.patente = "La patente es obligatoria";
    if (!tipoVehiculo.trim())
      nuevosErrores.tipoVehiculo = "El tipo de vehículo es obligatorio";
    if (!rutCliente.trim())
      nuevosErrores.rutCliente = "El RUT del cliente es obligatorio";
    if (!nombreCliente.trim())
      nuevosErrores.nombreCliente = "El nombre del cliente es obligatorio";

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      setMensaje("❌ Por favor completa todos los campos");
      return; // No enviar formulario si hay errores
    }

    try {
      const token = "TU_TOKEN_AQUI"; // reemplaza si usas JWT

      await axios.post(
        "http://localhost:3000/api/arriendos",
        {
          patente_vehiculo: patente,
          tipo_vehiculo: tipoVehiculo,
          rut_cliente: rutCliente,
          nombre_cliente: nombreCliente,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMensaje("✅ Arriendo registrado correctamente");
      // Limpiar campos y errores
      setPatente("");
      setTipoVehiculo("");
      setRutCliente("");
      setNombreCliente("");
      setErrores({});
    } catch (error) {
      console.error("Error al registrar arriendo:", error);
      setMensaje("❌ Ocurrió un error al guardar el arriendo");
    }
  };

  return (
    <div id="arriendo" className="container mt-4">
      <div className="card shadow border-0">
        <div className="card-header bg-success text-white fw-semibold fs-5">
          📝 Ingresar Nuevo Arriendo
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">🚘 Patente</label>
                <input
                  type="text"
                  className={`form-control ${
                    errores.patente ? "is-invalid" : ""
                  }`}
                  value={patente}
                  onChange={(e) => setPatente(e.target.value)}
                />
                {errores.patente && (
                  <div className="invalid-feedback">{errores.patente}</div>
                )}
              </div>

              <div className="col-md-6">
                <label className="form-label">🚗 Tipo de Vehículo</label>
                <select
                  className={`form-select ${
                    errores.tipoVehiculo ? "is-invalid" : ""
                  }`}
                  value={tipoVehiculo}
                  onChange={(e) => setTipoVehiculo(e.target.value)}
                >
                  <option value="">Seleccione</option>
                  <option value="Sedán">Sedán</option>
                  <option value="SUV">SUV</option>
                  <option value="Camioneta">Camioneta</option>
                </select>
                {errores.tipoVehiculo && (
                  <div className="invalid-feedback">{errores.tipoVehiculo}</div>
                )}
              </div>

              <div className="col-md-6">
                <label className="form-label">🆔 RUT Cliente</label>
                <input
                  type="text"
                  className={`form-control ${
                    errores.rutCliente ? "is-invalid" : ""
                  }`}
                  value={rutCliente}
                  onChange={(e) => setRutCliente(e.target.value)}
                />
                {errores.rutCliente && (
                  <div className="invalid-feedback">{errores.rutCliente}</div>
                )}
              </div>

              <div className="col-md-6">
                <label className="form-label">🙍 Nombre del Cliente</label>
                <input
                  type="text"
                  className={`form-control ${
                    errores.nombreCliente ? "is-invalid" : ""
                  }`}
                  value={nombreCliente}
                  onChange={(e) => setNombreCliente(e.target.value)}
                />
                {errores.nombreCliente && (
                  <div className="invalid-feedback">
                    {errores.nombreCliente}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 text-end">
              <button type="submit" className="btn btn-primary px-4">
                💾 Guardar
              </button>
            </div>

            {mensaje && (
              <div className="alert alert-info mt-3 text-center">{mensaje}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
