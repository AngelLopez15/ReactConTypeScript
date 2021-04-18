import useUsuarios from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/reqRes';

export default function UsuariosCustom() {

  const {usuarios, paginaSiguiente, paginaAnterior} = useUsuarios()

  const renderItem = ({id, first_name, last_name, email, avatar}:Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img src={avatar} alt={first_name} style={{width:35, borderRadius:50}}/>
        </td>
        <td>{first_name} {last_name}</td>
        <td>{email}</td>
      </tr>
    )
  }

  return (
    <div>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map(renderItem)
          }
        </tbody>
      </table>
      <button
        className="btn btn-primary mx-2"
        onClick = {paginaAnterior}
      >
        Anterior
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick = {paginaSiguiente}
      >
        Siguiente
      </button>
    </div>
  )
}
