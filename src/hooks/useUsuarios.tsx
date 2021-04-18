import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes";
import { Usuario, ReqRespListado } from '../interfaces/reqRes';

export default function useUsuarios() {
  
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
        // paginaRef.current++
      } else {
        paginaRef.current--
        alert('No hay más registros')
      }
  }

  const paginaSiguiente = () => {
    paginaRef.current ++
    cargarUsuarios()
  }

  const paginaAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--
      cargarUsuarios()
    }
  }

  return {
    usuarios,
    paginaSiguiente,
    paginaAnterior
  }

}
