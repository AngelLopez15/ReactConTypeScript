// El objetivo de una interfaz es que typescript sepa como lucen los objetos
interface Persona {
  nombreCompleto: string,
  edad: number,
  direccion:Direccion,
}

// Cuando una interfaz tiene un objeto anidado lo se debe de hacer es declarar
// otra interfaz
interface Direccion {
  pais: string,
  casaNo: number,
}

// NOTA: Las interfaces no sirven para crear instancias

export default function ObjetosLiterales() {

  // declarando un objeto haciendo uso de la interfaz
  const persona:Persona = {
    nombreCompleto: 'Angel López',
    edad: 30,
    direccion: {
      pais: 'México',
      casaNo: 1,
    }
  }

  return (
    <div>
      <h3>Objetos Literales</h3>
      <code>
        <pre>
          {
            JSON.stringify(persona, null, 2)
          }
        </pre>
      </code>
    </div>
  )
}
