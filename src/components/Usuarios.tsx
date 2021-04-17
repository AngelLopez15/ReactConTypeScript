import { useEffect, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqRespListado, Usuario } from '../interfaces/reqRes';

export default function Usuarios() {

  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  useEffect(() => {
    // Haciendo el llamado a la API
    reqResApi.get<ReqRespListado>('/users')
      .then(resp => {
        setUsuarios(resp.data.data)
      })
      .catch(err => console.log(err))
  }, [])

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
    </div>
  )
}
