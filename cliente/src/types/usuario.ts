import { email, nonEmpty, object, pipe, string } from "valibot";

export const LoginFormSchema = object({
  email: pipe(
    string(),
    nonEmpty("Tiene que poner algún email válido"),
    email("Correo no válido")
  ),
  password: pipe(string(), nonEmpty("Tiene que poner una contraseña válida")),
});

//minLength(6, "La contraseña debe tener al menos 6 caracteres")
