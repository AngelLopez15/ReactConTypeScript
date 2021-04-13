import { useState } from "react"

export default function useCounter(inicial:number = 0) {
  
  const [contador, setContador] = useState(inicial)

  const incrementar = (numero:number) => {
    setContador(contador + numero)
  }

  return {
    contador,
    incrementar
  }
}
