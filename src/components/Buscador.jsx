import { useState } from "react";
import { Table } from "react-bootstrap";



const Buscador = ({ placeholder, colaboradores }) => {
    const [search, setSearch] = useState("");

    const MostrarColaboradores = ! search ? colaboradores : colaboradores.filter((colaborador) => colaborador.nombre.toLowerCase().includes(search.toLowerCase())); 
    
    return (

        <div className="tarjeta-container">
      <input className="container-fluid bg-body-tertiary alert-success padding-10px mt-5 mb-5" 
        type="text "
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

       

        <div>
        <Table className="tabladecolaboradores" striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {MostrarColaboradores.map((colaborador) => (
              <tr key={colaborador.id}>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
    );
}

export default Buscador;


    