import axios from "../services/axiosInstance";

export async function crearArriendo(datos: {
  patente_vehiculo: string;
  tipo_vehiculo: string;
  rut_cliente: string;
  nombre_cliente: string;
}) {
  const url = "http://localhost:3000/api/arriendos";

  // Obtener el token desde localStorage
  const token = localStorage.getItem("token");

  const { data } = await axios.post(url, datos, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
}
