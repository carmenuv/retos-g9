import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import FormRegister from "../FormRegister";
import Primercomponente from "../Appejemplo";
import Git from "../PracticaGit";
import Register from "../login";
import Header from "../Header";
import FormRegisterTwo from "../FormTwo";
import Flags from "../Flags";
import Detail from "../Detail";

// router va a ser un componente el cual se encargará de retornar las rutas de su respectiva vista

const Router =()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<FormRegister/>}/>       
        <Route path="/appejemplo" element={<Primercomponente/>}/>
        <Route path="/git" element={<Git/>}/>
        <Route path="/login" element={<Register/>}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/form2" element={<FormRegisterTwo/>}/>
        <Route path="/banderas" element={<Flags/>}/>
        <Route path="/banderas/detail/:name" element={<Detail/>}/>


        
      </Routes>    
    </BrowserRouter>


  )

}

export default Router;