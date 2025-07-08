import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="d-flex flex-column bg-dark text-white p-3 vh-100 shadow"
        style={{ width: "240px" }}
      >
        <div className="mb-4 text-center">
          <h5 className="fw-bold text-uppercase">Arriendos</h5>
        </div>

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink
              to="/Inicio"
              className={({ isActive }) =>
                `nav-link text-start px-3 py-2 rounded ${
                  isActive ? "bg-primary text-white" : "text-white-50"
                }`
              }
            >
              <i className="bi bi-house-door me-2"></i>Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/IngresarArriendos"
              className={({ isActive }) =>
                `nav-link text-start px-3 py-2 rounded ${
                  isActive ? "bg-primary text-white" : "text-white-50"
                }`
              }
            >
              <i className="bi bi-pencil-square me-2"></i>Ingresar Arriendo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Estadisticas"
              className={({ isActive }) =>
                `nav-link text-start px-3 py-2 rounded ${
                  isActive ? "bg-primary text-white" : "text-white-50"
                }`
              }
            >
              <i className="bi bi-bar-chart-line me-2"></i>Estadísticas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/activos"
              className={({ isActive }) =>
                `nav-link text-start px-3 py-2 rounded ${
                  isActive ? "bg-primary text-white" : "text-white-50"
                }`
              }
            >
              <i className="bi bi-clock-history me-2"></i>Arriendos Activos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Terminados"
              className={({ isActive }) =>
                `nav-link text-start px-3 py-2 rounded ${
                  isActive ? "bg-primary text-white" : "text-white-50"
                }`
              }
            >
              <i className="bi bi-check2-circle me-2"></i>Arriendos Terminados
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Crear"
              className={({ isActive }) =>
                `nav-link text-start px-3 py-2 rounded ${
                  isActive ? "bg-primary text-white" : "text-white-50"
                }`
              }
            >
              <i className="bi bi-person-plus me-2"></i>Crear Usuario
            </NavLink>
          </li>
        </ul>

        <div className="mt-auto pt-4">
          <button
            className="btn btn-danger w-100"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right me-2"></i>Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-grow-1 p-4 bg-dark">
        <Outlet />
      </div>
    </div>
  );
}

