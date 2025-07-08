import axios from "../services/axiosInstance";
import { ArriendosActivosSchema } from "../types/activos";
import { safeParse } from "valibot";

export async function getArriendosActivos() {
  try {
    const url = "http://localhost:3000/api/arriendos/activos";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNyN0BnbWFpbC5jb20iLCJpYXQiOjE3NTE4MzgxNDksImV4cCI6MTc1MTg0MTc0OX0.r3XNdElhUCy933qhnOEGGFyraAETu6U6rNYDFYLQxCs"; // reemplaza con tu token real

    const { data: activos } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const resultado = safeParse(ArriendosActivosSchema, activos.data);

    if (resultado.success) {
      return resultado.output;
    } else {
      console.error("Detalles error validación:", resultado.issues);
      throw new Error("Hubo un problema al pedir datos");
    }
  } catch (error) {
    console.error("Error en getArriendosActivos:", error);
    throw error;
  }
}
