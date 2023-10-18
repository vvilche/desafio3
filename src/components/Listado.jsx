// Listado de Colaboradores 

import { useState } from "react"
import { BaseColaboradores } from "./BaseColaboradores"
import Buscador from "./Buscador";

//import Buscador from "./Buscador";
import Formulario from "./Formulario";



const Listado = () => {

const [Colaboradores, setColaboradores] = useState(BaseColaboradores);

// Renderizar la tabla con los colaboradores



return (

    <>
    <Buscador placeholder="Buscar colaborador..." colaboradores={Colaboradores} />
    <Formulario setColaboradores={setColaboradores}/>
    </>
    
    )
    
    }


export default Listado