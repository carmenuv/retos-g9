import { useState } from "react";

const FormRegister =()=>{
  //como podemos capturar el valor del input
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  //en react la forma de capturar el valor de un input es usando el onChange este eventp
  // nos va a permitir capturr el valor dels inputs y lo guardo en una variable "NOMBRE"
  //la palabra que se usa mucho en react HANDLE
  
  const handleInputName =(e)=>{
    // que debemos hacer para poder darle el valor
    //recordemos que el valor va dentro de ()
    setNombre(e.target.value)
  }

  const handleInputLastName =(e)=>{
    setApellido(e.target.value)
  }

  

  return(
    <div>
      <h4>Formulario de Registro</h4>
      <h4>Nombre {nombre}</h4>
      <h4>Apellido {apellido}</h4>
      

      <form action="">
        <input type="text" placeholder="Ingrese nombre" onChange={handleInputName}/>
        <input type="text" placeholder="Ingrese apellido" onChange={handleInputLastName}/>
        
        
      </form>
    </div>
  )
}

export default FormRegister;