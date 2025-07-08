import axios from "../services/axiosInstance";

export async function eliminarArriendo(id: number) {
  try {
    const url = `http://localhost:3000/api/arriendos/${id}`;

    const token = ""; 
    await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Arriendo eliminado:", id);
  } catch (error) {
    console.error("Error al eliminar arriendo:", error);
    throw error;
  }
}
