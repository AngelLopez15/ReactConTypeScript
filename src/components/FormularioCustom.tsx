import {useForm} from "../hooks/useForm"

export default function FormularioCustom() {

  const {formulario, email, pass, onChange} = useForm({
    email: '',
    pass:'',
  })

  return (
    <div>
      <h3>Formulario</h3>
      <input 
        type="text" 
        className="form-control my-2" 
        placeholder="Correo" 
        value={email}
        onChange={({target})=>onChange(target.value, 'email')}
      />
      <input 
        type="text" 
        className="form-control my-2" 
        placeholder="Contraseña"
        value={pass}
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
