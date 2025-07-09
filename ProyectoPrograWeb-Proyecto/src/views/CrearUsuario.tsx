import { useState } from "react";
import { safeParse } from "valibot";
import { CrearUsuarioSchema } from "../types/registrar";
import axios from "../services/axiosInstance";
import { Form, Link } from "react-router-dom";

export async function crearUsuario(datos: { email: string; password: string }) {
  const url = `${import.meta.env.VITE_API_URL}/usuarios/crear`;
  const { data } = await axios.post(url, datos);
  return data;
}

export default function CrearUsuario() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errores, setErrores] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrores({});
    setMensaje("");

    const resultado = safeParse(CrearUsuarioSchema, { email, password });

    if (!resultado.success) {
      const nuevosErrores: { email?: string; password?: string } = {};
      for (const issue of resultado.issues) {
        const campo = issue.path?.[0]?.key as "email" | "password";
        if (campo) {
          nuevosErrores[campo] = issue.message;
        }
      }
      setErrores(nuevosErrores);
      return;
    }

    try {
      await crearUsuario({ email, password });
      setMensaje("✅ Cuenta creada correctamente");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      setMensaje("❌ Error al crear la cuenta");
    }
  };

  return (
    <div id="crearusuario">
      <div className="card mb-4">
        <div className="card-header">Crear Usuario</div>
        <div className="card-body">
          <Form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errores.email ? "is-invalid" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errores.email && (
                <div className="invalid-feedback">{errores.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className={`form-control ${
                  errores.password ? "is-invalid" : ""
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errores.password && (
                <div className="invalid-feedback">{errores.password}</div>
              )}
            </div>
            <button type="submit" className="btn btn-success">
              Crear Cuenta
            </button>
            {mensaje && <div className="alert alert-info mt-3">{mensaje}</div>}
          </Form>
          <div className="text-center mt-3">
            <p className="text-muted">¿Ya tienes una cuenta?</p>
            <Link to="/login" className="btn btn-outline-primary">
              Volver al Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
