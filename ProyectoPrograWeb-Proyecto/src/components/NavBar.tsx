import { NavLink, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container-fluid">
        <a
          className="navbar-brand d-flex align-items-center gap-2 fw-semibold"
          href="#"
        >
          <i className="bi bi-house-door-fill text-primary fs-5"></i> Sistema de
          Arriendos
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/Inicio"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-primary" : ""}`
                }
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/IngresarArriendos"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-primary" : ""}`
                }
              >
                Ingresar Arriendo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Estadisticas"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-primary" : ""}`
                }
              >
                Estadísticas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/activos"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-primary" : ""}`
                }
              >
                Arriendos Activos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Terminados"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-primary" : ""}`
                }
              >
                Arriendos Terminados
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Crear"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-primary" : ""}`
                }
              >
                Crear Usuario
              </NavLink>
            </li>
          </ul>

          <div className="d-flex">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleLogout}
            >
              <i className="bi bi-box-arrow-right me-1"></i> Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
