import axios from "../services/axiosInstance";

export async function registrarDevolucion(id: number) {
  const url = `http://localhost:3000/api/arriendos/${id}`;
  const token = "TU_TOKEN"; // si usas JWT

  const { data } = await axios.put(
    url,
    {}, // cuerpo vacío si solo actualizas la fecha
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
}
