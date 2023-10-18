import React, { useState, useRef } from "react";
import { BaseColaboradores } from "./BaseColaboradores";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import Alerta from "./Alert"



//const Alerta = ({ tipo, mensaje }) => {
  ////<div className={`alerta alerta-${tipo}`}>
      //<p>{mensaje}</p>
    //</div>
  //);
//}; 

const Formulario = ({setColaboradores}) => {
  const [usuarios, setUsuarios] = useState(BaseColaboradores);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const form = useRef();


  // Capturo los datos del formulario
  const handleChange = (e) => {
    setNuevoUsuario({ ...nuevoUsuario, [e.target.name]: e.target.value });
  };

  // Validar los campos del formulario
  const validarFormulario = () => {
    if (
      nuevoUsuario.nombre.trim() &&
      nuevoUsuario.correo.trim() &&
      nuevoUsuario.edad.trim() &&
      nuevoUsuario.cargo.trim() &&
      nuevoUsuario.telefono.trim()
    ) {
      return true;

     
    } else {
      setMensajeAlerta("Por favor, complete todos los campos del formulario");
      setMostrarAlerta(true);
      return false;
    }
  };

  // Enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    // Validar que el usuario no exista previamente
    const existeUsuario = usuarios.some(
      usuario => usuario.correo === nuevoUsuario.correo
    );

    if (existeUsuario) {
      setMensajeAlerta("El usuario ya existe");
      setMostrarAlerta(true);
      return;
    }
    setNuevoUsuario({ ...nuevoUsuario, id: Math.random() });
    usuarios.push(nuevoUsuario);

    // Actualizar el estado de la lista de usuarios
    //setUsuarios([usuarios]);
    setColaboradores([...usuarios])


    // Ocultar la alerta
    setMostrarAlerta(false);

    // Mostrar mensaje de éxito
    setMensajeAlerta("Usuario creado correctamente");
    form.current.reset()
    setMostrarAlerta(true);
  };



  return (
    <>
    <div className="container"> 

    <div className="formulario">
        <h2>Agregar Colaborador</h2>
        <Form ref={form} onSubmit={handleSubmit}>
          <FloatingLabel className="mb-3"
            controlId="nombre"
            label="Nombre"
          >
            <Form.Control type="text" name="nombre" onChange={handleChange} />
          </FloatingLabel>
          <FloatingLabel className="mb-3"
            controlId="correo"
            label="Correo"
          >
            <Form.Control type="text" name="correo" onChange={handleChange} />
          </FloatingLabel>
          <FloatingLabel className="mb-3"
            controlId="edad"
            label="Edad"
          >
            <Form.Control type="text" name="edad" onChange={handleChange} />
          </FloatingLabel>
          <FloatingLabel    className="mb-3"
            controlId="cargo"
            label="Cargo"
          >
            <Form.Control type="text" name="cargo" onChange={handleChange} />
          </FloatingLabel>
          <FloatingLabel className="mb-3"
            controlId="telefono"
            label="Telefono"
          >
            <Form.Control type="text" name="telefono" onChange={handleChange} />
          </FloatingLabel>
          <button  type="submit">Agregar Colaborador</button>
        </Form>
      </div >

      {mostrarAlerta && <Alerta tipo="error" mensaje={mensajeAlerta} />}
      
   

    </div>
     
    </>
  );
};

export default Formulario;




