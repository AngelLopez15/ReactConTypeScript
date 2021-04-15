import { useEffect } from "react"
import { reqResApi } from "../api/reqRes"

export default function Usuarios() {

  useEffect(() => {
    // Haciendo el llamado a la API
    reqResApi.get('/users')
      .then(resp => {
        
      })
      .catch(err => console.log(err))
  }, [])

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

        </tbody>
      </table>
    </div>
  )
}
