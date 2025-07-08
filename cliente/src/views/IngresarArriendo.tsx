export default function IngresarArriendos(){
    return(
        <div id="arriendo">
        <div className="card mb-4">
            <div className="card-header">Ingresar Arriendo</div>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Patente</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tipo de Vehículo</label>
                        <select className="form-select" required>
                            <option value="">Seleccione</option>
                            <option value="Sedán">Sedán</option>
                            <option value="SUV">SUV</option>
                            <option value="Camioneta">Camioneta</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">RUT Cliente</label>
                        <input type="text" className="form-control" placeholder="12345678-9" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre del Cliente</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </div>
        </div>
    </div>
    )
}