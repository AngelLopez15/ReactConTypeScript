export default function Funciones() {

  // Definir el tipo de retorno de una funcion
  const sumar = (a:number, b:number):Number => {
    return a + b;
  }

  return (
    <div>
      <h3>Funciones</h3>
      <p>El resultado de la suma es: {sumar(5,4)}</p>
    </div>
  )
}
