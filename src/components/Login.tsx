import { useEffect, useReducer } from "react"

// Creando una interfaz para decirle al reducer el tipo de dato que debe de retornar
interface AuthState {
  validando: boolean,
  token: string | null,
  username: string,
  nombre: string,
}

// Estado inicial
const initialState: AuthState = {
  validando: true,
  token: null,
  username: '',
  nombre: '',
}

// Declarando un type para hacer el tipo de dato de la accion
type AuthAction = {type: 'logout' }

// Declarando el reducer
const authReducer = (state: AuthState, action:AuthAction):AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validando:false,
        token:null,
        nombre:'',
        username:'',
      }
    default:
      return state;
  }
}

export default function Login() {
  
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    setTimeout(()=>{
      dispatch({type:'logout'})
    }, 2000)
  }, [])

  if(state.validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">
          validando...
        </div>
      </>
    )
  }

  return (
    <div>
      <h3>Login</h3>
      <div className="alert alert-danger">
        <p>No autenticado</p>
      </div>
      <div className="alert alert-success">
        <p>Autenticado</p>
      </div>
      <button className="btn btn-primary mx-2">Login</button>
      <button className="btn btn-danger mx-2">Logout</button>
    </div>
  )
}
