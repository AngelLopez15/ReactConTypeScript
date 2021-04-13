import useCounter from "../hooks/useCounter"

export default function CustomHookContador() {

  const {contador, incrementar} = useCounter(100);

  return (
    <div>
      <h3>Contador con Hook</h3>
      <h4>{contador}</h4>
      <button className="btn btn-secondary mx-2" onClick={ () => incrementar(-1)}>-1</button>
      <button className="btn btn-primary mx-2" onClick={ () => incrementar(1)}>+1</button>
    </div>
  )
}
