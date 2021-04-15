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

type LoginPayload = {
  username: string,
  nombre: string,
}

// Declarando un type para hacer el tipo de dato de la accion
type AuthAction = {type: 'logout' } | {type: 'login', payload: LoginPayload }

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
      case 'login':
        // podemos aplicar desestructutacion
        // const {nombre, username} = action.payload
        return {
          validando:false,
          token: 'abc1234acde',
          nombre: action.payload.nombre,
          username: action.payload.username,
        }
    default:
      return state;
  }
}

export default function Login() {
  
  const [{validando, token, nombre, username}, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    setTimeout(()=>{
      dispatch({type:'logout'})
    }, 2000)
  }, [])

  const login = () => {
    dispatch({type: 'login', payload: {
      nombre: 'Angel López',
      username: 'Fury',
    }})
  }

  const logout = () => {
    dispatch({type: 'logout'})
  }

  if(validando) {
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
      <div>
        {
          (token) 
          ? 
            <div className="alert alert-success">
              <p>Autenticado como: {nombre}</p>
            </div>
          :
            <div className="alert alert-danger">
              <p>No autenticado</p>
            </div>
        }
      </div>
      <div>
        {
          (token)
          ? 
            <button className="btn btn-danger mx-2" onClick={logout}>Logout</button>
          :
            <button className="btn btn-primary mx-2" onClick={login}>Login</button>
        }
      </div>
    </div>
  )
}
