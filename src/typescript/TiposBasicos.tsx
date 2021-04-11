export default function TiposBasicos() {

  // Con el simbolo de "|" podemos asignar si se necesita, todos los Tipos
  // de datos que necesite una variable
  // let nombre: string | number = 'Angel';
  
  const nombre: string  = 'Angel';
  const edad:number = 30;
  const estActivo:boolean = true;

  const poderes: string[] = ['volar', 'velocidad', 'curación'];

  return (
    <div>
      <h2>Tipos Basicos</h2>
      <h3>{nombre}</h3>
      <h3>{edad}</h3>
      <h3>Estado:</h3>
      <p>{(estActivo) ? 'Activo' : 'Inactivo'}</p>
      <h3>Poderes:</h3>
      <p>{poderes.join(',')}</p>
    </div>
  )
}
