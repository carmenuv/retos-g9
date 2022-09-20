import { useState } from "react";
import { TextField } from "@mui/material";

const FormRegisterTwo =()=>{
  const [valorDeInputs, setValorInputs]= useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
  });

  const handleInputValues =(e)=>{
    const{name,value} = e.target;

    setValorInputs({
      ...valorDeInputs,
      [name]: value,
    });
  }

  return(
    <div>
      <h2>Formulario de Registro</h2>
      <h4>Nombre {valorDeInputs.nombre}</h4>
      <h4>Apellido {valorDeInputs.apellido}</h4>
      <h4>Email {valorDeInputs.email}</h4>
      <h4>Password {valorDeInputs.password}</h4>
      

      <form action="">
        <p><TextField id="filled-basic" label="Nombre" variant="filled" type="text" name="nombre" onChange={handleInputValues}/></p>
        <p><TextField id="filled-basic" label="Apellido" variant="filled" type="text" name="apellido" onChange={handleInputValues}/></p>
        <p><TextField id="filled-basic" label="Email" variant="filled" type="email" name="email" onChange={handleInputValues}/></p>
        <p><TextField id="filled-basic" label="Password" variant="filled" type="password" name="password" onChange={handleInputValues}/></p>
        
        
      </form>
    </div>
  )
}

export default FormRegisterTwo;