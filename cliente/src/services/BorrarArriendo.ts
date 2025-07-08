import axios from "axios";

export async function eliminarArriendo(id: number) {
  try {
    const url = `http://localhost:3000/api/arriendos/${id}`;

    const token = ""; // si usas JWT, inclúyelo si es necesario
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
