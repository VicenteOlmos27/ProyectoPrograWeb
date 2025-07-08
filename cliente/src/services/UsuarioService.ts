import { safeParse } from "valibot";
import { LoginFormSchema } from "../types/usuario";
import axios from "../services/axiosInstance";

type UsuarioFormData = {
  [k: string]: FormDataEntryValue;
};

export async function login(formData: UsuarioFormData) {
  try {
    const resultado = safeParse(LoginFormSchema, formData);
    if (resultado.success) {
      //DATA DEL FORM PASA LA VALIDACION DEL SCHEMA
      const url = `${import.meta.env.VITE_API_URL}/login`;
      const { data } = await axios.post(url, resultado.output);
      localStorage.setItem("token", data.token);
      return { success: true };
    } else {
      //NO PASA VALIDACION Y MUESTRA LOS ERRORES
      const detalleError: Record<string, string[]> = {};

      for (const issue of resultado.issues) {
        const campo = issue.path![0].key as string;
        if (!detalleError[campo]) {
          detalleError[campo] = [];
        }
        detalleError[campo].push(issue.message);
      }

      return {
        success: false,
        error: "Datos del formulario no validos",
        detalleError: detalleError,
      };
    }
  } catch (error: any) {
    //EN CASO QUE EL API CONTESTE CON UN ERROR
    return {
      success: false,
      error: error.response?.data?.error ?? "Error inesperado",
    };
  }
}
