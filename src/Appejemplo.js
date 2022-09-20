import { useState } from "react";

const Primercomponente =()=>{
  
  //React tiene una función interna llamada useState
  // es una función que se encarga de manejar el estado de una variable
  // para poder usar esa funció tengo que importarla
  // al usar useState la forma en la cual creamos una variable cambia
  //porque debemos definir 2 cosas primer el nombre de la variable y segundo la función la cual cambiará el estado
  // count: la variable , esta va a mostrar un valor
  // setCount: va a ser la función que se encargara de poner un valor a count
  // ojo el valor que va dentro de useState será el valor inicial de la variable

  const [count, setCount] = useState(0)
  const sumar =()=>{
    setCount(count + 10);
  }

  const restar =()=>{
    setCount(count -1);
  }

  const parametros =(a,b)=>{
    setCount(a+b);
  }

  return(

    <div>
      <h1>Este es mi componente</h1>
      <h2>{count}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      {/* Si queremos usar paréntesis al momento de llamr una función sdebemos primero ejecutarlos como n callback */}
      {/* Ademas es la forma en el caso nuestro reciba el parámetro */}
      <button onClick={()=>parametros (10,20)}>calcular</button>
    </div>
  )
}

export default Primercomponente;