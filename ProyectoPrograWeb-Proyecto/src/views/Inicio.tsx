export default function Inicio() {
  return (
    <div className="container py-5">
      <div className="card text-center shadow-lg border-0">
        <div className="card-header bg-primary text-white fs-4 fw-semibold">
          👋 Bienvenido
        </div>
        <div className="card-body">
          <h5 className="card-title mb-3">Sistema de Arriendo de Vehículos</h5>
          <p className="card-text fs-6">
            Usa el menú de navegación para ingresar arriendos, consultar activos o revisar estadísticas.
          </p>
          <hr />
          <p className="text-muted small">
            Proyecto Evaluación 3 — EIN133: Diseño y Programación Orientada a la Web
          </p>
        </div>
      </div>
    </div>
  );
}
