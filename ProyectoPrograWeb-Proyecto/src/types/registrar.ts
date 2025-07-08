import { email, minLength, nonEmpty, object, pipe, string } from "valibot";

export const CrearUsuarioSchema = object({
  email: pipe(
    string(),
    nonEmpty("El correo no puede estar vacío"),
    email("Correo no válido")
  ),
  password: pipe(
    string(),
    nonEmpty("La contraseña no puede estar vacía"),
    minLength(6, "La contraseña debe tener al menos 6 caracteres")
  ),
});
