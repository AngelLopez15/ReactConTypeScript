import { useState } from "react"

export default function Contador() {

  const [contador, setContador] = useState(0)

  const incrementar = (numero:number) => {
    setContador(contador + numero)
  }

  return (
    <div>
      <h3>Contador</h3>
      <h4>{contador}</h4>
      <button className="btn btn-primary mx-2" onClick={ () => incrementar(1)}>+1</button>
      <button className="btn btn-secondary mx-2" onClick={ () => incrementar(-1)}>-1</button>
    </div>
  )
}
