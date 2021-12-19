import React from "react";

import { Table } from "reactstrap";
import Spinner from "../compartidos/componentes/Spinner";
import HeaderPage from "../compartidos/componentes/HeaderPage";
import { useGetInscripciones } from "./custom-hooks";

export default function Inscripciones() {
  const { loading, data } = useGetInscripciones();

  const mostrarFormularioUsuario = (usuario) => {
    console.log("");
  };

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container col-12">
          <HeaderPage name={"Inscripciones"} nombreBoton={"Crear Inscripcion"} actionBoton={mostrarFormularioUsuario} />
          <Table dark>
            <thead>
              <tr>
                <th>ID proyecto</th>
                <th>ID Estudiante</th>
                <th>Estado</th>
                <th>Fecha Inicio</th>
                <th>Fecha Terminación</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {data.getInscripciones.map((inscripciones) => (
                <tr key={inscripciones._id}>
                  <td>{inscripciones._id}</td>
                  <td>{inscripciones.idproyecto}</td>
                  <td>{inscripciones.identificacionEstudiante}</td>
                  <td>{inscripciones.estado}</td>
                  <td>{inscripciones.fechaIngreso}</td>
                  <td>{inscripciones.fechaEgreso}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => this.deleteFacturas(inscripciones._id)}>
                      Aprobar
                    </button>{" "}
                    <button className="btn btn-warning" onClick={() => this.deleteFacturas(inscripciones._id)}>
                      Rechazar
                    </button>{" "}
                    <button className="btn btn-success" onClick={() => this.deleteFacturas(inscripciones._id)}>
                      Ver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </React.Fragment>
  );
}
