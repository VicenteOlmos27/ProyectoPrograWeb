export default function CrearUsuario(){
    return(
        <div id="crearusuario" >
        <div className="card mb-4">
            <div className="card-header">Crear Usuario</div>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input type="password" className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-success">Crear Cuenta</button>
                </form>
            </div>
        </div>
    </div>
    )
}