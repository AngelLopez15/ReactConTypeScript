import Contador from './components/Contador';
import CustomHookContador from './components/CustomHookContador';
import Funciones from './typescript/Funciones';
import ObjetosLiterales from './typescript/ObjetosLiterales';
import TiposBasicos from './typescript/TiposBasicos';

export default function App() {
  return (
    <div>
      <h1>Introduccion a React usando TypeScript</h1>
      <hr/>
      <TiposBasicos />
      <hr/>
      <ObjetosLiterales />
      <hr/>
      <Funciones />
      <hr/>
      <Contador />
      <hr/>
      <CustomHookContador />
    </div>
  )
}
