import axios from "../services/axiosInstance";

export async function registrarDevolucion(id: number) {
  const url = `http://localhost:3000/api/arriendos/${id}`;
  const token = "";

  const { data } = await axios.put(
    url,
    {}, 
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
}
