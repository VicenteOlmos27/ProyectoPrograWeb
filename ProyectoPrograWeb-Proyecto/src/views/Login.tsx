import {
  Form,
  redirect,
  useActionData,
  type ActionFunctionArgs,
} from "react-router-dom";
import { login } from "../services/UsuarioService";

export async function action({ request }: ActionFunctionArgs) {
  const formData = Object.fromEntries(await request.formData());
  const resultado = await login(formData);
  if (!resultado.success) {
    return resultado;
  }
  return redirect("/");
}

export default function Login() {
  const actionData = useActionData() as {
    success?: boolean;
    error?: string;
    detalleError?: { [key: string]: string[] };
  };
  return (
    <div
      className="vh-100 d-flex align-items-center justify-content-center"
      style={{ background: "linear-gradient(135deg, #f0f2f5, #dfe6ed)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div className="mb-2">
                    <i className="bi bi-shield-lock-fill fs-1 text-primary"></i>
                  </div>
                  <h4 className="fw-bold">Iniciar Sesión</h4>
                  <p className="text-muted small">
                    Ingresa tus credenciales para continuar
                  </p>
                </div>

                {/* MUESTRO EL ERROR */}
                {actionData?.error && (
                  <div className="alert alert-danger">{actionData.error}</div>
                )}

                <Form method="POST" noValidate>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className={`form-control rounded-3 ${
                        actionData?.detalleError?.email ? "is-invalid" : ""
                      }`}
                      id="email"
                      name="email"
                      placeholder="correo@ejemplo.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className={`form-control rounded-3 ${
                        actionData?.detalleError?.password ? "is-invalid" : ""
                      }`}
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary rounded-3">
                      Iniciar Sesión
                    </button>
                  </div>

                  <div className="text-center mt-3"></div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
