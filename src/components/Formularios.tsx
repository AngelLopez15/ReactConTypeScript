import { useState } from "react"

export default function Formularios() {

  const [formulario, setFormulario] = useState({
    email: '',
    pass:'',
  })
  
  const onChange = (value:string, campo:string) => {
    setFormulario({
      ...formulario,
      [campo]:value,
    })
  }

  return (
    <div>
      <h3>Formulario</h3>
      <input 
        type="text" 
        className="form-control my-2" 
        placeholder="Correo" 
        value={formulario.email}
        onChange={({target})=>onChange(target.value, 'email')}
      />
      <input 
        type="text" 
        className="form-control my-2" 
        placeholder="Contraseña"
        value={formulario.pass}
        onChange={({target})=>onChange(target.value, 'pass')}
      />
      <code>
        <pre>
          {JSON.stringify(formulario, null, 2)}
        </pre>
      </code>
    </div>
  )
}
