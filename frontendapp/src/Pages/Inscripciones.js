import { useQuery } from "@apollo/client";
import React from "react";
import { GET_INSCRIPCIONES } from "../consultas/qinscripciones";

import { Card, CardTitle, Table } from "reactstrap";



export default function Inscripciones() {
  const { loading, data } = useQuery(GET_INSCRIPCIONES);



  return (
    <React.Fragment>
      {loading ? (
        <p>Cargando Datos...</p>
      ) : (
        <div className="container col-12">
          <div><Card body  color="primary"
    inverse>
            <CardTitle className="text-center">INSCRIPCIONES A PROYECTOS</CardTitle></Card>
          </div>
          <Table dark>
            <thead>
              <tr>
                <th>_id</th>
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

                  <button
                      className="btn btn-primary"
                      onClick={() => this.deleteFacturas(inscripciones._id)}
                    >
                      Aprobar
                    </button> {" "}
                    <button
                      className="btn btn-warning"
                      onClick={() => this.deleteFacturas(inscripciones._id)}
                    >
                      Rechazar
                    </button>{" "}
                    <button
                      className="btn btn-success"
                      onClick={() => this.deleteFacturas(inscripciones._id)}
                    >
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
