import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqRespListado, Usuario } from '../interfaces/reqRes';

export default function Usuarios() {

  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  const paginaRef = useRef(1)

  useEffect(() => {
    // Haciendo el llamado a la API
    cargarUsuarios()
  }, [])

  // Para hacer la paginación
  const cargarUsuarios = async () => {
    
    const resp = await reqResApi.get<ReqRespListado>('/users', {
      params: {
        page: paginaRef.current
      }
    })

      if (resp.data.data.length > 0 ) {
        setUsuarios(resp.data.data)
        paginaRef.current++
      } else {
        alert('No hay más registros')
      }
  }

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
        className="btn btn-primary"
        onClick = {cargarUsuarios}
      >
        Siguiente
      </button>
    </div>
  )
}
